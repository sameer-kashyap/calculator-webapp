let input = document.querySelector("#inputbox");
let buttons = document.querySelectorAll("button");

let expression= "";
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.innerHTML === '=') {
            expression = eval(expression);
            input.value = expression;
        } else if(event.target.innerHTML=='AC'){
            expression="";
            input.value=expression;
        }
        else if(event.target.innerHTML=='DEL'){
            expression=expression.substring(0,expression.length-1);
            input.value=expression;
    
        }
        
        else {
            expression += event.target.innerHTML;
            input.value = expression;
        }
    
    });
});
