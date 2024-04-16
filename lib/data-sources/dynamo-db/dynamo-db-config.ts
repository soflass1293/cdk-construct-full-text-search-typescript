import { DataSourceConfig } from "../data-source";

export interface DynamoDBDataSourceConfig extends DataSourceConfig {}

export class DynamoDBDataSourceConfig implements DynamoDBDataSourceConfig {
  /**
   *
   */
  constructor() {
    console.log("helllo")
  }
}
