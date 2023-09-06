function createElement (data) {
	const paragraph = document.createElement('p');
	paragraph.textContent = data;
	document.body.appendChild(paragraph);
}

function queryWikipedia (callback) {
	/* create XMLhttprequest object */
	const request = new XMLHttpRequest();
	/* request configuration */
	request.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
	/* when the request is loaded, function to execute */
	request.onload = function() {
		/* if status is successful */
		if (request.status === 200) {
			/* store the response JSON in a variable */
			const response = JSON.parse(request.responseText);
			/* extract first id of the page */
			const pageId = Object.keys(response.query.pages)[0];
			/* extract the text (argument) */
			const extract = response.query.pages[pageId].extract;

			callback(extract);
		}
	}
	request.send();
};

queryWikipedia(createElement);
