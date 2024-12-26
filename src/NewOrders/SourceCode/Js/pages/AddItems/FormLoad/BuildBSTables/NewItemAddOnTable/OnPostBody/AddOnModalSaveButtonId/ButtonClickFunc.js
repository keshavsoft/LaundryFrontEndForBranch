import { StartFunc as StartFuncToLocalStorage } from "./toLocalStorage.js";
import { StartFunc as StartFuncAddOnModalLocalStorage } from "../../../../../ShowToDom/OnModals/AddOnModalLocalStorage/EntryFile.js";

const StartFunc = () => {
    StartFuncToLocalStorage();
    StartFuncAddOnModalLocalStorage();
};

export { StartFunc };