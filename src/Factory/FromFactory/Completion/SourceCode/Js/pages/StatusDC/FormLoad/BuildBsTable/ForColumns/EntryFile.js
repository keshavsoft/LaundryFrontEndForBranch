import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnSent } from "./ColumnSent/entryFile.js";
import { StartFunc as ColumnScan } from "./ColumnScan/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;

    let LocalColumnSerial = LocalColumns.find(element => element.field === "KS-Serial");
    ColumnSerial({ inFindColumn: LocalColumnSerial });

    let LocalColumnSent = LocalColumns.find(element => element.field === "Sent");
    ColumnSent({ inFindColumn: LocalColumnSent });

    let LocalColumnScan = LocalColumns.find(element => element.field === "Scanned");
    ColumnScan({ inFindColumn: LocalColumnScan });
};

export { StartFunc };