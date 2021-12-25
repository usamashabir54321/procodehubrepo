document.onkeydown = function(e) {
    // disable F12 key
    if(e.keyCode == 123) return false;
    // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73) return false;
    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) return false;
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
    return false;
    }
    // disable U key
    if(e.ctrlKey && e.keyCode == 85) return false;
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if(e.ctrlKey&&(e.which==65||e.which==66||e.which==67||e.which==70||e.which==73||e.which==80||e.which==83||e.which==85||e.which==86)) {e.preventDefault()}
    e=e||window.event;
    if(e.keyCode==123||e.keyCode==18){return false}
    if (e.ctrlKey && (e.keyCode == 'S'.charCodeAt(0) || e.keyCode == 's'.charCodeAt(0))) {
        return false;
    }
}
document.keypress=function(e){
    if(e.ctrlKey&&(e.which==65||e.which==66||e.which==70||e.which==67||e.which==73||e.which==80||e.which==83||e.which==85||e.which==86)){}
    return false;
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73) return false;
}
// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());
function disableSelection(e) {
    if(typeof e.onselectstart!="undefined")
        e.onselectstart=function(){return false};
    else if(typeof e.style.MozUserSelect!="undefined")e.style.MozUserSelect="none";
    else e.onmousedown=function(){return false};
    e.style.cursor="default"
}
document.ondragstart = function() { return false;}
window.onload = function(){disableSelection(document.body);};