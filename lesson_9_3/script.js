var introText = {
	header: 'To jest sekcja Intro',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dicta dolorum debitis, iste, autem maxime asperiores similique pariatur nihil sit ipsa doloremque blanditiis laudantium perferendis tenetur obcaecati iure explicabo tempore.',
	length: function() {
		return introText.text.length;
	}
}

var introTextOutput = Mustache.render("<h2>{{header}}</h2><p>{{text}}</p><h5>Długość akapitu wynosi: {{length}}</h5>", introText);

window.onload = function() {
	document.getElementById('intro-text').innerHTML = introTextOutput; 
}