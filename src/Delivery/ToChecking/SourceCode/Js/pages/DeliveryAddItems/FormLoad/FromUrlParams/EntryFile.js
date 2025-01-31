let StartFunc = () => {
    let jVarLocalBranchId = 'BranchNameAnchorId';
    const CommonReplaceText = "BranOrders";
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let LocalTable = jVarLocalBranchName.replace(CommonReplaceText, "");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = LocalTable;
    };
};

export { StartFunc }