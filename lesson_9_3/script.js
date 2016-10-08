function createIntro() {

	var introText = {
		header: 'To jest sekcja Intro',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dicta dolorum debitis, iste, autem maxime asperiores similique pariatur nihil sit ipsa doloremque blanditiis laudantium perferendis tenetur obcaecati iure explicabo tempore.',
		length: function() {
			return introText.text.length;
		}
	}
	var introTemplate = document.getElementById('intro-text-template').innerHTML;
	var introTextOutput = Mustache.render(introTemplate, introText);
	document.getElementById('intro-text').innerHTML = introTextOutput; 
}

window.onload = function() {
	createIntro();
}