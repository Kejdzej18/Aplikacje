window.addEventListener("DOMContentLoaded", () => {
    const templateToggle = document.querySelector("#templateToggle");
    let prevTheme;
    templateToggle.querySelectorAll("[name=\"template\"]").forEach(element => {
        element.addEventListener("change", () => {
            document.querySelector("body").classList.remove(prevTheme);
            prevTheme = element.value;
            document.querySelector("body").classList.add(element.value);
        });
    });
});