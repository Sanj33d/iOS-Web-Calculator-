const display = document.getElementById("display");

function addToDisplay(val){
    if (display.value === "0"){
        display.value = val;
    }
    else{
        display.value += val;
        saveData();
    }
}

function clearDisplay(){
    display.value = '0';
    saveData();
}

function calculate(){
    try{
        display.value = eval(display.value);
        saveData();
    }
    catch(error){
        display.value = 'Error'
        saveData();
    }
}

function removeLast(){
    let val = display.value;
    // display.value = val.slice(0, -1);
    let newVal = '';
    for (let i = 0; i < val.length - 1; i++){
        newVal += val[i]
    }
    display.value = newVal;
    if (display.value === "" || display.value === null){
        display.value = "0"
    }
    saveData();
}

// local storage

function saveData(){
    localStorage.setItem("data", display.value);
}

function showData(){
    let storedData = localStorage.getItem("data");
    if (storedData === null){
        display.value = "0";
    }
    else{
        display.value = storedData;
    }
}
showData()