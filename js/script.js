function showMore(){
    var dots = document.getElementById("dots_idan");
    var moreText = document.getElementById("more_idan");
    var btnText = document.getElementById("btnMoreIDAN");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Mostra di più";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Mostra meno";
        moreText.style.display = "inline";
    }
}