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
    document.getElementById("add").classList.add("fadeInRight");

};

var changeUI = function () {
    document.getElementById("main").classList.add("hide");


    //bring verse input in
    document.getElementById("addVerseContainer").classList.remove("hide");
    document.getElementById("addVerseContainer").classList.add("fadeInUp");


};
