[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![GitHub](https://img.shields.io/github/license/pepperize/cdk-security-group?style=flat-square)](https://github.com/pepperize/cdk-security-group/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-security-group?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-security-group)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-security-group?style=flat-square)](https://pypi.org/project/pepperize.cdk-security-group/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.SecurityGroup?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.SecurityGroup/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.pepperize/cdk-security-group?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/pepperize/cdk-security-group/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/pepperize/cdk-security-group/release.yml?branch=main&label=release&style=flat-square)](https://github.com/pepperize/cdk-security-group/actions/workflows/release.yml)
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

### Java

```xml
<dependency>
  <groupId>com.pepperize</groupId>
  <artifactId>cdk-security-group</artifactId>
  <version>${cdkSecurityGroup.version}</version>
</dependency>
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

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityGroup <a name="SecurityGroup" id="@pepperize/cdk-security-group.SecurityGroup"></a>

#### Initializers <a name="Initializers" id="@pepperize/cdk-security-group.SecurityGroup.Initializer"></a>

```typescript
import { SecurityGroup } from '@pepperize/cdk-security-group'

new SecurityGroup(scope: Construct, id: string, props: SecurityGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-security-group.SecurityGroupProps">SecurityGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-security-group.SecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-security-group.SecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-security-group.SecurityGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-security-group.SecurityGroupProps">SecurityGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.addEgressRule">addEgressRule</a></code> | Add an egress rule for the current security group. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.addIngressRule">addIngressRule</a></code> | Add an ingress rule for the current security group. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.toEgressRuleConfig">toEgressRuleConfig</a></code> | Produce the egress rule JSON for the given connection. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.toIngressRuleConfig">toIngressRuleConfig</a></code> | Produce the ingress rule JSON for the given connection. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-security-group.SecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@pepperize/cdk-security-group.SecurityGroup.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@pepperize/cdk-security-group.SecurityGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEgressRule` <a name="addEgressRule" id="@pepperize/cdk-security-group.SecurityGroup.addEgressRule"></a>

```typescript
public addEgressRule(peer: IPeer, connection: Port, description?: string, remoteRule?: boolean): void
```

Add an egress rule for the current security group.

`remoteRule` controls where the Rule object is created if the peer is also a
securityGroup and they are in different stack. If false (default) the
rule object is created under the current SecurityGroup object. If true and the
peer is also a SecurityGroup, the rule object is created under the remote
SecurityGroup object.

###### `peer`<sup>Required</sup> <a name="peer" id="@pepperize/cdk-security-group.SecurityGroup.addEgressRule.parameter.peer"></a>

- *Type:* aws-cdk-lib.aws_ec2.IPeer

---

###### `connection`<sup>Required</sup> <a name="connection" id="@pepperize/cdk-security-group.SecurityGroup.addEgressRule.parameter.connection"></a>

- *Type:* aws-cdk-lib.aws_ec2.Port

---

###### `description`<sup>Optional</sup> <a name="description" id="@pepperize/cdk-security-group.SecurityGroup.addEgressRule.parameter.description"></a>

- *Type:* string

---

###### `remoteRule`<sup>Optional</sup> <a name="remoteRule" id="@pepperize/cdk-security-group.SecurityGroup.addEgressRule.parameter.remoteRule"></a>

- *Type:* boolean

---

##### `addIngressRule` <a name="addIngressRule" id="@pepperize/cdk-security-group.SecurityGroup.addIngressRule"></a>

```typescript
public addIngressRule(peer: IPeer, connection: Port, description?: string, remoteRule?: boolean): void
```

Add an ingress rule for the current security group.

`remoteRule` controls where the Rule object is created if the peer is also a
securityGroup and they are in different stack. If false (default) the
rule object is created under the current SecurityGroup object. If true and the
peer is also a SecurityGroup, the rule object is created under the remote
SecurityGroup object.

###### `peer`<sup>Required</sup> <a name="peer" id="@pepperize/cdk-security-group.SecurityGroup.addIngressRule.parameter.peer"></a>

- *Type:* aws-cdk-lib.aws_ec2.IPeer

---

###### `connection`<sup>Required</sup> <a name="connection" id="@pepperize/cdk-security-group.SecurityGroup.addIngressRule.parameter.connection"></a>

- *Type:* aws-cdk-lib.aws_ec2.Port

---

###### `description`<sup>Optional</sup> <a name="description" id="@pepperize/cdk-security-group.SecurityGroup.addIngressRule.parameter.description"></a>

- *Type:* string

---

###### `remoteRule`<sup>Optional</sup> <a name="remoteRule" id="@pepperize/cdk-security-group.SecurityGroup.addIngressRule.parameter.remoteRule"></a>

- *Type:* boolean

---

##### `toEgressRuleConfig` <a name="toEgressRuleConfig" id="@pepperize/cdk-security-group.SecurityGroup.toEgressRuleConfig"></a>

```typescript
public toEgressRuleConfig(): any
```

Produce the egress rule JSON for the given connection.

##### `toIngressRuleConfig` <a name="toIngressRuleConfig" id="@pepperize/cdk-security-group.SecurityGroup.toIngressRuleConfig"></a>

```typescript
public toIngressRuleConfig(): any
```

Produce the ingress rule JSON for the given connection.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.fromLookupById">fromLookupById</a></code> | Look up a security group by id. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.fromLookupByName">fromLookupByName</a></code> | Look up a security group by name. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.fromSecurityGroupId">fromSecurityGroupId</a></code> | Import an existing security group into this app. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.isSecurityGroup">isSecurityGroup</a></code> | Return whether the indicated object is a security group. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-security-group.SecurityGroup.isConstruct"></a>

```typescript
import { SecurityGroup } from '@pepperize/cdk-security-group'

SecurityGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-security-group.SecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@pepperize/cdk-security-group.SecurityGroup.isResource"></a>

```typescript
import { SecurityGroup } from '@pepperize/cdk-security-group'

SecurityGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-security-group.SecurityGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLookupById` <a name="fromLookupById" id="@pepperize/cdk-security-group.SecurityGroup.fromLookupById"></a>

```typescript
import { SecurityGroup } from '@pepperize/cdk-security-group'

SecurityGroup.fromLookupById(scope: Construct, id: string, securityGroupId: string)
```

Look up a security group by id.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-security-group.SecurityGroup.fromLookupById.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-security-group.SecurityGroup.fromLookupById.parameter.id"></a>

- *Type:* string

---

###### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@pepperize/cdk-security-group.SecurityGroup.fromLookupById.parameter.securityGroupId"></a>

- *Type:* string

---

##### `fromLookupByName` <a name="fromLookupByName" id="@pepperize/cdk-security-group.SecurityGroup.fromLookupByName"></a>

```typescript
import { SecurityGroup } from '@pepperize/cdk-security-group'

SecurityGroup.fromLookupByName(scope: Construct, id: string, securityGroupName: string, vpc: IVpc)
```

Look up a security group by name.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-security-group.SecurityGroup.fromLookupByName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-security-group.SecurityGroup.fromLookupByName.parameter.id"></a>

- *Type:* string

---

###### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@pepperize/cdk-security-group.SecurityGroup.fromLookupByName.parameter.securityGroupName"></a>

- *Type:* string

---

###### `vpc`<sup>Required</sup> <a name="vpc" id="@pepperize/cdk-security-group.SecurityGroup.fromLookupByName.parameter.vpc"></a>

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `fromSecurityGroupId` <a name="fromSecurityGroupId" id="@pepperize/cdk-security-group.SecurityGroup.fromSecurityGroupId"></a>

```typescript
import { SecurityGroup } from '@pepperize/cdk-security-group'

SecurityGroup.fromSecurityGroupId(scope: Construct, id: string, securityGroupId: string, options?: SecurityGroupImportOptions)
```

Import an existing security group into this app.

This method will assume that the Security Group has a rule in it which allows
all outbound traffic, and so will not add egress rules to the imported Security
Group (only ingress rules).

If your existing Security Group needs to have egress rules added, pass the
`allowAllOutbound: false` option on import.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-security-group.SecurityGroup.fromSecurityGroupId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-security-group.SecurityGroup.fromSecurityGroupId.parameter.id"></a>

- *Type:* string

---

###### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@pepperize/cdk-security-group.SecurityGroup.fromSecurityGroupId.parameter.securityGroupId"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@pepperize/cdk-security-group.SecurityGroup.fromSecurityGroupId.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroupImportOptions

---

##### `isSecurityGroup` <a name="isSecurityGroup" id="@pepperize/cdk-security-group.SecurityGroup.isSecurityGroup"></a>

```typescript
import { SecurityGroup } from '@pepperize/cdk-security-group'

SecurityGroup.isSecurityGroup(x: any)
```

Return whether the indicated object is a security group.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-security-group.SecurityGroup.isSecurityGroup.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether the SecurityGroup has been configured to allow all outbound traffic. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.property.canInlineRule">canInlineRule</a></code> | <code>boolean</code> | Whether the rule can be inlined into a SecurityGroup or not. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | The ID of the security group. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.property.securityGroupVpcId">securityGroupVpcId</a></code> | <code>string</code> | The VPC ID this security group is part of. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.property.uniqueId">uniqueId</a></code> | <code>string</code> | A unique identifier for this connection peer. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.property.defaultPort">defaultPort</a></code> | <code>aws-cdk-lib.aws_ec2.Port</code> | *No description.* |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroup.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | An attribute that represents the security group name. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-security-group.SecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@pepperize/cdk-security-group.SecurityGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@pepperize/cdk-security-group.SecurityGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `allowAllOutbound`<sup>Required</sup> <a name="allowAllOutbound" id="@pepperize/cdk-security-group.SecurityGroup.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean

Whether the SecurityGroup has been configured to allow all outbound traffic.

---

##### `canInlineRule`<sup>Required</sup> <a name="canInlineRule" id="@pepperize/cdk-security-group.SecurityGroup.property.canInlineRule"></a>

```typescript
public readonly canInlineRule: boolean;
```

- *Type:* boolean

Whether the rule can be inlined into a SecurityGroup or not.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@pepperize/cdk-security-group.SecurityGroup.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@pepperize/cdk-security-group.SecurityGroup.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

The ID of the security group.

---

##### `securityGroupVpcId`<sup>Required</sup> <a name="securityGroupVpcId" id="@pepperize/cdk-security-group.SecurityGroup.property.securityGroupVpcId"></a>

```typescript
public readonly securityGroupVpcId: string;
```

- *Type:* string

The VPC ID this security group is part of.

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@pepperize/cdk-security-group.SecurityGroup.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

A unique identifier for this connection peer.

---

##### `defaultPort`<sup>Optional</sup> <a name="defaultPort" id="@pepperize/cdk-security-group.SecurityGroup.property.defaultPort"></a>

```typescript
public readonly defaultPort: Port;
```

- *Type:* aws-cdk-lib.aws_ec2.Port

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@pepperize/cdk-security-group.SecurityGroup.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

An attribute that represents the security group name.

---


## Structs <a name="Structs" id="Structs"></a>

### SecurityGroupProps <a name="SecurityGroupProps" id="@pepperize/cdk-security-group.SecurityGroupProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-security-group.SecurityGroupProps.Initializer"></a>

```typescript
import { SecurityGroupProps } from '@pepperize/cdk-security-group'

const securityGroupProps: SecurityGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroupProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which to create the security group. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroupProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow all outbound traffic by default. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroupProps.property.description">description</a></code> | <code>string</code> | A description of the security group. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroupProps.property.disableInlineRules">disableInlineRules</a></code> | <code>boolean</code> | Whether to disable inline ingress and egress rule optimization. |
| <code><a href="#@pepperize/cdk-security-group.SecurityGroupProps.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The name of the security group. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@pepperize/cdk-security-group.SecurityGroupProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC in which to create the security group.

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@pepperize/cdk-security-group.SecurityGroupProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow all outbound traffic by default.

If this is set to true, there will only be a single egress rule which allows all
outbound traffic. If this is set to false, no outbound traffic will be allowed by
default and all egress traffic must be explicitly authorized.

---

##### `description`<sup>Optional</sup> <a name="description" id="@pepperize/cdk-security-group.SecurityGroupProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* The default name will be the construct's CDK path.

A description of the security group.

---

##### `disableInlineRules`<sup>Optional</sup> <a name="disableInlineRules" id="@pepperize/cdk-security-group.SecurityGroupProps.property.disableInlineRules"></a>

```typescript
public readonly disableInlineRules: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to disable inline ingress and egress rule optimization.

If this is set to true, ingress and egress rules will not be declared under the
SecurityGroup in cloudformation, but will be separate elements.

Inlining rules is an optimization for producing smaller stack templates. Sometimes
this is not desirable, for example when security group access is managed via tags.

The default value can be overriden globally by setting the context variable
'@aws-cdk/aws-ec2.securityGroupDisableInlineRules'.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@pepperize/cdk-security-group.SecurityGroupProps.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string
- *Default:* If you don't specify a GroupName, AWS CloudFormation generates a unique physical ID and uses that ID for the group name.

The name of the security group.

For valid values, see the GroupName
parameter of the CreateSecurityGroup action in the Amazon EC2 API
Reference.

It is not recommended to use an explicit group name.

---



