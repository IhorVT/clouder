/**
 * Created by TW on 19.07.2015.
 */

$('#locationForm').submit(sLoc);

function sLoc(e) {
    e.preventDefault();
    var pos='q='+($("input:first").val());
    defPos(pos);
}


