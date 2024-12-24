import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as StartFuncColumnAddOns } from "./ColumnAddOns/entryFile.js";
import { StartFunc as StartFuncColumnopts } from "./Columnopts/entryFile.js";
import { StartFunc as StartFuncColumnAmount } from "./ColumnAmount/entryFile.js";
import { StartFunc as StartFuncColumnCategory } from "./ColumnCategory/entryFile.js";
import { StartFunc as StartFuncColumnItemName } from "./ColumnItemName/entryFile.js";
import { StartFunc as StartFuncColumnPcs } from "./ColumnPcs/entryFile.js";
import { StartFunc as StartFuncColumnLocation } from "./ColumnLocation/entryFile.js";
import { StartFunc as StartFuncColumnDeliveryDateTime } from "./ColumnDeliveryDateTime/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnopts = LocalColumns.find(element => element.field === "KS-Opts");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnopts === undefined === false) {
        StartFuncColumnopts({ inFindColumn: LocalColumnopts });
    };

    StartFuncColumnAmount
};

export { StartFunc };