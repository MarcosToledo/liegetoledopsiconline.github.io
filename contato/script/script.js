function onresize() {
	var windowWidth = screen.width;
	var device = 'mobile';

	if (windowWidth > 800) {
		device = 'desktop';
	}

	alterarImagens(device);

	console.log(windowWidth);	
	console.log(device);

}

function alterarImagens(device) {
	var logo = document.getElementById("logoPsico");
	logo.setAttribute('src', 'imgs/' + device + '/logo-psico.png');
	console.log(logo);

}

window.addEventListener("resize", onresize);