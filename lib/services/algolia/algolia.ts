import { Service } from "../service";
import { AlgoliaConfig } from "./algolia-config";

export class Algolia extends Service {
  constructor(public config?: AlgoliaConfig) {
    super();
  }

  init(): string {
    return "Algolia";
  }
}
