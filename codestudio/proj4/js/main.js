$( function() {
 $( ".draggable" ).draggable();
 iframeFix: true;
 stack: ".draggable"
 });

// Getter
var iframeFix = $( ".draggable" ).draggable( "option", "iframeFix" );
 
// Setter
$( ".draggable" ).draggable( "option", "iframeFix", true );



function myFunction() {
    document.getElementById("boot1").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.filterbutton')) {
      var dropdowns = document.getElementsByClassName("navContainer");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);

  // Add event listener on keyup
document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);
  