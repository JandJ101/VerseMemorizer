//removes charecters that might interfere with a http request
var makeSafe = function(x) {
  x = x.replace(/;/g, "");
  x = x.replace(/\//g, "");
  x = x.replace(/@/g, "");
  x = x.replace(/=/g, "");
  x = x.replace(/&/g, "");
  x = x.replace(/}/g, "");
  x = x.replace(/{/g, "");
  x = x.replace(/~/g, "");
  x = x.replace(/[\[\]']/g, "");
  x = x.replace(/`/g, "");
  x = x.replace(/</g, "");
  x = x.replace(/>/g, "");
  x = x.replace(/#/g, "");
  x = x.replace(/%/g, "");
  x = x.replace(/[?=]/g, "%3F");
  x = x.replace("|||", "");
  return x;
};

var finalTranslation = [];

//returns a single string cleaned up from the translation array
var cleanupToTranslate = function(thing) {
  var translateStuff = thing;
  var stuffToTranslateClean = [];
  var translatedStuff = [];
  for (i = 0; i < translateStuff.length; i++) {
    stuffToTranslateClean[i] = makeSafe(translateStuff[i]);
  }
  var stuffToTranslateCleanString = stuffToTranslateClean.join(" ||| ");

  return stuffToTranslateCleanString;
};

//executes cleanup and starts http request
//main point for external access
var translateAndReset = function(x) {
  var workWith = cleanupToTranslate(x);
  document.getElementById("translatedText").classList.add("hide");

  getTranslation(workWith);
};

//puts everything back in a new translated array
var putBack = function(x) {
  var y = x.translation;

  finalTranslation = y.split("|||");
  translationReady();
};

//makes an http request to rest api based on word input
var getTranslation = function(thingtotranslate) {
  /*const Http = new XMLHttpRequest();
  const url = "https://jandjtranslate-xx9cj4as3uha.runkit.sh/en/" + thingtotranslate;
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = e => {
    //translaterCallback(Http.responseText);
    //translaterCallback(thingtotranslate);
    console.log(Http.responseText);
  };*/

  $.get(
    "https://untitled-uoagm597h8g1.runkit.sh/en/" + thingtotranslate,
    undefined,
    function(data, status, xhr) {
      putBack(data);
    }
  );
};
