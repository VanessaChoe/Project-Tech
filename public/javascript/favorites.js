console.log('favorite.js')

const ButtonTerug = document.getElementById("ButtonTerug");
document.getElementById("buttonTerug").onclick = function () {
location.href = "/travelbuddies?geslacht=<%=geslacht%>&continenten=<%=continenten%>";
};

const ButtonHome = document.getElementById("ButtonHome");
document.getElementById("ButtonHome").onclick = function () {
location.href = "/";
};









