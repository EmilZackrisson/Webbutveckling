function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var open = false;

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
    // document.getElementsByClassName("dropdown-content").classList.toggle("show");
    console.log("ARROW CLICK");

    if(open){
        document.getElementById("dropdown-arrow").style.transform = "rotate(0deg)";
        open = false;
        console.log("CLOSED");
    }
    else{
        document.getElementById("dropdown-arrow").style.transform = "rotate(180deg)";
        open = true;
        console.log("OPENED");
    }  
}

  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-icon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          var open = false;
        }
      }
      
    }
  } 

 