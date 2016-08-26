import { Component } from '@angular/core';

@Component({
	selector: 'ng2-material-test',
	template: `
	<div>Angular Material 2 Button Test</div>
	<ul>
		<li>
			<button md-button md-no-ink class="md-primary md-mini">
				Primary (md-noink) 
			</button>	
		</li>
		<li>
			<button md-fab class="md-primary md-hue-2" aria-label="Profile">
				<i class="material-icons">face</i>
			</button>
		</li>
	</ul>
	
	
	`,


})

export class Ng2MaterialTestComponent {

}