import * as ec2 from "@aws-cdk/aws-ec2";

export interface INamedSecurityGroup {
  getSecurityGroupName(): string;
}

export class SecurityGroup extends ec2.SecurityGroup implements INamedSecurityGroup {
  getSecurityGroupName(): string {
    return this.securityGroupName;
  }
}
