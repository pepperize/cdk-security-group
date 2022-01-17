const { awscdk, javascript } = require("projen");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Ivan Ovdiienko",
  authorAddress: "ivan.ovdiienko@pepperize.com",
  authorOrganization: true,
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "1.139.0",
  name: "@pepperize/cdk-security-group",
  description:
    "This project provides a CDK construct for creating a security group with an extractable securityGroupName.",
  keywords: ["aws", "cdk", "security group", "ec2"],
  repositoryUrl: "https://github.com/pepperize/cdk-security-group.git",

  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ["unerty", "pflorek", "acfo", "dependabot[bot]"],
    secret: "GITHUB_TOKEN",
  },
  depsUpgradeOptions: {
    workflowOptions: {
      secret: "PROJEN_GITHUB_TOKEN",
    },
  },
  dependabot: true,

  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
    },
  },

  defaultReleaseBranch: "main",
  npmAccess: javascript.NpmAccess.PUBLIC,
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

  gitignore: [".idea/", "*.iml"],

  cdkDependencies: ["@aws-cdk/aws-ec2"], // v1
  cdkTestDependencies: ["@aws-cdk/assertions"],
});

project.setScript("format", "prettier --write src/**/*.ts test/**/*.ts .projenrc.js README.md");

project.jest.addTestMatch("**/?(*.)@(spec|test).[tj]s?(x)");

project.synth();
