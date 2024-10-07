function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function () {
	const second = 1000;
	minute = second*60;
	hour = minute*60;
	day = hour*24;

	document.getElementById("container").style.width = "100vh";
	
	let bday = "October 6,2024 19:12:40",
	countdown = new Date(bday).getTime(),


	x=setInterval(function () {
		let now = new Date().getTime(),
		distance = countdown - now;

		document.getElementById("days").innerText = Math.floor(distance/(day));
		document.getElementById("hours").innerText = Math.floor((distance%(day))/(hour));
		document.getElementById("minutes").innerText = Math.floor((distance%(hour))/(minute));
		document.getElementById("seconds").innerText = Math.floor((distance%(minute))/(second));

		document.getElementById("bodyID").classList.remove('animateMe');

		if (distance < 0) {
			document.getElementById("bg").play();
			document.getElementById("container").style.width = "auto";
			let 
			headline = document.getElementById("headline"),
			countdown = document.getElementById("countdown"),
			proceed = document.getElementById("proceedToPresentation"),
			content = document.getElementById("content");

			// headline.innerText = "Happy Birthday\nCharan Cherry";
			headline.innerText = "Hello\nWorld";
			
			headline.style.fontSize = "450%";
			headline.classList.add("type");

			countdown.style.display = "none";
			content.style.display = "flex";
			proceed.style.display = "block";
			proceed.style.animation = "fade-in 3s";
			proceed.disabled = true; 

			var fDura = 15 * 1000;
			var animationEnd = Date.now() + fDura;
			var defaults = { startVelocity: 20, spread: 360, ticks: 60, zIndex: 0, gravity: 0.1};

			let i = 60;
			var interval = setInterval(function() {
				
				var timeLeft = animationEnd - Date.now();
				proceed.innerHTML = " ("+i+") Fireworks &#127881";
				i = i-1;

				if (timeLeft <= 0) {
					proceed.disabled = false;
					proceed.innerHTML = "Go to Next &#x1F382";
					proceed.onclick = function(){

						document.getElementById("bodyID").classList.add("animate");

						setTimeout(() => {location.replace("presentation.html");}, 5000)

						// 
					};
					return clearInterval(interval);
				}

				var particleCount = 50 * (timeLeft / fDura);
				// since particles fall down, start a bit higher than random
				confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
				confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
			}, 250);

			clearInterval(x);
			
			/*document.getElementById("bodyID").classList.toggle('animateMe');
			
  			location.replace("presentation.html");*/
		}


	},0);}());




