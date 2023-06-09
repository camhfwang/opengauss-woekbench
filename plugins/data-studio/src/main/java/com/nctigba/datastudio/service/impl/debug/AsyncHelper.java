package com.nctigba.datastudio.service.impl.debug;

import com.nctigba.datastudio.base.WebSocketServer;
import com.nctigba.datastudio.model.PublicParamReq;
import com.nctigba.datastudio.model.entity.OperateStatusDO;
import com.nctigba.datastudio.util.DebugUtils;
import com.nctigba.datastudio.util.LocaleString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.nctigba.datastudio.constants.CommonConstants.CONNECTION;
import static com.nctigba.datastudio.constants.CommonConstants.FIVE_HUNDRED;
import static com.nctigba.datastudio.constants.CommonConstants.OID;
import static com.nctigba.datastudio.constants.CommonConstants.RESULT;
import static com.nctigba.datastudio.constants.CommonConstants.STATEMENT;
import static com.nctigba.datastudio.constants.CommonConstants.SUCCESS;
import static com.nctigba.datastudio.constants.SqlConstants.PARENTHESES_SEMICOLON;
import static com.nctigba.datastudio.constants.SqlConstants.TURN_OFF_SQL;
import static com.nctigba.datastudio.enums.MessageEnum.operateStatus;
import static com.nctigba.datastudio.enums.MessageEnum.table;
import static com.nctigba.datastudio.enums.MessageEnum.text;
import static com.nctigba.datastudio.enums.MessageEnum.window;

@Service
@Slf4j
public class AsyncHelper {
    @Async
    public void task(WebSocketServer webSocketServer, PublicParamReq paramReq) throws SQLException, IOException {
        log.info("AsyncHelper paramReq is: " + paramReq);
        String windowName = paramReq.getWindowName();
        Statement statement = webSocketServer.getStatement(windowName);
        try {
            ResultSet resultSet = statement.executeQuery(DebugUtils.prepareSql(paramReq));
            Map<String, Object> map = DebugUtils.parseResultSet(resultSet);
            log.info("AsyncHelper map is: " + map);
            List<List<Object>> list = (List<List<Object>>) map.get(RESULT);
            if (list.size() == 1) {
                if (list.get(0).size() == 1) {
                    webSocketServer.sendMessage(windowName, text, SUCCESS, map);
                } else {
                    Map<String, String> messageMap = new HashMap<>();
                    messageMap.put(RESULT, LocaleString.transLanguageWs("1007", webSocketServer));
                    webSocketServer.sendMessage(windowName, text, SUCCESS, messageMap);
                    webSocketServer.sendMessage(windowName, table, SUCCESS, map);
                }
            } else {
                webSocketServer.sendMessage(windowName, text, SUCCESS, map);
            }
        } catch (Exception e) {
            webSocketServer.sendMessage(windowName, window, FIVE_HUNDRED, e.getMessage(), e.getStackTrace());
        }

        OperateStatusDO operateStatusDO = webSocketServer.getOperateStatus(windowName);
        operateStatusDO.enableStartDebug();
        webSocketServer.setOperateStatus(windowName, operateStatusDO);

        Map<String, Object> operateStatusMap = new HashMap<>();
        operateStatusMap.put(RESULT, operateStatusDO);
        webSocketServer.sendMessage(windowName, operateStatus, SUCCESS, operateStatusMap);

        String oid = (String) webSocketServer.getParamMap(windowName).get(OID);
        statement.execute(TURN_OFF_SQL + oid + PARENTHESES_SEMICOLON);
        log.info("AsyncHelper oid is: " + oid);

        Connection conn = (Connection) webSocketServer.getParamMap(windowName).get(CONNECTION);
        Statement stat = (Statement) webSocketServer.getParamMap(windowName).get(STATEMENT);
        if (stat != null) {
            stat.close();
            stat.cancel();
            webSocketServer.setParamMap(windowName, STATEMENT, null);
        }
        if (conn != null) {
            conn.close();
            webSocketServer.setParamMap(windowName, CONNECTION, null);
        }
        statement.close();
        webSocketServer.setStatement(windowName, null);
        Connection connection = webSocketServer.getConnection(windowName);
        connection.close();
        webSocketServer.setConnection(windowName, null);
    }
}
