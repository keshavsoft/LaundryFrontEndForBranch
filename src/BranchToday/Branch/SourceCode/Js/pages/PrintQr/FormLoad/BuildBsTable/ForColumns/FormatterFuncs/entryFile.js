import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnSymbol } from "./ColumnSymbol/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnSymbol = LocalColumns.find(element => element.field === "AggValues.SettlementAmount");

    if (LocalColumnSymbol === undefined === false) {
        ColumnSymbol({ inFindColumn: LocalColumnSymbol });
    };

    if (LocalColumnOperateFine === undefined === false) {
        ColumnSerial({ inFindColumn: LocalColumnOperateFine });
    };
};

export { StartFunc };