import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as StartFuncColumnAddOns } from "./ColumnAddOns/entryFile.js";
import { StartFunc as StartFuncColumnopts } from "./Columnopts/entryFile.js";
import { StartFunc as StartFuncColumnAmount } from "./ColumnAmount/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnAddOns = LocalColumns.find(element => element.field === "KS-AddOns");
    let LocalColumnopts = LocalColumns.find(element => element.field === "KS-Opts");
    let LocalColumnAmount = LocalColumns.find(element => element.field === "KS-Amount");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };

    if (LocalColumnAddOns === undefined === false) {
        StartFuncColumnAddOns({ inFindColumn: LocalColumnAddOns });
    };

    if (LocalColumnopts === undefined === false) {
        StartFuncColumnopts({ inFindColumn: LocalColumnopts });
    };

    if (LocalColumnAmount === undefined === false) {
        StartFuncColumnAmount({ inFindColumn: LocalColumnAmount });
    };

    StartFuncColumnAmount
};

export { StartFunc };