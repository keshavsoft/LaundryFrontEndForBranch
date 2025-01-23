let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    // console.log("row:", row);

    if (row.BranchScanStatus === true ) {
        return '<span class="badge bg-success">✔</span>';
    } else {
        return '<span class="badge bg-danger">✘</span>';
    };
};

export { StartFunc };