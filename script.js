window.onload = function() {
     movement ();
}

let fish = document.getElementById('fish'),
	predator = document.getElementById('predator');
	
function movement() {
	setInterval (
    	function () {
    	predator.style.transform += 'translateX(1px)';
    }, 10);
}