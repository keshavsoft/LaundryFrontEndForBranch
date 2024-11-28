import { StartFunc as ColumnOperate } from "./ColumnOperate/entryFile.js";
import { StartFunc as SentFromBranch } from "./SentFromBranch/entryFile.js";
import { StartFunc as Scanned } from "./Scanned/entryFile.js";
import { StartFunc as Pending } from "./Pending/entryFile.js";
import { StartFunc as EntryCancel } from "./EntryCancel/entryFile.js";
import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";


let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnColumnSerial = LocalColumns.find(element => element.field === "KS-Serial");

    ColumnSerial({ inFindColumn: LocalColumnColumnSerial });


    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "operate");

    ColumnOperate({ inFindColumn: LocalColumnOperateFine });

    let LocalColumnSentFromBranch= LocalColumns.find(element => element.field === "Sent");

    SentFromBranch({ inFindColumn: LocalColumnSentFromBranch });

    let LocalColumnScanned= LocalColumns.find(element => element.field === "scanned");

    Scanned({ inFindColumn: LocalColumnScanned });

    let LocalColumnPending= LocalColumns.find(element => element.field === "Pending");

    Pending({ inFindColumn: LocalColumnPending });

    let LocalColumnEntryCancel= LocalColumns.find(element => element.field === "EntryCancel");

    EntryCancel({ inFindColumn: LocalColumnEntryCancel });

};

export { StartFunc };