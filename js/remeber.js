var verses = [];


//updates verses to cookies cookies
if (typeof localStorage.verses !== 'undefined') {
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

//adds stuff to array
var remVerse = function () {

    if (document.getElementById("addVerse").value !== "") {

        var objects = new Object()

        var stNum = verses.length;

        objects.ref = document.getElementById("addRef").value;

        var addVerse = document.getElementById("addVerse").value;

        objects.stVerse = addVerse;

        var already = false;

        var ii = 0;


        while (ii < verses.length) {

            if (verses[ii].stVerse == addVerse) {
                already = true;
                //
                ii = verses.length + 5;
            } else {
                already = false;

            }

            ii++;

        }


        if (already == false) {
            verses.unshift(objects);


        }
        updateCook();

        update();

    }

};

//deletes li on user request
var deleteList = function (idElem) {
    var theElement = idElem.parentElement;

    var theId = idElem.parentElement.id;



    var numId = parseInt(theId.charAt(0))


    verses.splice(numId, 1);

    updateCook();

    update();
};



//apply edits
var applyEdits = function (x) {
    var theId = x.parentElement.id;
    var newH1Text = $("#" + theId + " .newH1Text")[0].value;
    var newPText = $("#" + theId + " .newPText")[0].value.replace(/\n/g, '');


    var numId = parseInt(theId.charAt(0));

    verses[numId].ref = newH1Text;
    verses[numId].stVerse = newPText;

    updateCook();
    update();


};



//edits stored verses
var editList = function (x) {


    var theId = x.parentElement.id;

    h1Text = $("#" + theId + " .theH1")[0].innerHTML;

    pText = $("#" + theId + " .theP")[0].innerHTML;

    //disbles enter verse
    $("#" + theId + " .spanText")[0].onclick = null;

    x.innerHTML = "check";

    x.onclick = function () {
        applyEdits(this);
    };

    $("#" + theId + " .theH1").replaceWith("<input type='text' class='newH1Text' value='" + h1Text + "'>");

    $("#" + theId + " .theP").replaceWith("<textarea class='newPText materialize-textarea'>" + pText + "</textarea>");


};



var update = function () {

    document.getElementById("historyList").innerHTML = "";

    var key = "thismykey";
    var thangy = 0;

    while (thangy < verses.length) {
        var h1 = "<h1 class='theH1'>" + verses[thangy].ref + "</h1>";

        var p = "<p class='theP'>" + verses[thangy].stVerse + "</p>";

        var deleteButton = "<i onclick='deleteList(this);' class='material-icons'>delete</i>";

        var editButton = "<i onclick='editList(this);' class='material-icons'>edit</i>"

        var goods = "<div onclick='enterVerse(this);' class='spanText'>" + h1 + p + "</div>" + deleteButton + editButton;


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
