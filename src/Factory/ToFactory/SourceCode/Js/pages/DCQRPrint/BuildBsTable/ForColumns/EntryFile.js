import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as QrCount } from "./ColumnQrCount/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    let LocalColumnQrCount = LocalColumns.find(element => element.field === "QrCount");

    if (LocalColumnQrCount === undefined === false) {
        QrCount({ inFindColumn: LocalColumnQrCount });
    };
};

export { StartFunc };