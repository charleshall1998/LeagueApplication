package com.tp.LeagueApp.persistance.postgres.mappers;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class IntegerMapper implements RowMapper<Integer> {

    String columnName;

    public IntegerMapper( String columnName ){
        this.columnName = columnName;
    }

    @Override
    public Integer mapRow(ResultSet resultSet, int i) throws SQLException {
        return resultSet.getInt(columnName);
    }
}
