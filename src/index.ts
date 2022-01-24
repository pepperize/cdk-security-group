import { aws_ec2, custom_resources } from "aws-cdk-lib";
import { Construct } from "constructs";

export interface SecurityGroupProps extends aws_ec2.SecurityGroupProps {}

export class SecurityGroup extends aws_ec2.SecurityGroup {
  /**
   * An attribute that represents the security group name.
   */
  public readonly securityGroupName: string;
  constructor(scope: Construct, id: string, props: SecurityGroupProps) {
    super(scope, id, props);

    const securityGroup = new custom_resources.AwsCustomResource(this, "DescribeSGCustomResource", {
      onCreate: {
        service: "EC2",
        action: "describeSecurityGroups", // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeSecurityGroups-property
        parameters: {
          GroupIds: [this.securityGroupId],
        },
        physicalResourceId: custom_resources.PhysicalResourceId.of(this.securityGroupId),
      },
      policy: custom_resources.AwsCustomResourcePolicy.fromSdkCalls({
        resources: custom_resources.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    this.securityGroupName = securityGroup.getResponseField("SecurityGroups.0.GroupName");
  }
}
