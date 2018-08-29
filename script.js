window.onload = function() {
     movement ();
}

const  fish = document.getElementById('fish'),
	   predator = document.getElementById('predator');
	
function movement() {

	setInterval (
    	function () {
                let moveUp = 'translateY(-' + (Math.random() * 20) + 'px)',
                    moveRight = 'translateX(' + (Math.random() * 20) + 'px)',
                    moveDown = 'translateY(' + (Math.random() * 20) + 'px)',
                    moveLeft = 'translateX(-' + (Math.random() * 20) + 'px)',
                    arr = [moveUp, moveRight, moveDown, moveLeft];

    				fish.style.transition = 'all 0.3s linear';
    				predator.style.transition = 'all 0.3s linear';
    					
    				fish.style.transform += arr[Math.floor(Math.random() * arr.length)];
    				predator.style.transform += arr[Math.floor(Math.random() * arr.length)];
    				}, 
    				300
    			);
}