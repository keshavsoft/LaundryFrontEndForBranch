import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnScan } from "./ColumnScan/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnDelivery } from "./ColumnDelivery/entryFile.js";
import { StartFunc as ColumnBranchScan } from "./ColumnBranchScan/entryFile.js";
import { StartFunc as ColumnEntryScan } from "./ColumnEntryScan/entryFile.js";
import { StartFunc as ColumnEntryCancel } from "./ColumnEntryCancel/entryFile.js";
import { StartFunc as ColumnWashingScan } from "./ColumnWashingScan/entryFile.js";
import { StartFunc as ColumnProcessScan } from "./ColumnProcessScan/entryFile.js";
import { StartFunc as ColumnProcessCancel } from "./ColumnProcessCancel/entryFile.js";
import { StartFunc as ColumnCompletionScan } from "./ColumnCompletionScan/entryFile.js";
import { StartFunc as ColumnEntryReturn } from "./ColumnEntryReturn/entryFile.js";
import { StartFunc as ColumnProcessReturn } from "./ColumnProcessReturn/entryFile.js";
import { StartFunc as ColumnCompletion } from "./ColumnCompletion/entryFile.js";

let StartFunc = ({ inColumns }) => {
  let LocalColumns = inColumns;
  let LocalColumnOperateFine = LocalColumns.find((element) => element.field === "KS-Serial");
  if ((LocalColumnOperateFine === undefined) === false) {
    ColumnOperate({ inFindColumn: LocalColumnOperateFine });
  }

  let LocalScanColumn = LocalColumns.find((element) => element.field === "Scan");
  if ((LocalScanColumn === undefined) === false) {
    ColumnScan({ inFindColumn: LocalScanColumn });
  }

  let LocalScanRate = LocalColumns.find((element) => element.field === "Rate");
  if ((LocalScanRate === undefined) === false) {
    ColumnRate({ inFindColumn: LocalScanRate });
  }

  let LocalColumnDelivery = LocalColumns.find((element) => element.field === "Delivery");
  if ((LocalColumnDelivery === undefined) === false) {
    ColumnDelivery({ inFindColumn: LocalColumnDelivery });
  }

  let LocalColumnBranchScan = LocalColumns.find((element) => element.field === "BranchScanStatus");
  if ((LocalColumnDelivery === undefined) === false) {
    ColumnBranchScan({ inFindColumn: LocalColumnBranchScan });
  }

  let LocalColumnEntryScan = LocalColumns.find((element) => element.field === "EntryScanStatus");
  if ((LocalColumnDelivery === undefined) === false) {
    ColumnEntryScan({ inFindColumn: LocalColumnEntryScan });
  }

  let LocalColumnEntryCancel = LocalColumns.find((element) => element.field === "EntryCancel");
  if ((LocalColumnEntryCancel === undefined) === false) {
    ColumnEntryCancel({ inFindColumn: LocalColumnEntryCancel });
  }

  let LocalColumnWashingScan = LocalColumns.find((element) => element.field === "WashingScanStatus");
  if ((LocalColumnDelivery === undefined) === false) {
    ColumnWashingScan({ inFindColumn: LocalColumnWashingScan });
  }

  let LocalColumnProcessScan = LocalColumns.find((element) => element.field === "PressingScanStatus");
  if ((LocalColumnDelivery === undefined) === false) {
    ColumnProcessScan({ inFindColumn: LocalColumnProcessScan });
  }

  let LocalColumnProcessCancel = LocalColumns.find((element) => element.field === "ProcessReturn");
  if ((LocalColumnProcessCancel === undefined) === false) {
    ColumnProcessCancel({ inFindColumn: LocalColumnProcessCancel });
  }

  let LocalColumnCompletionScan = LocalColumns.find((element) => element.field === "CompletionScanStatus");
  if ((LocalColumnCompletionScan === undefined) === false) {
    ColumnCompletionScan({ inFindColumn: LocalColumnCompletionScan });
  }

  let LocalColumnEntryReturn = LocalColumns.find((element) => element.field === "EntryReturn");
  if ((LocalColumnEntryReturn === undefined) === false) {
    ColumnEntryReturn({ inFindColumn: LocalColumnEntryReturn });
  }

  let LocalColumnProcessReturn = LocalColumns.find((element) => element.field === "ProcessReturn");
  if ((LocalColumnProcessReturn === undefined) === false) {
    ColumnProcessReturn({ inFindColumn: LocalColumnProcessReturn });
  }

  let LocalColumnCompletion = LocalColumns.find((element) => element.field === "Completion");
  if ((LocalColumnCompletion === undefined) === false) {
    ColumnCompletion({ inFindColumn: LocalColumnCompletion });
  }
};

export { StartFunc };
