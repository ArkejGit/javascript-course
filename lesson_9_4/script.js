function createMenu() {

	var menuItems = {
		items: [
			{item: "Start"},
			{item: "Oferta"},
			{item: "O nas"},
			{item: "Galeria"},
			{item: "Kontakt"}
		]
	};

	var menuTemplate = document.getElementById('main-menu-template').innerHTML;
	var menuOutput = Handlebars.compile(menuTemplate);
	document.getElementById('main-menu').innerHTML = menuOutput(menuItems);
}

window.onload = function() {
	createMenu();
};