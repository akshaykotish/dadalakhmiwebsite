
var Ragnis = ["JRN4JX4Xv8g", "ecjJ6a2r-68", "15oX2cWHva8", "Fu3nRN-Ze1c"];
var Title = ["Dada Lakhmi Movie Trailer", '#DadaLakhmi- Brahmgyani - Shyam Sharma–#Uttamsingh –#YashpalSharma- #Ravindra Rajawat - Anhad Studio', "#DadaLakhmi - Lakh Chaurasi - Shyam Sharma | Prem Dehati |#yashpal | #uttamsingh |Ravindra Rajawat", "Mata Ki Prathna"];
var currentRagni = 0;
var CurrentPosition = 0 ;

var isPlaying = false;

function ContinueRagni(){
  if(player != undefined){
    if(isPlaying == false){
      player.loadVideoById(Ragnis[currentRagni], CurrentPosition, "large");
      player.playVideo();
      isPlaying = true;
      document.getElementById("play").style.display = "none";
      document.getElementById("pause").style.display = "block";
    }
  }
}


function PlayRagni(e){
  if(player != undefined){
    isPlaying = true;
    currentRagni = e;
    player.loadVideoById(Ragnis[currentRagni], 0, "large");
    player.playVideo();
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block";
  }
}

function PauseRagni(){
  player.pauseVideo();
  isPlaying = false;
  document.getElementById("play").style.display = "block";
  document.getElementById("pause").style.display = "none";
}

function  NextRagni(){
  if(currentRagni == Ragnis.length-1)
  {
    currentRagni = 0;
  }
  else{
    currentRagni++;
  }
  PlayRagni(currentRagni);
}

function PreviousRagni()
{
  if(currentRagni == 0)
  {
    currentRagni = Ragnis.length - 1;
  }
  else{
    currentRagni--;
  }
  PlayRagni(currentRagni);
}

function Display(){
  if(player != undefined){
    var duration = player.getDuration();
    var current = player.getCurrentTime();
    CurrentPosition = current;
    var Currentpercent = parseInt((current/duration) * 95);
    document.getElementById("Title").innerText = Title[currentRagni];
    document.getElementById("CurrentPosition").style.marginLeft = Currentpercent + "%";
  }
}


setInterval(() => {
  Display();
}, 1000);
