package com.nctigba.datastudio.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class DatabaseCreateSynonymDTO {
    private String uuid;
    private String webUser;
    private String connectionName;
    private String schema;
    private String synonymName;
    private String objectName;
    private boolean replace;
}
