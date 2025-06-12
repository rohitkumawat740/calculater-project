let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
     button.addEventListener("click", (e) => {
       let btnText = e.target.innerText;
     
       if (btnText === "AC") {
        input.value = "";
       } else if (btnText === "DEL") {
            input.value = input.value.slice(0, -1); 
    } else if (btnText === "=") {
             try {
                input.value = eval(input.value);
             } catch {
                input.value = "Error"
             }
            }
        else {
            input.value += btnText;
        }
    });
});