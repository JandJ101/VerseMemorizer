//my sisters variable that she made because she wnated to know how too declare variables.
var profesionalBoss = "me myself and i";

var verse =
  "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit";

var reference = "";

var splitVerse = verse.split(" ");

var outputState = 0;

var dificulty = 1;

var mainText = function() {
  document.getElementById("mainText");
};

var outputWords = function(x) {
  var a = 0;
  var returns = " ";

  while (a < x) {
    returns += splitVerse[outputState] + " ";
    a++;
    outputState++;
  }

  return returns;
};

var colectedWords = [];

var makeArray = function() {
  colectedWords.push(outputWords(dificulty));
};

var makeArrayLooper = function() {
  //Math.ceil(splitVerse.length/dificulty)
  outputState = 0;
  colectedWords = [];
  for (i = 0; i < Math.ceil(splitVerse.length / dificulty); i++) {
    makeArray();
  }

  if (colectedWords[colectedWords.length - 1].includes("undefined ")) {
    while (colectedWords[colectedWords.length - 1].includes("undefined ")) {
      colectedWords[colectedWords.length - 1] = colectedWords[
        colectedWords.length - 1
      ].replace("undefined ", "");
    }
  }

  if (reference !== "") {
    if (refPos == "after") {
      colectedWords.push(reference);
    } else if (refPos == "before") {
      colectedWords.unshift(reference);
    } else {
      //none
    }
  }
};

var currentList = outputWords(dificulty);

var check = function() {
  var a = document.getElementById("mainInput").value;

  document.getElementById("mainText").innerHTML = currentList;

  if (currentList == a) {
    var currentList = outputWords(dificulty);
    document.getElementById("mainText").innerHTML = currentList;
  }
};

//text blurr functions
var blurrTextType = function() {
  if (document.getElementById("blurrText").checked == true) {
    document.getElementById("mainText").classList.remove("unBlurr");
    document.getElementById("mainText").classList.add("blurrText");
  }
};

var unBlurrTextType = function() {
  document.getElementById("mainText").classList.remove("blurrText");
  document.getElementById("mainText").classList.add("unBlurr");
};

//translation enable/disable
var translateEnabled = false;

var enableTranslation = function() {
  if (realtime.checked) {
    //enable
    document.getElementById("translationWrapper").classList.remove("hide");
    translateEnabled = true;
    document.getElementById("translationLoader").classList.add("progress");
    document.getElementById("translatedText").classList.add("hide");
    translateAndReset(colectedWords);
  } else {
    //disable
    document.getElementById("translationWrapper").classList.add("hide");
    translateEnabled = false;
  }
};

var isTranslationReady = false;
var translationReady = function() {
  isTranslationReady = true;
  document.getElementById("translationLoader").classList.remove("progress");
  document.getElementById("translatedText").classList.remove("hide");
  document.getElementById("translatedText").innerHTML =
    finalTranslation[setState - 1];
};

var setState = 0;

var nextSet = function() {
  unBlurrTextType();

  //strip punctuation and spaces when checking

  //if (document.getElementById("mainInput").value.replace(/\s/g, '').toLowerCase() == document.getElementById("mainText").innerHTML.replace(/\s/g, '').toLowerCase())

  if (
    document
      .getElementById("mainInput")
      .value.replace(/[^A-Z0-9]/gi, "")
      .toLowerCase() ==
    document
      .getElementById("mainText")
      .innerHTML.replace(/[^A-Z0-9]/gi, "")
      .toLowerCase()
  ) {
    if (setState >= colectedWords.length) {
      setState = 0;
      document.getElementById("mainText").innerHTML = colectedWords[setState];

      document.getElementById("translatedText").innerHTML =
        finalTranslation[setState];

      document.getElementById("mainInput").value = "";

      setState++;
    } else {
      document.getElementById("mainText").innerHTML = colectedWords[setState];
      document.getElementById("translatedText").innerHTML =
        finalTranslation[setState];

      document.getElementById("mainInput").value = "";

      setState++;
    }
  } else {
    if (
      document.getElementById("mainInput").classList.contains("shake") == true
    ) {
      document.getElementById("mainInput").classList.toggle("shake");

      setTimeout(function() {
        document.getElementById("mainInput").classList.add("shake");
      }, 25);
    } else {
      document.getElementById("mainInput").classList.add("shake");
    }
  }
};


$( document ).ready(function() {
    update();

  makeArrayLooper();
  document.getElementById("mainText").innerHTML = colectedWords[setState];
  setState++;

  $("#mainInput").keyup(function(event) {
    if (event.keyCode === 13) {
      $("#next").click();
    }
  });

  $("#addVerse").keyup(function(event) {
    if (event.keyCode === 13) {
      $("#triggerVerseAdd").click();
    }
  });

  $("#mainInput").keydown(function() {
    blurrTextType();
  });
	

	//sets menu settings
  document.getElementById("dificultyButton").innerHTML = dificulty;
  document.getElementById("PosButton").innerHTML = refPos;
  $("#blurrText")[0].checked = true;
  $("#realtime")[0].checked = false;
	
	
	
});