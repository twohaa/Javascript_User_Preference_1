const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

//setValues()
const setValues = (fontSize, bgColor) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}


//loadLocalStorageValue
const initialSetup = () => {
    const fontSize = localStorage.getItem("fontSize");
    const bgColor = localStorage.getItem("bgColor");
    

    if(fontSize && bgColor){
        setValues(fontSize, bgColor);
    }
    if(!fontSize && !bgColor){
        setValues("16px", "aqua");
    }
    if(fontSize && !bgColor){
        setValues(fontSize, "aqua");
    }
    if(!fontSize && bgColor){
        setValues("16px", bgColor);
    }
};


// changeFontSize()
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize );
};

// changeBgColor()
const changeBgColor = (event) => {
  const selectedBgColor = event.target.value;
  mainElement.style.backgroundColor = selectedBgColor;
  localStorage.setItem("bgColor", selectedBgColor);
};

//clearLocalStorage()
const clearLocalStorage = (e) => {
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");
    setValues("16px", "aqua");
};

// add event listener
selectFontSize.addEventListener("change", changeFontSize );
selectBgColor.addEventListener("change", changeBgColor );
resetButton.addEventListener("click", clearLocalStorage );

initialSetup();