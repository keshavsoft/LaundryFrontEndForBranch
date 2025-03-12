import { StartFunc as StartFuncPop } from "./PopUp.js";

let StartFunc = () => {
  LocalFuncForBranchNameId();
  StartFuncPop();

};

let LocalFuncForBranchNameId = () => {
  let jVarLocalfactoryName = localStorage.getItem("BranchName");
  let jvarLocalModifiedBranch = jVarLocalfactoryName.replace("BranOrders", "");
  let jVarLocalBranchNameId = document.getElementById('BranchNameId');

  if (jVarLocalBranchNameId === null === false) {
    jVarLocalBranchNameId.innerHTML = jvarLocalModifiedBranch
  };
};

export { StartFunc }