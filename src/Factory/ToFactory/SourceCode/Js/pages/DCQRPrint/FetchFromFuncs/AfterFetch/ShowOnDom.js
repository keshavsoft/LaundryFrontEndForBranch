let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;
    
    jfShow({ inDataToShow: LocalDataToShow });
    GenerateQrCode({
        inQrData: LocalDataToShow,
        inCanvasId: document.getElementById("CanvasId")
    });
};

let GenerateQrCode = ({ inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 11;
    canvas.width = 11;
    canvas.style.visibility = 'hidden';

    let opts = {};
    opts.text = `${inQrData.pk}~${inQrData.BranchName}~${inQrData.Date}~${inQrData.Description}`;
    opts.bcid = "qrcode";
    opts.scaleX = 4;
    opts.scaleY = 4;
    opts.rotate = "N";

    try {
        let ts0 = new Date;
        bwipjs.toCanvas(canvas, opts);
        show(ts0, new Date);
    } catch (e) {
        console.log("error : ", e);
        return;
    }

    function show(ts0, ts1) {
        canvas.style.visibility = 'visible';
    }
};

const jfShow = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;
    jFLocalToInputVoucherNumberDCDetailsTextId({ inVoucherNumberDCDetailsTextId: LocalDataToShow.pk });
    jFLocalToInputDateTextDCDetailsId({ inDateTextDCDetailsId: LocalDataToShow.Date });
    jFLocalToInputDescriptionTextDCDetailsId({ inDescriptionTextDCDetailsId: LocalDataToShow.Description });
    jFLocalToInputDCFactoryDCDetailsTextId({ inDCFactoryDCDetailsTextId: LocalDataToShow.Factory });

    let LocalBranchName = document.getElementById("BranchName");
    LocalBranchName.innerHTML = LocalBranchName.innerHTML.replace("{{Branch}}", LocalDataToShow.BranchName);
    LocalBranchName.innerHTML = LocalBranchName.innerHTML.replace("{{VoucherNumber}}", LocalDataToShow.pk);
}

let jFLocalToInputVoucherNumberDCDetailsTextId = ({ inVoucherNumberDCDetailsTextId }) => {
    let jVarLocalHtmlId = 'VoucherNumberDCDetailsTextId';
    let jVarLocalVoucherNumberDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalVoucherNumberDCDetailsTextId === null === false) {
        jVarLocalVoucherNumberDCDetailsTextId.value = inVoucherNumberDCDetailsTextId;
    };
};

let jFLocalToInputDateTextDCDetailsId = ({ inDateTextDCDetailsId }) => {
    let jVarLocalHtmlId = 'DateTextDCDetailsId';
    let jVarLocalDateTextDCDetailsId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDateTextDCDetailsId === null === false) {
        jVarLocalDateTextDCDetailsId.value = inDateTextDCDetailsId;
    };
};

let jFLocalToInputDescriptionTextDCDetailsId = ({ inDescriptionTextDCDetailsId }) => {
    let jVarLocalHtmlId = 'DescriptionTextDCDetailsId';
    let jVarLocalDescriptionTextDCDetailsId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDescriptionTextDCDetailsId === null === false) {
        jVarLocalDescriptionTextDCDetailsId.value = inDescriptionTextDCDetailsId;
    };
};

let jFLocalToInputDCFactoryDCDetailsTextId = ({ inDCFactoryDCDetailsTextId }) => {
    let jVarLocalHtmlId = 'DCFactoryDCDetailsTextId';
    let jVarLocalDCFactoryDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDCFactoryDCDetailsTextId === null === false) {
        jVarLocalDCFactoryDCDetailsTextId.value = inDCFactoryDCDetailsTextId;
    };
};

export { StartFunc};

