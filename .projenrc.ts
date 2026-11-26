const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const { javascript } = require("projen");
const project = new AwsCdkConstructLibrary({
  author: "Ivan Ovdiienko",
  authorAddress: "info@pepperize.com",
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "2.278.0",
  jsiiVersion: "~6.0.0",
  name: "@pepperize/cdk-security-group",
  description:
    "This project provides a CDK construct to create an EC2 SecurityGroup, which property `securityGroupName` returns the GroupName.",
  keywords: ["aws", "cdk", "security-group", "ec2"],
  repositoryUrl: "https://github.com/pepperize/cdk-security-group.git",

  projenrcTs: true,
  minNodeVersion: "22.13.0",
  workflowNodeVersion: "24.x",
  jestOptions: {
    jestVersion: "^30",
  },
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,

  devDeps: ["@pepperize/projen-awscdk-construct@~0.1.1", "@types/node@^22", "typescript@~6.0"],

  release: {
    releaseEveryCommit: true,
  },
  releaseToNpm: true,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.SecurityGroup",
  },
  publishToPypi: {
    distName: "pepperize.cdk-security-group",
    module: "pepperize_cdk_security_group",
  },
  publishToMaven: {
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-security-group",
    javaPackage: "com.pepperize.cdk.security_group",
  },
});

project.synth();
