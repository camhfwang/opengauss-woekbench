package com.nctigba.observability.instance.model.monitoring;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.Data;

@Data
public class MonitoringMetric {
    private JSONObject metric;
    private JSONArray value;
    private JSONArray values;
}
