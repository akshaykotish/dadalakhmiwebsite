
var SectionA = document.getElementById("SectionA");
var SectionB = document.getElementById("SectionB");
var SectionC = document.getElementById("SectionC");
var SectionD = document.getElementById("SectionD");
var SectionE = document.getElementById("SectionE");
var SectionF = document.getElementById("SectionF");
var SectionG = document.getElementById("SectionG");
var SectionH = document.getElementById("SectionH");

var SectionHeight = SectionC.clientHeight; 

function OnScroll(){
    var scrollY = parseInt(window.scrollY);
    var index = parseInt(scrollY/SectionHeight);
    console.log(index);

    if(index == 0)
    {
        SectionA.style.visibility = "visible";
        SectionC.style.visibility = "hidden";
        SectionG.style.visibility = "hidden";
        ContinueRagni();
    }
    else if(index == 1)
    {
        SectionC.style.visibility = "visible";
        SectionA.style.visibility = "hidden";
        SectionG.style.visibility = "hidden";
        ContinueRagni();
    }
    else if(index == 2)
    {
        LetsPlayTrailer();
    }
    else if(index == 3)
    {
        ContinueRagni();
    }
    else if(index == 4)
    {
        SectionG.style.visibility = "visible";
        SectionA.style.visibility = "hidden";
        SectionC.style.visibility = "hidden";
    }
}