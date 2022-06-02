const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const project = new AwsCdkConstructLibrary({
  author: "Ivan Ovdiienko",
  authorAddress: "info@pepperize.com",
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "2.8.0",
  name: "@pepperize/cdk-security-group",
  description:
    "This project provides a CDK construct to create an EC2 SecurityGroup, which property `securityGroupName` returns the GroupName.",
  keywords: ["aws", "cdk", "security-group", "ec2"],
  repositoryUrl: "https://github.com/pepperize/cdk-security-group.git",

  devDeps: ["@pepperize/projen-awscdk-construct"],

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
    mavenEndpoint: "https://s01.oss.sonatype.org",
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-security-group",
    javaPackage: "com.pepperize.cdk.security_group",
  },
});

project.synth();
