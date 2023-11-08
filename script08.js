class Figure {
    squareFull(a) {
        let pattern = "";
        for(let i = 0; i < a; i++) {
            for(let j = 0; j < a; j++) {
                pattern += "*";
            }
            pattern += "\n";
        }
        return pattern;
    }
    squareEmpty(a) {
        let pattern = "";
        for(let i = 0; i < a; i++) {
            pattern += "*";
        }
        pattern += "\n";
        for(let i = 0; i < a - 2; i++) {
            pattern += "*";
            for(let j = 0; j < a - 2; j++) {
                pattern += " ";
            }
            pattern += "*";
            pattern += "\n";
        }
        for(let i = 0; i < a; i++) {
            pattern += "*";
        }
        return pattern;
    }
    trangleLeftFull(a) {
        let pattern = "";
        for(let i = 0; i < a; i++) {
            for(let j = 0; j < i; j++) {
                pattern += "*";
            }
            pattern += "\n";
        }
        return pattern;
    }
    trangleLeftEmpty(a){
        let pattern = "";
        a = parseInt(a);
        for(let i = 0; i < a; i++){
            
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const form = document.forms[0];
    form.addEventListener("submit", (event) => { 
        event.preventDefault();
        let figure;
        switch(document.querySelector("#figure").value) {
            case "squareFull":
                figure = (new Figure).squareFull(form.querySelector("#figure-size").value);
                break;
            case "squareEmpty":
                figure = (new Figure).squareEmpty(form.querySelector("#figure-size").value);
                break;
            case "triangleLeftFull":
                figure = (new Figure).trangleLeftFull(form.querySelector("#figure-size").value);
                break;
            
            default:
                figure = "Wybierz figurę 🏺!";
        }
        document.querySelector("#pattern").innerHTML = figure;
    });
});