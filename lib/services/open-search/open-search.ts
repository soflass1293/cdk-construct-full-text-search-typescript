import { Service } from "../service";
import { OpenSearchConfig } from "./open-search-config";

export class OpenSearch extends Service {
  constructor(public config?: OpenSearchConfig) {
    super();
  }

  init(): string {
    return "Open Search";
  }
}
