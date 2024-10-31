let Input = document.getElementById("inp");
let ifoda_berilgan = false

function Add(value){
    Input.value += value.innerText
}

function AddExpression(value){
    if(Input.value !== ""){
        if(!ifoda_berilgan){
            Input.value += value.innerText
            ifoda_berilgan = true
        }
    }
}

function Calculate(){
    Input.value = eval(Input.value)
    ifoda_berilgan = false
}

function Cut(){
    Input.value = Input.value.slice(0, Input.value.lenght -1)
}