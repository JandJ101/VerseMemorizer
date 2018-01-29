var refPos = "after";

var splitType = " ";

var resetStuff = function () {
    //resets stuff
    changeVerse();
    makeArrayLooper();
    setState = 0;
    document.getElementById("mainText").innerHTML = colectedWords[setState];
    setState++;

};

var setDificulty = function (a) {

    if (a == "all") {
        splitType = " ";
        dificulty = splitVerse.length;
    } else if (a == "punctuation") {
        splitType = ",";
        dificulty = 1;
    } else {
        splitType = " ";
        dificulty = a;
    }


    document.getElementById("dificultyButton").innerHTML = a;

    resetStuff();
}


var refPosChange = function (a) {
    refPos = a;

    document.getElementById("PosButton").innerHTML = a;

    resetStuff();

};
