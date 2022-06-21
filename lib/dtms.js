let DontTouchMySelection = class {

	static removeEvents(target) {

		// https://developer.mozilla.org/en-US/docs/Web/API/Document
		const events = [
			'keyup', 'keydown', 'keypress', 'select', 'selectstart', 'selectionchange',
			'pointerdown', 'pointerup', 'touchstart', 'touchleave', 'touchend', 'touchcancel',
			'mouseup', 'mousedown', 'mousemove', 'mouseout', 'drag', 'dragstart',
			'click', 'copy', 'cut', 'contextmenu'
		];

		events.forEach((eventName) => {
			target['on' + eventName] = null;
			target.addEventListener(eventName, (e) => e.stopImmediatePropagation(), true);
		});
	}

	static removeStyles() {
		const elements = document.querySelectorAll('*');
		for(let i=0; i<elements.length; i++) {
			if (typeof elements[i].style !== 'undefined') {
				elements[i].style.setProperty('user-select', 'auto', 'important');
				elements[i].style.setProperty('pointer-events', 'auto', 'important');
			}
		}
	}

	static init() {
		this.removeEvents(document);
		this.removeEvents(document.body);
		this.removeEvents(window);
		this.removeStyles();
	}
}

DontTouchMySelection.init();
