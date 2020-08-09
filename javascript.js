function printCompany(){
    document.getElementById('outputCompany').innerHTML= inputCompany.value;
}
function printMessage(){
    document.getElementById('outputMessage').innerHTML= inputMessage.value;
}
 function changeBg() {
     var bgColor = document.getElementById('inputBg').value
     document.getElementById('card').style.background = bgColor;
 }
 function changeText() {
    var textColor = document.getElementById('inputText').value
    document.getElementById('card').style.color = textColor;
}

function printJob(){
    document.getElementById('outputJob').innerHTML= inputJob.value;
}

function printName(){
    document.getElementById('outputName').innerHTML= inputName.value;
}

function printEmail(){
    document.getElementById('outputEmail').innerHTML=  "Email:" + inputEmail.value;
}

function printTelephone(){
    document.getElementById('outputTelephone').innerHTML=  "Tel:" + inputTelephone.value;
}

function  fromSubmit(){
    if(!inputName.value){
        alert("Please complete all required section")
    }
    else{
        alert("Your Form Got submitted")
    }
}
function fromReset(){
    window.location.reload();
}
function big(){
    document.getElementById('card').style.fontSize = "34px"
    document.getElementById('card').style.width = "600px"
    document.getElementById('card').style.height = "500px"
}

function small(){
    document.getElementById('card').style.fontSize = "24px"
}


