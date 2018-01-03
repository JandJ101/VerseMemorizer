var lastLetter;

var focusedTextBox;


var replaceLast2 = function (str1, replace, str2) {


    var output;


    //lowercase
    if (replace == "a") {
        output = ("à");

    }

    if (replace == "e") {
        output = ("è");

    }

    if (replace == "i") {
        output = ("ì");

    }
    if (replace == "o") {
        output = ("ò");

    }
    if (replace == "u") {
        output = ("ù");

    }

    //uppercase
    if (replace == "A") {
        output = ("À");

    }

    if (replace == "E") {
        output = ("È");

    }

    if (replace == "I") {
        output = ("Ì");

    }
    if (replace == "O") {
        output = ("Ò");

    }
    if (replace == "U") {
        output = ("Ù");

    }


    if (replace == "n") {
        output = ("ñ");

    }
    if (replace == "N") {
        output = ("Ñ");

    }

    focusedTextBox.value = str1 + output + str2;


};


var checkAccent = function () {


    setTimeout(function () {


        var firstPart;

        var secondPart;


        focusedTextBox = document.activeElement;

        var cursorPos = focusedTextBox.selectionStart;





        var fullString = document.activeElement.value;


        firstPart = fullString.slice(0, cursorPos);

        secondPart = fullString.slice(cursorPos, fullString.length);

        console.log(cursorPos);

        console.log(firstPart + "||" + secondPart);

        if (document.activeElement.type == "text" || document.activeElement.tagName == "TEXTAREA") {

            //gets last letter of active text box
            lastLetter = firstPart.slice(-1);
            //console.log(lastLetter);
        }


        if (lastLetter == "`" || lastLetter == "~") {
            var secondLast = firstPart.charAt(firstPart.length - 2);

            //console.log(secondLast);
        }


        var trimIt = function (letter) {
            //removelast 2
            var trim2 = firstPart.slice(0, -1).slice(0, -1);


            replaceLast2(trim2, letter, secondPart);


        };

        if (secondLast == "a") {


            trimIt("a");

        } else if (secondLast == "e") {

            trimIt("e");

        } else if (secondLast == "i") {

            trimIt("i");

        } else if (secondLast == "o") {

            trimIt("o");

        } else if (secondLast == "u") {

            trimIt("u");

        }
        if (secondLast == "A") {


            trimIt("A");

        } else if (secondLast == "E") {

            trimIt("E");

        } else if (secondLast == "I") {

            trimIt("I");

        } else if (secondLast == "O") {

            trimIt("O");

        } else if (secondLast == "U") {

            trimIt("U");

        } else if (secondLast == "n") {

            trimIt("n");

        } else if (secondLast == "N") {

            trimIt("N");

        }



    }, 20);






};
