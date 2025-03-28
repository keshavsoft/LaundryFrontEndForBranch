const StartFunc = () => {
    jFLocalToInputDate();
    jFLocalToInputBranchName();
};

let jFLocalToInputBranchName = () => {
    let jVarLocalFromBranchName = localStorage.getItem("BranchName");
    let jVarLocalHtmlId = 'BranchName';
    let jVarLocalBranchName = document.getElementById(jVarLocalHtmlId);
    const modifiedString = jVarLocalFromBranchName.replace("BranOrders", "");

    if (jVarLocalBranchName === null === false) {
        jVarLocalBranchName.value = modifiedString;
    };
};

let jFLocalToInputDate = () => {
    var today = new Date(); 
    today.setDate(today.getDate());
    var dd = String(today.getDate()).padStart(2, '0'); 
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear(); 
    var nextWeek=yyyy + '-' + mm + '-' + dd; 
    var dateInput=document.getElementById("Date");
    dateInput.value=nextWeek;
    dateInput.setAttribute("min",nextWeek);
};

export { StartFunc };
