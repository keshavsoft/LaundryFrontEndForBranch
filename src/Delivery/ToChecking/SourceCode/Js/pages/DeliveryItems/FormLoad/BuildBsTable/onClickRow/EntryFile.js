let selectedRows = [];

const StartFunc = (row, $element, field) => {
    let totalRate = 0;
    let CGST = 0;
    let SGST = 0;
    let GST = 0;
    let totalReturn = 0
    if (field) {
        selectedRows = [...selectedRows, row];
    }
    else {
        selectedRows = selectedRows.filter(selectedRow => selectedRow.QrCode !== row.QrCode);
    }

    totalRate = selectedRows.reduce((sum, selectedRow) => sum + Number(selectedRow.Rate), 0);
    CGST = (totalRate * 9) / 100;
    SGST = (totalRate * 9) / 100;
    GST = (totalRate * 9) / 100;
    totalReturn = totalRate + SGST + GST + CGST
    console.log("Selected Rows: ", selectedRows);
    console.log("Total Rate: ", totalRate);

    jFLocalToInnerHtmlyourCancelItemsAmtId(totalRate);
    jFLocalToInnerHtmlyourCGST(CGST);
    jFLocalToInnerHtmlyourSGST(SGST);
    jFLocalToInnerHtmlyourGST(GST);
    jFLocalToInnerHtmlyourTotalReturn(totalReturn);


};
let jFLocalToInnerHtmlyourCancelItemsAmtId = (totalRate) => {
    let jVarLocalHtmlId = 'CancelItemsAmtId';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = totalRate;
}
let jFLocalToInnerHtmlyourCGST = (CGST) => {
    let jVarLocalHtmlId = 'CancelCGSTId';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = CGST;
}
let jFLocalToInnerHtmlyourSGST = (SGST) => {
    let jVarLocalHtmlId = 'CancelSGSTId';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = SGST;
}
let jFLocalToInnerHtmlyourGST = (SGST) => {
    let jVarLocalHtmlId = 'CancelGSTId';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = SGST;
}
let jFLocalToInnerHtmlyourTotalReturn = (totalReturn) => {
    let jVarLocalHtmlId = 'TotalAmtReturnId';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = totalReturn;
}


export { StartFunc };
