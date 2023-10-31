function wzorHerona(a, b, c) {
    if((a > 0 && b > 0 && c > 0) && (a + b >= c) && (a + c >= b) && (b + c >= a)) {
        let p = ((a) + (b) + (c)) / 2;
        return Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
    }
    else return false;
}

window.addEventListener("DOMContentLoaded", () => {
    let bok1 = document.querySelector("#bok-1");
    let bok2 = document.querySelector("#bok-2");
    let bok3 = document.querySelector("#bok-3");
    let form = document.forms[0];
    document.querySelector("#bokData-1").addEventListener("click", () => {
        bok1.value = prompt("Wprowadź wartość");
    });
    document.querySelector("#bokData-2").addEventListener("click", () => {
        bok2.value = prompt("Wprowadź wartość");
    });
    document.querySelector("#bokData-3").addEventListener("click", () => {
        bok3.value = prompt("Wprowadź wartość");
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let b1 = parseInt(bok1.value);
        let b2 = parseInt(bok2.value);
        let b3 = parseInt(bok3.value);
        document.querySelector("#wynik").innerHTML = wzorHerona(b1, b2, b3);
    });
});