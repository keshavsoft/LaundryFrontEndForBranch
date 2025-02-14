let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = priceFormatter;
    inFindColumn.formatter = jVarLocalFormatterFunc;

};

function priceFormatter(data) {
    var field = this.field
    return '' + data.map(function (row) {
        return +row.EntryScanCount
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
}

let jVarLocalFormatterFunc = (value, row, index) => {
    return [
        `<a class="like btn btn-success" href="#" title="Show">`,
        'Send',
        '</a>',

    ].join('')

}

export { StartFunc };
