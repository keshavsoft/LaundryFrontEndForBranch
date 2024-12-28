let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow.AsIs;

    jFLocalToInputVoucherNumberDCDetailsTextId({ inVoucherNumberDCDetailsTextId: jVarLocalData.pk });
    jFLocalToInputDateTextDCDetailsId({ inDateTextDCDetailsId: jVarLocalData.DateTime });
    jFLocalToInputDCFactoryDCDetailsTextId({ inDCFactoryDCDetailsTextId: jVarLocalData.FactoryName });
};

let jFLocalToInputVoucherNumberDCDetailsTextId = ({ inVoucherNumberDCDetailsTextId }) => {
    let jVarLocalHtmlId = 'VoucherNumberDCDetailsTextId';
    let jVarLocalVoucherNumberDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalVoucherNumberDCDetailsTextId === null === false) {
        jVarLocalVoucherNumberDCDetailsTextId.innerHTML = inVoucherNumberDCDetailsTextId;
    };
};

let jFLocalToInputDateTextDCDetailsId = ({ inDateTextDCDetailsId }) => {
    let jVarLocalHtmlId = 'DateTextDCDetailsId';
    let jVarLocalDateTextDCDetailsId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDateTextDCDetailsId === null === false) {
        jVarLocalDateTextDCDetailsId.innerHTML = inDateTextDCDetailsId;
    };
};

let jFLocalToInputDCFactoryDCDetailsTextId = ({ inDCFactoryDCDetailsTextId }) => {
    let jVarLocalHtmlId = 'DCFactoryDCDetailsTextId';
    let jVarLocalDCFactoryDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDCFactoryDCDetailsTextId === null === false) {
        jVarLocalDCFactoryDCDetailsTextId.innerHTML = inDCFactoryDCDetailsTextId;
    };
};

export { StartFunc };