import { DataSource } from "../data-source";
import { PostgreSQLDataSourceConfig } from "./postgre-sql-config";

export class PostgreSQLSource extends DataSource {
  constructor(public config?: PostgreSQLDataSourceConfig) {
    super();
  }

  init(): string {
    return "PostgreSQL Data Source";
  }
}
