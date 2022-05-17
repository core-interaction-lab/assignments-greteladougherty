$( function() {
 $( ".draggable" ).draggable();
 iframeFix: true;
 stack: ".draggable"
 });

// Getter
var iframeFix = $( ".draggable" ).draggable( "option", "iframeFix" );
 
// Setter
$( ".draggable" ).draggable( "option", "iframeFix", true );
  