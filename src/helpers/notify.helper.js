import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted);

export default (message, theme = 'bubble', position = 'top-right', duration = 5000, action = 'Ok', modifiers = '') => {
	Vue.toasted.show(message, { 
		action: {
			text : action,
			onClick : (e, toastObject) => {
				toastObject.goAway(0);
			}
		},
		class: modifiers,
		duration: duration,
		position: position,
		theme: theme,
	});
};
