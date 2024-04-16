// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface CdkConstructFullTextSearchTypescriptProps {
  // Define construct properties here
}

export class CdkConstructFullTextSearchTypescript extends Construct {

  constructor(scope: Construct, id: string, props: CdkConstructFullTextSearchTypescriptProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkConstructFullTextSearchTypescriptQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
