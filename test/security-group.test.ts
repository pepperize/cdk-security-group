import { Template } from "@aws-cdk/assertions";
import { Vpc } from "@aws-cdk/aws-ec2";
import { Stack } from "@aws-cdk/core";
import { SecurityGroup } from "../src";

describe("SecurityGroup", () => {
  it("should have named security group", () => {
    // Given
    const stack = new Stack();
    const vpc = new Vpc(stack, "vpc");
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
    const vpc = new Vpc(stack, "vpc");
    // When
    new SecurityGroup(stack, "id", { vpc: vpc, securityGroupName: "pepperize" });
    // Then
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
