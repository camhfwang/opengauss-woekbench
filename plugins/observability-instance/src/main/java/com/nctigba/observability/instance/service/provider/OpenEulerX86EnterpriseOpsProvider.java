package com.nctigba.observability.instance.service.provider;

import java.util.List;

import org.opengauss.admin.common.core.domain.entity.ops.OpsClusterEntity;
import org.opengauss.admin.common.core.domain.entity.ops.OpsClusterNodeEntity;
import org.opengauss.admin.common.core.domain.model.ops.JschResult;
import org.opengauss.admin.common.enums.ops.OpenGaussVersionEnum;
import org.opengauss.admin.common.exception.ops.OpsException;
import com.nctigba.observability.instance.util.JschUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gitee.starblues.bootstrap.annotation.AutowiredType;
import com.jcraft.jsch.Session;
import com.nctigba.observability.instance.entity.OpsWdrEntity.WdrScopeEnum;
import com.nctigba.observability.instance.service.ClusterOpsProviderManager.OpenGaussSupportOSEnum;

import cn.hutool.core.util.StrUtil;
import lombok.extern.slf4j.Slf4j;

/**
 * @author lhf
 * @date 2022/8/12 09:23
 **/
@Slf4j
@Service
public class OpenEulerX86EnterpriseOpsProvider extends AbstractOpsProvider {
	@Autowired
	@AutowiredType(AutowiredType.Type.PLUGIN_MAIN)
	private JschUtil jschUtil;

	@Override
	public OpenGaussVersionEnum version() {
		return OpenGaussVersionEnum.ENTERPRISE;
	}

	@Override
	public OpenGaussSupportOSEnum os() {
		return OpenGaussSupportOSEnum.OPENEULER_X86_64;
	}

	@Override
	public void enableWdrSnapshot(Session session, OpsClusterEntity clusterEntity,
			List<OpsClusterNodeEntity> opsClusterNodeEntities, WdrScopeEnum scope, String dataPath) {
		String command;
		if (StrUtil.isEmpty(dataPath)) {
			command = "gs_guc reload -I all -c \"enable_wdr_snapshot=on\"";
		} else {
			command = "gs_guc reload -D " + dataPath + " -c \"enable_wdr_snapshot=on\"";
		}

		try {
			JschResult jschResult = jschUtil.executeCommand(command, session);
			if (0 != jschResult.getExitCode()) {
				log.error("set enable_wdr_snapshot parameter failed, exit code: {}, error message: {}",
						jschResult.getExitCode(), jschResult.getResult());
				throw new OpsException("Failed to set the enable_wdr_snapshot parameter");
			}

		} catch (Exception e) {
			log.error("Failed to set the enable_wdr_snapshot parameter", e);
			throw new OpsException("Failed to set the enable_wdr_snapshot parameter");
		}
	}
}