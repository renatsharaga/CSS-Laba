/*function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") 
    {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }*/
  function myFunction() {
    var x = document.getElementById("myDIV");
    x.style.display = ((x.style.display!='block') ? 'block' : 'none')
}
function hideBlock() {
  var x = document.getElementById("myDIV2");
  x.style.display = ((x.style.display!='block') ? 'block' : 'none')
}
