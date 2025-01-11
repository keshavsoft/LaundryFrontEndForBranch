const StartFunc = (data) => {
    let localCustomerdata = data.JsonData
    jFLocalToInputCustomersID(localCustomerdata)
};

let jFLocalToInputCustomersID = (inValue) => {
    let jVarLocalHtmlId = 'CustomersID';
    let jVarLocalCustomersID = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomersID === null === false) {
        jVarLocalCustomersID.innerHTML = inValue;
    };
};

export { StartFunc };