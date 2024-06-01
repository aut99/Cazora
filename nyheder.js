//. i denne JS står alle vores informationer om countdown. vi har defineret den ved at skrive makeTimer //
function makeTimer() {
 
/*endTimer = variablen bliver defineret ved at oprette en ny dato, der repræsenterer slutdatoen og -tiden for countdownen.
Denne dato er sat til "August 26, 2024 18:00:00 PDT". Den bliver derefter konverteret til antal 
sekunder siden Unix epoch ved hjælp af Date.parse() og divideret med 1000 for at få antal sekunder */
    var endTime = new Date("August 26, 2024 18:00:00 PDT");     
    var endTime = (Date.parse(endTime)) / 1000;

/* now = variablen bliver defineret ved at oprette en ny dato, der repræsenterer det nuværende tidspunkt.
  Den bliver også konverteret til antal sekunder siden Unix epoch og divideret med 1000.*/
    var now = new Date();
    var now = (Date.parse(now) / 1000);

/* timeLeft = variablen bliver beregnet som forskellen mellem endTime og now, hvilket giver antallet af sekunder tilbage indtil slutdatoen og -tiden.*/
    var timeLeft = endTime - now;

/*Antallet af dage, timer, minutter og sekunder tilbage bliver beregnet ud fra timeLeft.*/    
    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

/* Hvis antallet af timer, minutter eller sekunder er mindre end 10, bliver der tilføjet en "0" foran dem for at sikre, at de vises i to cifre (fx 09 i stedet for 9).*/    
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

/* herunder er den del som holder strengene til HTML og CSS for at give det et fælles navn. vi har ændret den originale kode vi fandt på
hjemmesiden, da der her også ville stå navn "days, hours, minutes, seconds" hvilket vi selv ville skrive med vores egen tekst. */
    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);   

}

/*En setInterval() funktion bliver kaldt, som udfører makeTimer() hvert sekund for at opdatere countdown-timeren i realtid.*/
setInterval(function() { makeTimer(); }, 1000);

/*Dette har vi fået forklaret nøje ved hjælp af chatGPT i denne samtale https://chatgpt.com/share/85c6ba42-a1c1-45af-bb16-38a600e6b165
, ved at sætte hele koden ind vi fandt på siden: https://codepen.io/chriscoyier/embed/DdMLPN? og spurgte den derefter om at forklare os den*/
