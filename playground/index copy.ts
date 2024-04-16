import { Algolia, OpenSearch } from "../lib";
import { DynamoDBDataSource, PostgreSQLSource } from "../lib";

const o = new OpenSearch();
const a = new Algolia();
const d = new DynamoDBDataSource();
const p = new PostgreSQLSource();
console.log(o.init());
console.log(a.init());
console.log(d.init());
console.log(p.init());
