var changeVerse = function() {
  //prevents it from going when verse is blank
  if (document.getElementById("addVerse").value !== "") {
    verse = document.getElementById("addVerse").value;
    reference = document.getElementById("addRef").value;

    if (splitType == ",") {
      splitVerse = verse.split(/[,;.]+/);
    } else {
      splitVerse = verse.split(" ");
    }

    for (var i = 0; i < splitVerse.length; i++) {
      if (splitVerse[i] == "") {
        splitVerse.splice(i, 1);
      }
    }

    //initiates stuff
    makeArrayLooper();
    setState = 0;

    if (translateEnabled) {
      document.getElementById("translationLoader").classList.add("progress");
      document.getElementById("translatedText").classList.add("hide");
      translateAndReset(colectedWords);
    }

    document.getElementById("mainText").innerHTML = colectedWords[setState];
    setState++;

    ////animations

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
	
	//clears and focuses main input
    document.getElementById("mainInput").value = "";
    document.getElementById("mainInput").focus();
  }
};

var changeUI = function() {
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

  unBlurrTextType();
};
