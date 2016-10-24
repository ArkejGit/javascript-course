import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: '<h2>{{header}}</h2><p>{{text}}</p>'
})

export class AppComponent {
	header: string;
	text: string;

	constructor() {
		this.header = 'The best header ever!';
		this.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam a, officia provident esse libero assumenda et veniam, iste, obcaecati suscipit quo? Cupiditate impedit rerum quas, sed possimus consequatur amet deserunt!';
	}
}