let StartFunc = (inData) => {
    console.log("inData:", inData);
    LocalUnDisableFunc()
    jFLocalToInputCustomerNameId(inData[0].CustomerName)
    jFLocalToInputCustomerMobileId(inData[0].CustomerMobile)
    var $table = $('#table')

    $table.bootstrapTable("load", inData);
};

let jFLocalToInputCustomerNameId = (inValue) => {
    let jVarLocalHtmlId = 'CustomerNameId';
    let jVarLocalCustomerNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomerNameId === null === false) {
        jVarLocalCustomerNameId.value = inValue;
    };
};

let jFLocalToInputCustomerMobileId = (inValue) => {
    let jVarLocalHtmlId = 'CustomerMobileId';
    let jVarLocalCustomerMobileId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomerMobileId === null === false) {
        jVarLocalCustomerMobileId.value = inValue;
    };
};
const LocalUnDisableFunc = () => {
    let jVarLocalCustomerDetailsClass = document.getElementsByClassName('CustomerDetailsClass');
    for (var i = 0; i < jVarLocalCustomerDetailsClass.length; i++) {
        jVarLocalCustomerDetailsClass[i].classList.remove("d-none");

    }
}

export { StartFunc };