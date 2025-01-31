let StartFunc = () => {
    jFBranchNameId();
    jFShowToday();
};

let jFBranchNameId = () => {
    let jVarLocalBranchId = 'BranchNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = jVarLocalBranchName;
    };
};

const jFShowToday = () => {
    const today = new Date();
    // const formattedToday = today.toISOString().split('T')[0];
    const formattedToday = today.toLocaleDateString('en-GB');

    today.setDate(today.getDate() + 7);
    // const formattedNextWeek = today.toISOString().split('T')[0];
    const formattedNextWeek = today.toLocaleDateString('en-GB');


    const dateInput = document.getElementById('TableFooterdateInputId');
    let LocalDeliveryDateTime = JSON.parse(localStorage.getItem("DeliveryDateTime"));

    if (dateInput) {
        if (LocalDeliveryDateTime !== null) {
            dateInput.value = LocalDeliveryDateTime;
            dateInput.setAttribute("min", formattedToday);
        } else {
            dateInput.value = formattedNextWeek;
            dateInput.setAttribute("min", formattedToday);
        }
    };
};

export { StartFunc, jFShowToday }