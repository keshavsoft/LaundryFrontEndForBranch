let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    console.log("row:", row, value);

    if (row.ProcessReturn === true || row.Completion === true || row.EntryReturn === true) {
        return '<span class="badge bg-success">Ready to delivary</span>';
    } else {
        return '<span class="badge bg-danger">Pending</span>';
    };
};

export { StartFunc };