/**
 * Created by Jack on 4/17/2017.
 */
function makeVisible(rightSideDiv) {
    $( "#rightSideDiv" ).fadeIn();
}

function makeInvisible(rightSideDiv) {
    $( "#rightSideDiv" ).hide();
}

function onLoad(rightSideDiv) {
	$( "#rightSideDiv" ).hide();
}
window.onload = onLoad;
