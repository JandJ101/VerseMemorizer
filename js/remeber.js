var verses = [];


//updates verses to cookies cookies
if(typeof localStorage.verses !== 'undefined'){    
    verses = JSON.parse(localStorage.verses);

}

var updateCook = function () {

    localStorage.verses = JSON.stringify(verses);

};

var appendIt = function (x) {
    var node = document.createElement("LI");
    document.getElementById("historyList").appendChild(node);
    document.getElementById("historyList").lastChild.innerHTML = x
};


var remVerse = function () {
    var objects = new Object()

    var stNum = verses.length;

    objects.ref = document.getElementById("addRef").value;
    objects.stVerse = document.getElementById("addVerse").value;

    verses.unshift(objects);
    updateCook();
    
    update();

};


var deleteList = function (idElem) {
    var theElement = idElem.parentElement;

    var theId = idElem.parentElement.id;



    var numId = parseInt(theId.charAt(0))


    verses.splice(numId, 1);
    
    updateCook();

    update();



};



var update = function () {

    document.getElementById("historyList").innerHTML = "";

    var key = "thismykey";
    var thangy = 0;

    while (thangy < verses.length) {
        var h1 = "<h1 class='theH1'>" + verses[thangy].ref + "</h1>";

        var p = "<p class='theP'>" + verses[thangy].stVerse + "</p>";

        var deleteButton = "<i onclick='deleteList(this);' class='material-icons'>delete</i>";

        var goods = "<span onclick='enterVerse(this);' class='spanText'>" + h1 + p + "</span>" + deleteButton;


        //makes appension
        var appendIt = function (x) {
            var node = document.createElement("LI");
            node.id = thangy + key;
            document.getElementById("historyList").appendChild(node);
            document.getElementById("historyList").lastChild.innerHTML = x
        };

        appendIt(goods);

        thangy++;

    }

};



var enterVerse = function (x) {
    var theId = x.parentElement.id;

    var theP = $("#" + theId + " .theP")[0].innerHTML;
    var theH1 = $("#" + theId + " .theH1")[0].innerHTML;

    document.getElementById("addRef").value = theH1;
    document.getElementById("addVerse").value = theP;

    changeVerse();

};
