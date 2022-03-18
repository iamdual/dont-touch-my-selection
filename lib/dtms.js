let DontTouchMySelection = class {
	static removeEvents(target) {
		target.onselectstart = null;
		target.onmouseup = null;
		target.onmousedown = null;
		target.onclick = null;
		target.oncopy = null;
		target.oncut = null;
		target.oncontextmenu = null;

		target.addEventListener('selectstart', (e) => e.stopImmediatePropagation(), true);
		target.addEventListener('mouseup', (e) => e.stopImmediatePropagation(), true);
		target.addEventListener('mousedown', (e) => e.stopImmediatePropagation(), true);
		target.addEventListener('click', (e) => e.stopImmediatePropagation(), true);
		target.addEventListener('copy', (e) => e.stopImmediatePropagation(), true);
		target.addEventListener('cut', (e) => e.stopImmediatePropagation(), true);
		target.addEventListener('contextmenu', (e) => e.stopImmediatePropagation(), true);
	}

	static removeStyles() {
		const elements = document.querySelectorAll('*')
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