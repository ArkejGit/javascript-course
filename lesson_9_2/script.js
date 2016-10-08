var introText = {
	header: 'This is Intro Section',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, perspiciatis nam recusandae maxime, enim excepturi repudiandae, dolores placeat iste accusantium atque minus facere libero illo dolor quos aliquid reiciendis laborum.',
	length: function() {
		return introText.text.length;
	}
};

var introTextOutput = Mustache.render("<h2>{{header}}</h2><p>{{text}}</p><h5>Długość akapitu wynosi: {{length}}</h5>", introText);

window.onload = function() {
	document.getElementById('intro-text').innerHTML = introTextOutput;
};