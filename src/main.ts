import App from './App.svelte';
import { create_custom_element } from 'svelte/internal';


customElements.define('my-app',
	create_custom_element(
		App,
		{},
		[],
		[],
		false,
	)
);