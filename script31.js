window.addEventListener("DOMContentLoaded", () => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#form-tbody");
        const template = document.querySelector("#userrow");
        const form = document.forms[0];
        document.querySelector("#addRow").addEventListener("click", () => {
            let clone = template.content.cloneNode(true);
            tbody.appendChild(clone);
        });
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            let rows = tbody.querySelectorAll("tr");
            let dataObject = {};
            let i = 0;
            rows.forEach(element => {
                let inputs = element.querySelectorAll("input");
                let obj = {
                    "input-1": inputs[0].value,
                    "input-2": inputs[1].value,
                    "input-3": inputs[2].value
                }
                dataObject[i] = obj;
                i++;
            });
            console.log(dataObject);
        });
    }
    else {
        alert("Dzban");
    }
});