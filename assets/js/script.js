var continentElements = document.getElementsByClassName("continents");
var countryCount = continentElements.length;
var africa = document.getElementById("africa");
var asia = document.getElementById("asia");
var namerica = document.getElementById("namerica");
var samerica = document.getElementById("samerica");
var europe = document.getElementById("europe");
var australia = document.getElementById("australia");
for (var i = 0; i < countryCount; i++) {
  continentElements[i].onclick = function () {
    // alert("You clicked on " + this.getAttribute("data-name"));
    if(this.getAttribute("data-name")=="Africa"){
      africa.scrollIntoView({behavior: "smooth",block: 'center'});
    }
    if(this.getAttribute("data-name")=="Asia"){
      asia.scrollIntoView({behavior: "smooth",block: 'center'});
    }
    if(this.getAttribute("data-name")=="Europe"){
      europe.scrollIntoView({behavior: "smooth",block: 'center'});
    }
    if(this.getAttribute("data-name")=="North America"){
      namerica.scrollIntoView({behavior: "smooth",block: 'center'});
    }
    if(this.getAttribute("data-name")=="South America"){
      samerica.scrollIntoView({behavior: "smooth",block: 'center'});
    }
    if(this.getAttribute("data-name")=="Australia"){
      australia.scrollIntoView({behavior: "smooth",block: 'center'});
    }

  };
}
