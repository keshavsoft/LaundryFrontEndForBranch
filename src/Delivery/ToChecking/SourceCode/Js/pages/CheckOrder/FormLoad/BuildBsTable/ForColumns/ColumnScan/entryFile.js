let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
    // inFindColumn.footerFormatter = priceFormatter;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    console.log("row:", row, value);

    if (row.ProcessReturn === true || row.Completion === true || row.EntryReturn === true) {
        return '<span class="badge bg-success"> Returned</span>';
    } else {
        return '<span class="badge bg-danger">Pending</span>';
    };
};

function priceFormatter(data) {
    var field = this.field
    return '' + data.map(function (row) {
        return +row.ItemDetails
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
}

export { StartFunc };