import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnItems } from "./ColumnItems/entryFile.js";
import { StartFunc as ColumnPrint } from "./ColumnPrint/entryFile.js";
import { StartFunc as ColumnDate } from "./ColumnDate/entryFile.js";


let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;

    let LocalColumnSerial = LocalColumns.find(element => element.field === "id");

    if (LocalColumnSerial === undefined === false) {
        ColumnSerial({ inFindColumn: LocalColumnSerial });
    };

    let LocalColumnPrint = LocalColumns.find(element => element.field === "print");

    if (LocalColumnPrint === undefined === false) {
        ColumnPrint({ inFindColumn: LocalColumnPrint});
    };

    let LocalColumnItems = LocalColumns.find(element => element.field === "ItemDetails");

    if (LocalColumnItems === undefined === false) {
        ColumnItems({ inFindColumn: LocalColumnItems });
    };

    let LocalColumnDate = LocalColumns.find(element => element.field === "DateTime");

    if (LocalColumnDate === undefined === false) {
        ColumnDate({ inFindColumn: LocalColumnDate });
    };

    
};

export { StartFunc };