window.addEventListener("DOMContentLoaded", ()=>{
    const form = document.forms[0];
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        //let inputs = form.querySelectorAll("input[type=\"text\"]");
        let inputs = form.elements;
        for(let i = 0; i< inputs.length;i++){
            //(inputs[i].type !== "submit" && inputs[i].type !== "reset" && inputs[i].type !== "button") ? console.log(inputs[i].value) : (null);
            document.querySelector("body").style.backgroundColor = inputs[1].value;
        };
    })
});