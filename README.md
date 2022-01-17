[![GitHub](https://img.shields.io/github/license/pepperize/cdk-security-group?style=flat-square)](https://github.com/pepperize/cdk-security-group/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-security-group?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-security-group)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-security-group?style=flat-square)](https://pypi.org/project/pepperize.cdk-security-group/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.SecurityGroup?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.SecurityGroup/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/cdk-security-group/release/main?label=release&style=flat-square)](https://github.com/pepperize/cdk-security-group/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-security-group?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-security-group/releases)

# AWS CDK SecurityGroup

This project provides a CDK construct to create an EC2 SecurityGroup, which property `securityGroupName` returns the
GroupName.

> The [CDK EC2 SecurityGroup](https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-ec2.SecurityGroup.html)
> returns the GroupId from the `Ref` return value of [AWS::EC2::SecurityGroup](https://docs.aws.amazon.com/de_de/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html),
> rather than the GroupName.

## Install

### TypeScript

```shell
npm install @pepperize/cdk-security-group
```

or

```shell
yarn add @pepperize/cdk-security-group
```

### Python

```shell
pip install pepperize.cdk-security-group
```

### C# / .Net

```
dotnet add package Pepperize.CDK.SecurityGroup
```

## Example

```shell
npm install @pepperize/cdk-security-group
```

See [API.md](https://github.com/pepperize/cdk-security-group/blob/main/API.md).

```typescript
import { SecurityGroup } from "@pepperize/cdk-security-group";

const securityGroup = new SecurityGroup(this, "SecurityGroup", {});

// Pass to another construct
new OtherConstruct(this, OtherConstruct, {
  SecurityGroupName: securityGroup.securityGroupName,
});
```
