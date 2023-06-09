package com.nctigba.observability.sql.model;

import java.util.Date;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 系统表-慢日志明细
 */
@Data
@TableName("statement_history")
@Accessors(chain = true)
public class StatementHistory {
	private String dbName;
	private String schemaName;
	private String clientAddr;
	private Long uniqueQueryId;
	@TableField("query")
	private String sqlTemplate;
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss'Z'", timezone = "UTC", shape = JsonFormat.Shape.ANY)
	private Date startTime;
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss'Z'", timezone = "UTC", shape = JsonFormat.Shape.ANY)
	private Date finishTime;
	private Long nReturnedRows;
	private Long nTuplesReturned;
	private Long dbTime;
	private Long cpuTime;
	private Long executionTime;
	private Long parseTime;
	private Long plExecutionTime;
	private Long dataIoTime;
	private Long lockWaitTime;
	private Boolean isSlowSql;
}