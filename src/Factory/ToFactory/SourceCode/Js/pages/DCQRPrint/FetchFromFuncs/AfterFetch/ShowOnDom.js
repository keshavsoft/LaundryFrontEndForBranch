let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow.OrderData;

    jfShow({ inDataToShow: LocalDataToShow });
    GenerateQrCode({
        inQrData: LocalDataToShow,
        inCanvasId: document.getElementById("CanvasId")
    });

    var $table = $('#table');
    if ($table.length) {
        $table.bootstrapTable("load", LocalDataToShow);
    }
};

let GenerateQrCode = ({ inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 100;
    canvas.width = 100;
    canvas.style.visibility = 'hidden';
    let opts = {
        text: `${inQrData.pk}~${inQrData.BranchName}~${inQrData.Date}~${inQrData.Description}`,
        bcid: "qrcode",
        scaleX: 2,
        scaleY: 2,
        rotate: "N"
    };
    try {
        let ts0 = new Date;
        bwipjs.toCanvas(canvas, opts);
        show(ts0, new Date);
    } catch (e) {
        console.error("QR Code Generation Error:", e);
    }
    function show(ts0, ts1) {
        canvas.style.visibility = 'visible';
    }
};

const jfShow = ({ inDataToShow }) => {
    
    jFLocalToInputVoucherNumberDCDetailsTextId({ inVoucherNumberDCDetailsTextId: inDataToShow.pk });
    jFLocalToInputDateTextDCDetailsId({ inDateTextDCDetailsId: inDataToShow.Date });
    jFLocalToInputDescriptionTextDCDetailsId({ inDescriptionTextDCDetailsId: inDataToShow.Description });
    jFLocalToInputDCFactoryDCDetailsTextId({ inDCFactoryDCDetailsTextId: inDataToShow.Factory });
    jFLocalToInputDCBranchDCDetailsTextId({ inDCBranchDCDetailsTextId: inDataToShow.BranchName });
};

let jFLocalToInputVoucherNumberDCDetailsTextId = ({ inVoucherNumberDCDetailsTextId }) => {
    let element = document.getElementById('VoucherNumberDCDetailsTextId');
    if (element !== null) {
        element.innerHTML = inVoucherNumberDCDetailsTextId;
    }
};

let jFLocalToInputDateTextDCDetailsId = ({ inDateTextDCDetailsId }) => {
    let element = document.getElementById('DateTextDCDetailsId');
    if (element !== null) {
        element.innerHTML = inDateTextDCDetailsId;
    }
};

let jFLocalToInputDescriptionTextDCDetailsId = ({ inDescriptionTextDCDetailsTextId }) => {
    let element = document.getElementById('DescriptionTextDCDetailsTextId');
    if (element !== null) {
        element.innerHTML = inDescriptionTextDCDetailsTextId;
    }
};

let jFLocalToInputDCFactoryDCDetailsTextId = ({ inDCFactoryDCDetailsTextId }) => {
    let element = document.getElementById('DCFactoryDCDetailsTextId');
    if (element !== null) {
        element.innerHTML = inDCFactoryDCDetailsTextId;
    }
};

let jFLocalToInputDCBranchDCDetailsTextId = ({ inDCBranchDCDetailsTextId }) => {
    let element = document.getElementById('DCBranchDCDetailsTextId');
    if (element !== null) {
        element.innerHTML = inDCBranchDCDetailsTextId;
    }
};

export { StartFunc };
