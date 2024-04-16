import { Searchable } from "../../decorators";
import { DataSource } from "../data-source";
import { DynamoDBDataSourceConfig } from "./dynamo-db-config";

@Searchable
export class DynamoDBDataSource extends DataSource {
  constructor(public config?: DynamoDBDataSourceConfig) {
    super();
  }

  init(): string {
    return "Dynamo DB Data Source";
  }
}
