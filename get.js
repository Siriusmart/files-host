let urlString = window.location.href;
let paramString = urlString.split('?')[1];

let urlparamas = new URLSearchParams(paramString);

let path = urlparamas.get('path');
let id = urlparamas.get('id')

fetch(path)
	.then(r => r.text())
	.then(t => {
		window.parent.postMessage({
			id,
			content: t,
		}, '*');
	});
