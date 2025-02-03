let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    // console.log("value : ", row);
    if (row.FFEntryStatus === true) {
        return '<span class="badge bg-success">true</span>';

    } else {
        return '<span class="badge bg-danger">false</span>';
    };
};

export { StartFunc };