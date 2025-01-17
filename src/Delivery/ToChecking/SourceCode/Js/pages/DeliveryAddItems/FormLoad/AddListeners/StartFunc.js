import { StartFunc as OrderInputId } from "./OrderInputId/keypress/EntryFile.js";
import { StartFunc as InputPkId } from "./InputPkId/EntryFile.js";
import { StartFunc as OrderCountQrs } from "./OrderCountQrs/EntryFile.js";

const StartFunc = () => {
    OrderInputId();
    InputPkId();
    OrderCountQrs();
};

export { StartFunc };
