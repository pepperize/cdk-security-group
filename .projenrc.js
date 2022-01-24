const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const project = new AwsCdkConstructLibrary({
  devDeps: ["@pepperize/projen-awscdk-construct"],
  author: "Ivan Ovdiienko",
  authorAddress: "ivan.ovdiienko@pepperize.com",
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "2.8.0",
  name: "@pepperize/cdk-security-group",
  description:
    "This project provides a CDK construct for creating a security group with an extractable securityGroupName.",
  keywords: ["aws", "cdk", "security group", "ec2"],
  repositoryUrl: "https://github.com/pepperize/cdk-security-group.git",
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
});

project.synth();
