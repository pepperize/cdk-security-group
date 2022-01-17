# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### SecurityGroup <a name="@pepperize/cdk-security-group.SecurityGroup" id="pepperizecdksecuritygroupsecuritygroup"></a>

#### Initializers <a name="@pepperize/cdk-security-group.SecurityGroup.Initializer" id="pepperizecdksecuritygroupsecuritygroupinitializer"></a>

```typescript
import { SecurityGroup } from '@pepperize/cdk-security-group'

new SecurityGroup(scope: Construct, id: string, props: SecurityGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizecdksecuritygroupsecuritygroupparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct) | *No description.* |
| [`id`](#pepperizecdksecuritygroupsecuritygroupparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizecdksecuritygroupsecuritygroupparameterprops)<span title="Required">*</span> | [`@pepperize/cdk-security-group.SecurityGroupProps`](#@pepperize/cdk-security-group.SecurityGroupProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize/cdk-security-group.SecurityGroup.parameter.scope" id="pepperizecdksecuritygroupsecuritygroupparameterscope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@pepperize/cdk-security-group.SecurityGroup.parameter.id" id="pepperizecdksecuritygroupsecuritygroupparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@pepperize/cdk-security-group.SecurityGroup.parameter.props" id="pepperizecdksecuritygroupsecuritygroupparameterprops"></a>

- *Type:* [`@pepperize/cdk-security-group.SecurityGroupProps`](#@pepperize/cdk-security-group.SecurityGroupProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`securityGroupName`](#pepperizecdksecuritygroupsecuritygrouppropertysecuritygroupname)<span title="Required">*</span> | `string` | An attribute that represents the security group name. |

---

##### `securityGroupName`<sup>Required</sup> <a name="@pepperize/cdk-security-group.SecurityGroup.property.securityGroupName" id="pepperizecdksecuritygroupsecuritygrouppropertysecuritygroupname"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* `string`

An attribute that represents the security group name.

---


## Structs <a name="Structs" id="structs"></a>

### SecurityGroupProps <a name="@pepperize/cdk-security-group.SecurityGroupProps" id="pepperizecdksecuritygroupsecuritygroupprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SecurityGroupProps } from '@pepperize/cdk-security-group'

const securityGroupProps: SecurityGroupProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#pepperizecdksecuritygroupsecuritygrouppropspropertyvpc)<span title="Required">*</span> | [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc) | The VPC in which to create the security group. |
| [`allowAllOutbound`](#pepperizecdksecuritygroupsecuritygrouppropspropertyallowalloutbound) | `boolean` | Whether to allow all outbound traffic by default. |
| [`description`](#pepperizecdksecuritygroupsecuritygrouppropspropertydescription) | `string` | A description of the security group. |
| [`disableInlineRules`](#pepperizecdksecuritygroupsecuritygrouppropspropertydisableinlinerules) | `boolean` | Whether to disable inline ingress and egress rule optimization. |
| [`securityGroupName`](#pepperizecdksecuritygroupsecuritygrouppropspropertysecuritygroupname) | `string` | The name of the security group. |

---

##### `vpc`<sup>Required</sup> <a name="@pepperize/cdk-security-group.SecurityGroupProps.property.vpc" id="pepperizecdksecuritygroupsecuritygrouppropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

The VPC in which to create the security group.

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="@pepperize/cdk-security-group.SecurityGroupProps.property.allowAllOutbound" id="pepperizecdksecuritygroupsecuritygrouppropspropertyallowalloutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether to allow all outbound traffic by default.

If this is set to true, there will only be a single egress rule which allows all outbound traffic. If this is set to false, no outbound traffic will be allowed by default and all egress traffic must be explicitly authorized.

---

##### `description`<sup>Optional</sup> <a name="@pepperize/cdk-security-group.SecurityGroupProps.property.description" id="pepperizecdksecuritygroupsecuritygrouppropspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`
- *Default:* The default name will be the construct's CDK path.

A description of the security group.

---

##### `disableInlineRules`<sup>Optional</sup> <a name="@pepperize/cdk-security-group.SecurityGroupProps.property.disableInlineRules" id="pepperizecdksecuritygroupsecuritygrouppropspropertydisableinlinerules"></a>

```typescript
public readonly disableInlineRules: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to disable inline ingress and egress rule optimization.

If this is set to true, ingress and egress rules will not be declared under the SecurityGroup in cloudformation, but will be separate elements.  Inlining rules is an optimization for producing smaller stack templates. Sometimes this is not desirable, for example when security group access is managed via tags.  The default value can be overriden globally by setting the context variable '@aws-cdk/aws-ec2.securityGroupDisableInlineRules'.

---

##### `securityGroupName`<sup>Optional</sup> <a name="@pepperize/cdk-security-group.SecurityGroupProps.property.securityGroupName" id="pepperizecdksecuritygroupsecuritygrouppropspropertysecuritygroupname"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* `string`
- *Default:* If you don't specify a GroupName, AWS CloudFormation generates a unique physical ID and uses that ID for the group name.

The name of the security group.

For valid values, see the GroupName parameter of the CreateSecurityGroup action in the Amazon EC2 API Reference.  It is not recommended to use an explicit group name.

---



