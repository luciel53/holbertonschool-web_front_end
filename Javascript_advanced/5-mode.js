function changeMode (size, weight, transform, background, color) {
	return function () {
		document.getElementsByTagName("body")[0].style.fontSize = size;
		document.getElementsByTagName("body")[0].style.fontWeight = weight;
		document.getElementsByTagName("body")[0].style.textTransform = transform;
		document.getElementsByTagName("body")[0].style.backgroundColor = background;
		document.getElementsByTagName("body")[0].style.color = color;
	}
}

function main () {
	let spooky = changeMode('9', 'bold', 'uppercase', 'pink', 'green');
	let darkMode = changeMode('12', 'bold', 'capitalize', 'black', 'white');
	let screamMode = changeMode('12', 'normal', 'lowercase', 'white', 'black');

	const body = document.getElementsByTagName('body')[0];
	const paragraph = document.createElement('p');
	paragraph.textContent = 'Welcome Holberton!';
	body.appendChild(paragraph);

	/* Spooky button */
	const buttonSpooky = document.createElement('button');
	buttonSpooky.textContent = 'Spooky';
	body.appendChild(buttonSpooky);
	buttonSpooky.addEventListener('click', function () {
		spooky();
	});

	/* Dark mode button */
	const buttonDarkmode = document.createElement('button');
	buttonDarkmode.textContent = 'Dark mode';
	body.appendChild(buttonDarkmode);
	buttonDarkmode.addEventListener('click', function () {
		darkMode();
	});

	/* Scream button */
	const buttonScream = document.createElement('button');
	buttonScream.textContent = 'Scream';
	body.appendChild(buttonScream);
	buttonScream.addEventListener('click', function () {
		screamMode();
	});

	return (spooky, darkMode, screamMode);
}

main()
