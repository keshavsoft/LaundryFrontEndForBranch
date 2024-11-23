import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";
import { StartFunc as Duration } from "./Duration/entryFile.js";
import { StartFunc as Items } from "./Items/entryFile.js";
import { StartFunc as Qrgenerate } from "./Qrgenerate/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "id")
    let LocalColumnDuration = LocalColumns.find(element => element.field === "Duration");
    let LocalColumnItems = LocalColumns.find(element => element.field === "ItemDetails");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnSerial({ inFindColumn: LocalColumnOperateFine });
    };
    if (LocalColumnDuration === undefined === false) {
        Duration({ inFindColumn: LocalColumnDuration });
    };
    if (LocalColumnItems === undefined === false) {
        Items({ inFindColumn: LocalColumnItems });
    };

    let LocalColumnQrgenerate = LocalColumns.find(element => element.field === "Scan");
   
    if (LocalColumnQrgenerate === undefined === false) {
        Qrgenerate({ inFindColumn: LocalColumnQrgenerate });
    };
 
};
export { StartFunc };