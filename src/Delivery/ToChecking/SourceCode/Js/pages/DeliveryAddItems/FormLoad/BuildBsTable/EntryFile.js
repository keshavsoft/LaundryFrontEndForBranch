import { StartFunc as BuildBsTableOrder } from "./BuildBsTableOrder/EntryFile.js";
import { StartFunc as BuildBsTableFoRowCount } from "./BuildBsTableFoRowCount/EntryFile.js";

const StartFunc = () => {
    BuildBsTableOrder()
    BuildBsTableFoRowCount()
};

export { StartFunc };

