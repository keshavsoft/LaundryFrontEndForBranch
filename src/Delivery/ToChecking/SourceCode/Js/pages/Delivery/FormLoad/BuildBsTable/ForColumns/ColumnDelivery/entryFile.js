let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    // console.log("row:", row);

    if (row.Delivery === true ) {
        return '<span class="badge bg-success">Delivered</span>';
    } else {
        return '<span class="badge bg-danger">Pending</span>';
    };
};

export { StartFunc };