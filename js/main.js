var verse = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit";

var splitVerse = verse.split(" ");

var outputState = 0;

var dificulty = 1;

var mainText = function () {
    document.getElementById("mainText");

};

var outputWords = function (x) {

    var a = 0;
    var returns = " ";

    while (a < x) {
        returns += splitVerse[outputState] + " ";
        a++;
        outputState++;
    }

    return (returns);

};

var colectedWords = [];

var makeArray = function () {
    colectedWords.push(outputWords(dificulty));

};

var makeArrayLooper = function () {
    //Math.ceil(splitVerse.length/dificulty)
    outputState = 0;
    colectedWords = [];
    for (i = 0; i < Math.ceil(splitVerse.length / dificulty); i++) {
        makeArray();

    }

    if (colectedWords[colectedWords.length - 1].includes("undefined ")) {

        while (colectedWords[colectedWords.length - 1].includes("undefined ")) {
            colectedWords[colectedWords.length - 1] = colectedWords[colectedWords.length - 1].replace('undefined ', '')

        }

    }

}

var currentList = outputWords(dificulty);


var check = function () {

    var a = document.getElementById("mainInput").value;

    document.getElementById("mainText").innerHTML = currentList;

    if (currentList == a) {
        var currentList = outputWords(dificulty);
        document.getElementById("mainText").innerHTML = currentList;
    }
};


//text blurr function
var blurrTextType = function () {

    if (document.getElementById("blurrText").checked == true) {
        document.getElementById("mainText").classList.remove("unBlurr");
        document.getElementById("mainText").classList.add("blurrText");
    }

};

var unBlurrTextType = function () {
        document.getElementById("mainText").classList.remove("blurrText");
        document.getElementById("mainText").classList.add("unBlurr");
    
};


var setState = 0;

var nextSet = function () {
    
    unBlurrTextType();

    if (document.getElementById("mainInput").value.replace(/\s/g, '').toLowerCase() == document.getElementById("mainText").innerHTML.replace(/\s/g, '').toLowerCase()) {

        if (setState >= colectedWords.length) {
            setState = 0;
            document.getElementById("mainText").innerHTML = colectedWords[setState];

            document.getElementById("mainInput").value = "";

            setState++;
        } else {
            document.getElementById("mainText").innerHTML = colectedWords[setState];

            document.getElementById("mainInput").value = "";

            setState++;
        }
    }

}

window.onload = function () {
    makeArrayLooper();
    document.getElementById("mainText").innerHTML = colectedWords[setState];
    setState++;

    $("#mainInput").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#next").click();
        }
    });

    $("#addVerse").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#triggerVerseAdd").click();
        }
    });

    $("#mainInput").keydown(function () {
        blurrTextType();
    });
    
    
    document.getElementById("dificultyButton").innerHTML = dificulty;

};
