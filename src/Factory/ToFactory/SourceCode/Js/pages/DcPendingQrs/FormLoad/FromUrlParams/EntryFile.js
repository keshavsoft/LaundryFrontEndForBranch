import { StartFunc as StartFuncPop } from "./PopUp.js";

let StartFunc = () => {
  LocalFuncForBranchNameId();
  StartFuncPop();
  
};

let LocalFuncForBranchNameId = () => {
  let jVarLocalfactoryName = localStorage.getItem("BranchName");

  let jVarLocalBranchNameId = document.getElementById('BranchNameId');


  if (jVarLocalBranchNameId === null === false) {
    jVarLocalBranchNameId.innerHTML = jVarLocalfactoryName
  };
};

export { StartFunc }