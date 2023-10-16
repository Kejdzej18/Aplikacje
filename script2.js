window.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#chHeader");
    button.addEventListener("click", () => {
        let headerToCh = document.querySelector("#headerToCh");
        headerToCh.innerHTML = "Ala ma kota";
    });
});
