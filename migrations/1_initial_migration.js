const Migrations = artifacts.require("Migrations");
const PegToken = artifacts.require("PegToken");


module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(PegToken);
};
