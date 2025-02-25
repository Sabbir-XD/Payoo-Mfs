
function getInputValueID(id){
    const Value = document.getElementById(id).value;
    const convertValue = parseFloat(Value);
    return convertValue;
}

function getInnerTextValueID(id){
    const Value = document.getElementById(id).innerText;
    const convertValue = parseFloat(Value);
    return convertValue;
}

function setInnerTextIDandValue(id, value){
    document.getElementById(id).innerText = value;
}

function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}