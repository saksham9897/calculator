const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

buttons.forEach(button =>{
    button.addEventListener("click", handleButtonClick );
});


function handleButtonClick(event){
    const clickedButton = event.target;
    const butttonText = clickedButton.textContent;

    if(butttonText === "AC") {
        inputBox.value = "";
    }
    else if (butttonText === "Del") {
        inputBox.value = inputBox.value.slice(0, -1);
    }
    else if (butttonText === "=") {
        try{
            inputBox.value =  eval(inputBox.value);
        }catch (error) {
            inputBox.value = "Error";
        }
    }else{
        inputBox.value += butttonText;
    }    

} 