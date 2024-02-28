document.addEventListener("DOMconterloaded", function(){
    const decresefontsizebutton = document.getElementById(decresefontsizebutton);
    const inscreseFontsizeButton = document.getElementById(inscresefontsizebutton);
    const changeColorButton = document.getElementById(changeColorButton);
    let currentFontSize = 26; // Tamanho da Fonte Inicial
    let colorsChanged = false; // Estado das Cores

    decresefontsizebutton.addEventListener("click", function(){
        adjustfontsize(-2);
    }

    });

inscreseFontsizeButton.addEventListener("click", function(){
    adjustfontsize(2);//aumentar o tamanho da fonte
    });

    changeColorButton.addEventListener("click")
