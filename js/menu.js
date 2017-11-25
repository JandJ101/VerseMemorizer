var setDificulty =function(a) {
    dificulty = a;
    document.getElementById("dificultyButton").innerHTML = a;
    
    //resets stuff
    makeArrayLooper();
    setState = 0;
    document.getElementById("mainText").innerHTML = colectedWords[setState];
    setState++;
}