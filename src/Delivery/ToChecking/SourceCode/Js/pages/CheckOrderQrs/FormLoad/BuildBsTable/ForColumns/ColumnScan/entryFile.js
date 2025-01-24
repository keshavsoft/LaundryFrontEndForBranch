let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {

    if (row.ProcessReturn === true || row.Completion === true || row.EntryReturn === true) {
        return '<span class="badge bg-success">✔</span>';
    } else {
        return '<span class="badge bg-danger">✘</span>';
    };
};

export { StartFunc };