let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalRequiredElements = jVarLocalForm.querySelectorAll("[required]");
    let jVarLocalReturnTF = true;

    jVarLocalRequiredElements.forEach(LoopItem => {

        // Check for empty values
        if (LoopItem.name === 'input') {
            if (LoopItem.value.trim().length === 0) {
                LoopItem.classList.add("is-invalid");
                jVarLocalReturnTF = false;
                return;
            } else {
                LoopItem.classList.remove("is-invalid");
            }
        }

        // Validation for mobile number
        if (LoopItem.name === 'Mobile') {
            if (LoopItem.value.trim().length !== 10) {
                document.getElementById("MobileClass").innerHTML = "must be 10";
                LoopItem.classList.add("is-invalid");
                LoopItem.focus();
                jVarLocalReturnTF = false;
                return;
            } else {
                document.getElementById("MobileClass").innerHTML = ""; // Clear the error
            }
        }

        // Validation for select elements
        if (LoopItem.tagName === 'SELECT') {
            if (LoopItem.value === '' || LoopItem.value === 'default') { // Assuming 'default' is the default value
                LoopItem.classList.add("is-invalid");
                jVarLocalReturnTF = false;
                return;
            } else {
                LoopItem.classList.remove("is-invalid");
            }
        }

    });

    return jVarLocalReturnTF;
};

export { StartFunc };
