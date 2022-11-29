var countryElements = document.getElementById("countries").childNodes;
var countryCount = countryElements.length;
for (var i = 0; i < countryCount; i++) {
  countryElements[i].onmouseover = function () {
    // alert("You clicked on " + this.getAttribute("data-name"));
    const title= document.createElement("title");
    title.innerText=this.getAttribute("data-name");
    this.appendChild(title);
  };
}
