var lastLetter;

var focusedTextBox;


var replaceLast2 = function (str1, replace, str2, pos) {
    var output;

    //lowercase
    if (replace == "a") {
        output = ("á");

    }

    if (replace == "e") {
        output = ("é");

    }

    if (replace == "i") {
        output = ("í");

    }
    if (replace == "o") {
        output = ("ó");

    }
    if (replace == "u") {
        output = ("ú");

    }

    //uppercase
    if (replace == "A") {
        output = ("Á");

    }

    if (replace == "E") {
        output = ("É");

    }

    if (replace == "I") {
        output = ("Í");

    }
    if (replace == "O") {
        output = ("Ó");

    }
    if (replace == "U") {
        output = ("Ú");

    }


    if (replace == "n") {
        output = ("ñ");

    }
    if (replace == "N") {
        output = ("Ñ");

    }

    focusedTextBox.value = str1 + output + str2;

    focusedTextBox.selectionStart = pos - 1;
    focusedTextBox.selectionEnd = pos - 1;


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

        if (document.activeElement.type == "text" || document.activeElement.tagName == "TEXTAREA") {

            //gets last letter of active text box
            lastLetter = firstPart.slice(-1);
        }


        if (lastLetter == "`" || lastLetter == "~") {
            var secondLast = firstPart.charAt(firstPart.length - 2);

        }


        var trimIt = function (letter) {
            //removelast 2
            var trim2 = firstPart.slice(0, -1).slice(0, -1);


            replaceLast2(trim2, letter, secondPart, cursorPos);


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
