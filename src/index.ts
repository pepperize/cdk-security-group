import * as ec2 from "@aws-cdk/aws-ec2";
import { Construct } from "@aws-cdk/core";
import * as cr from "@aws-cdk/custom-resources";

export interface SecurityGroupProps extends ec2.SecurityGroupProps {}

export class SecurityGroup extends ec2.SecurityGroup {
  /**
   * An attribute that represents the security group name.
   */
  public readonly securityGroupName: string;
  constructor(scope: Construct, id: string, props: SecurityGroupProps) {
    super(scope, id, props);

    const securityGroup = new cr.AwsCustomResource(this, "DescribeSGCustomResource", {
      onCreate: {
        service: "EC2",
        action: "describeSecurityGroups", // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeSecurityGroups-property
        parameters: {
          GroupIds: [this.securityGroupId],
        },
        physicalResourceId: cr.PhysicalResourceId.of(this.securityGroupId),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    this.securityGroupName = securityGroup.getResponseField("SecurityGroups.0.GroupName");
  }
}
