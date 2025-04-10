let StartFunc = ({ inDataToShow }) => {

    let jVarLocalData = inDataToShow.AsIs;

    // jFLocalToInnerHtmlpkTextId({ inpkTextId: jVarLocalData.pk });
    jFLocalToInnerHtmlVoucherNumberTextId({ inVoucherNumberTextId: jVarLocalData.pk })
    // jFLocalToInnerHtmlDescriptionTextId({ inDescriptionTextId: jVarLocalData.Description });
    jFLocalToInnerHtmlDateTextId({ inDateTextId: jVarLocalData.DateTime });
    jFLocalToInnerHtmlFactoryTextId({ inFactoryTextId: jVarLocalData.FactoryName });
    // jFLocalToInnerHtmlDCBranchNameTextId({ inDCBranchNameTextId: jVarLocalData.BranchName })
};

let jFLocalToInnerHtmlpkTextId = ({ inpkTextId }) => {
    let jVarLocalHtmlId = 'pkTextId';
    let jVarLocalpkTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalpkTextId.innerHTML = inpkTextId;
};

let jFLocalToInnerHtmlVoucherNumberTextId = ({ inVoucherNumberTextId }) => {
    let jVarLocalHtmlId = 'VoucherNumberTextId';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.innerHTML = inVoucherNumberTextId;
};

let jFLocalToInnerHtmlDateTextId = ({ inDateTextId }) => {
    let jVarLocalHtmlId = 'DateTextId';
    let jVarLocalDateTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDateTextId.innerHTML = new Date(inDateTextId).toLocaleDateString('en-GB');
};

// let jFLocalToInnerHtmlDescriptionTextId = ({ inDescriptionTextId }) => {
//     let jVarLocalHtmlId = 'DescriptionTextId';
//     let jVarLocalDescriptionTextId = document.getElementById(jVarLocalHtmlId);
//     jVarLocalDescriptionTextId.innerHTML = inDescriptionTextId;
// };



let jFLocalToInnerHtmlFactoryTextId = ({ inFactoryTextId }) => {
    let jVarLocalHtmlId = 'DCFactoryTextId';
    let jVarLocalFactoryTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalFactoryTextId.innerHTML = inFactoryTextId;
};

let jFLocalToInnerHtmlDCBranchNameTextId = ({ inDCBranchNameTextId }) => {
    let jVarLocalHtmlId = 'DCBranchNameTextId';
    let jVarLocalDCBranchNameTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDCBranchNameTextId.innerHTML = inDCBranchNameTextId;
};

export { StartFunc };