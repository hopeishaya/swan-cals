// CACULATOR PROGRAM

const display =  document.getElementById('display');

function appendValue(input){
    display.value += input;

}

function clearDisplay(){
    display.value = '';

}

function calculate(){
    {
        display.value = eval(display.value);
    }
}
