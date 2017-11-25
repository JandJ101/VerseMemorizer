var changeVerse = function () {
    verse = document.getElementById("addVerse").value;
    splitVerse = verse.split(" ");

    makeArrayLooper();
    setState = 0;
    document.getElementById("mainText").innerHTML = colectedWords[setState];
    setState++;



    //animations

    //bring main in
    document.getElementById("main").classList.remove("hide");
    document.getElementById("main").classList.add("fadeInDown");

    //bring verse input out
    //document.getElementById("addVerseContainer").classList.add("fadeOutDown");
    document.getElementById("addVerseContainer").classList.add("hide");
    
    //show +
    document.getElementById("add").classList.remove("hide");
    document.getElementById("add").classList.remove("fadeOutRight");
    document.getElementById("add").classList.add("fadeInRight");
    
    //show menu button
    document.getElementById("menuButton").classList.remove("hide");
    document.getElementById("menuButton").classList.remove("fadeOutLeft");
    document.getElementById("menuButton").classList.add("fadeInLeft");

};

var changeUI = function () {
    document.getElementById("main").classList.add("hide");


    //bring verse input in
    document.getElementById("addVerseContainer").classList.remove("hide");
    document.getElementById("addVerseContainer").classList.add("fadeInUp");

    //hide +
    document.getElementById("add").classList.remove("fadeInRight");
    document.getElementById("add").classList.add("fadeOutRight");
    
    //hide menu button
    document.getElementById("menuButton").classList.remove("fadeInLeft");
    document.getElementById("menuButton").classList.add("fadeOutLeft");

};
