let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
    inFindColumn.footerFormatter = totalFormatter;
};

function jFLocalOptsFormater(value, row, index) {
    let JVarLocalFromStrogeAddOnData = localStorage.getItem("PresentOrder");
    let JvarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);
    let jVarLocalItemSerial = row.ItemSerial;
    let jVarLocalFilterData = Object.values(JvarLocalData.AddOnData).filter(e => e.AddOnItemSerial === jVarLocalItemSerial);

    if (jVarLocalFilterData.length > 0) {
        let jVarLocalAddOnPrice = jVarLocalFilterData.map(e => e.AddOnRate).reduce((a, b) => a + b, 0);
        return (jVarLocalAddOnPrice * row.Pcs) + row.Total
    } else {
        return row.Total;
    };
};

function totalFormatter(data) {
    var field = "Total";
    let LocalTotal = data.map(function (row) {
        if (row[field] === undefined) {
            return 0;
        };
        return +row[field];
    }).reduce(function (sum, i) {
        return sum + i
    }, 0);

    return LocalTotal.toFixed(2);
};

export { StartFunc };