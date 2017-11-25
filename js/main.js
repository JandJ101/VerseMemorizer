<<<<<<< HEAD
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

var setState = 0;

var nextSet = function () {

    if (document.getElementById("mainInput").value.replace(/\s/g,'').toLowerCase() == document.getElementById("mainText").innerHTML.replace(/\s/g,'').toLowerCase()) {

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

=======
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

var setState = 0;

var nextSet = function () {

    if (document.getElementById("mainInput").value.replace(/\s/g,'').toLowerCase() == document.getElementById("mainText").innerHTML.replace(/\s/g,'').toLowerCase()) {

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

>>>>>>> 4307299f9fac552659c8622074b9afe539b3f602
}