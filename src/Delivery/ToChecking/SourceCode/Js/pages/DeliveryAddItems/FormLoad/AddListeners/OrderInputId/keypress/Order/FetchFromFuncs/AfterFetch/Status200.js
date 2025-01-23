let StartFunc = (inData) => {
    // console.log("inData:", inData);
    let jVarLocalAsIs = inData.AsIs;
    let jVarLocalOrderData = inData.OrderData;
    let jVarLocalQrCount = inData.QrCount;
    LocalUnDisableFunc()
    jFLocalToInputCustomerNameId(jVarLocalOrderData.CustomerName)
    jFLocalToInputCustomerMobileId(jVarLocalOrderData.CustomerMobile)
    jFLocalToInputOrderNumberId(jVarLocalOrderData.OrderNumber)
    jFLocalToInputRowCountId(jVarLocalQrCount)
    LocalFuncForInputPkIdFocus()
    LocalFuncForOrderIdFocus()

    var $table = $('#table')

    $table.bootstrapTable("load", jVarLocalAsIs);
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
};
let jFLocalToInputOrderNumberId = (inValue) => {
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalOrderNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalOrderNumberId === null === false) {
        jVarLocalOrderNumberId.innerHTML = inValue;
    };
};

let jFLocalToInputRowCountId = (inValue) => {
    let jVarLocalHtmlId = 'RowCountId';
    let jVarLocalRowCountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalRowCountId === null === false) {
        jVarLocalRowCountId.innerHTML = inValue;
    };
};

let LocalFuncForInputPkIdFocus = () => {
    let jVarLocalHtmlId = 'InputPkId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalInputPkId === null === false) {
        jVarLocalInputPkId.focus();
    };
};
let LocalFuncForOrderIdFocus = () => {
    let jVarLocalHtmlId = 'OrderId';
    let jVarLocalOrderId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalOrderId === null === false) {
        jVarLocalOrderId.setAttribute('readonly', true);;
    };
};

export { StartFunc };