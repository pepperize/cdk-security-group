import { aws_ec2, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { SecurityGroup } from "../src";

describe("SecurityGroup", () => {
  it("should have named security group", () => {
    // Given
    const stack = new Stack();
    const vpc = new aws_ec2.Vpc(stack, "vpc");
    // When
    new SecurityGroup(stack, "id", {
      vpc: vpc,
      securityGroupName: "pepperize",
    });
    // Then
    const template = Template.fromStack(stack);
    template.hasResource("AWS::EC2::SecurityGroup", {});
    template.hasResourceProperties("AWS::EC2::SecurityGroup", {
      GroupName: "pepperize",
    });
  });

  it("should match snapshot", () => {
    // Given
    const stack = new Stack();
    const vpc = new aws_ec2.Vpc(stack, "vpc");
    // When
    new SecurityGroup(stack, "id", { vpc: vpc, securityGroupName: "pepperize" });
    // Then
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
