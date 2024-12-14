let StartFunc = (inData) => {
    let LocalQrCodesData = inData.QrCodes;
    let LocalOrderAsIs = inData.OrderAsIs;
    let LocalReturnSettlement = inData.ReturnSettlement;
    let kk = "1"
    let LocalCheckOutData = LocalOrderAsIs.CheckOutData[kk];
    let LocalSettlement = LocalCheckOutData.CardAmount + LocalCheckOutData.CashAmount + LocalCheckOutData.UPIAmount;
    // console.log("inData:", inData);

    LocalUnDisableFunc()
    jFLocalToInputCustomerNameId(LocalOrderAsIs.CustomerData.CustomerName)
    jFLocalToInputCustomerMobileId(LocalOrderAsIs.CustomerData.CustomerMobile)
    jFLocalOrderNumber(LocalOrderAsIs.pk);

    jFLocalToInputSettlementId(LocalSettlement);
    jFLocalToInputCGSTId(LocalCheckOutData.GstData.CGST);
    jFLocalToInputSGSTId(LocalCheckOutData.GstData.SGST);

    // Cancel OrderDetails
    jFLocalToInputCancelItemsAmtId(LocalReturnSettlement.Total);
    jFLocalToInputCancelCGSTId(LocalReturnSettlement.CGST);
    jFLocalToInputCancelSGSTId(LocalReturnSettlement.SGST);
    jFLocalToInputTotalAmtReturnId(LocalReturnSettlement.GTotal);
    jFLocalToInputCancelGSTId(LocalReturnSettlement.GST);
    var $table = $('#table')

    $table.bootstrapTable("load", LocalQrCodesData);
};

let jFLocalOrderNumber = (inValue) => {
    let jVarLocalOrderNumber = 'OrderNumberId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalOrderNumber);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value = inValue;
    };
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
let jFLocalToInputSettlementId = (inValue) => {
    let jVarLocalHtmlId = 'SettlementId';
    let jVarLocalSettlementId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalSettlementId === null === false) {
        jVarLocalSettlementId.value = inValue;
    };
};

let jFLocalToInputCGSTId = (inValue) => {
    let jVarLocalHtmlId = 'CGSTId';
    let jVarLocalCGSTId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCGSTId === null === false) {
        jVarLocalCGSTId.value = inValue;
    };
};

let jFLocalToInputSGSTId = (inValue) => {
    let jVarLocalHtmlId = 'SGSTId';
    let jVarLocalSGSTId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalSGSTId === null === false) {
        jVarLocalSGSTId.value = inValue;
    };
};
let jFLocalToInputCancelItemsAmtId = (inValue) => {
    let jVarLocalHtmlId = 'CancelItemsAmtId';
   let jVarLocalCancelItemsAmtId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCancelItemsAmtId === null === false) {
      jVarLocalCancelItemsAmtId.value = inValue;
   };
};

let jFLocalToInputCancelCGSTId = (inValue) => {
    let jVarLocalHtmlId = 'CancelCGSTId';
   let jVarLocalCancelCGSTId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCancelCGSTId === null === false) {
      jVarLocalCancelCGSTId.value = inValue;
   };
};

let jFLocalToInputCancelSGSTId = (inValue) => {
    let jVarLocalHtmlId = 'CancelSGSTId';
   let jVarLocalCancelSGSTId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCancelSGSTId === null === false) {
      jVarLocalCancelSGSTId.value = inValue;
   };
};
let jFLocalToInputTotalAmtReturnId = (inValue) => {
    let jVarLocalHtmlId = 'TotalAmtReturnId';
   let jVarLocalTotalAmtReturnId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalTotalAmtReturnId === null === false) {
      jVarLocalTotalAmtReturnId.value = inValue;
   };
};
let jFLocalToInputCancelGSTId = (inValue) => {
    let jVarLocalHtmlId = 'CancelGSTId';
   let jVarLocalCancelGSTId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCancelGSTId === null === false) {
      jVarLocalCancelGSTId.value = inValue;
   };
};
const LocalUnDisableFunc = () => {
    let jVarLocalCustomerDetailsClass = document.getElementsByClassName('CustomerDetailsClass');
    for (var i = 0; i < jVarLocalCustomerDetailsClass.length; i++) {
        jVarLocalCustomerDetailsClass[i].classList.remove("d-none");

    };
};

export { StartFunc };