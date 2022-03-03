let DontTouchMySelection = class {
	static removeEvents(target) {
		target.onselectstart = null;
		target.onmouseup = null;
		target.onmousedown = null;
		target.oncopy = null;
		target.oncontextmenu = null;

		target.addEventListener('selectstart', (e) => e.stopImmediatePropagation(), true);
		target.addEventListener('mouseup', (e) => e.stopImmediatePropagation(), true);
		target.addEventListener('mousedown', (e) => e.stopImmediatePropagation(), true);
		target.addEventListener('copy', (e) => e.stopImmediatePropagation(), true);
		target.addEventListener('contextmenu', (e) => e.stopImmediatePropagation(), true);
	}

	static removeStyles() {
		for(let i=0; i<document.all.length; i++) {
			if (typeof document.all[i].style !== 'undefined')
				document.all[i].style.setProperty('user-select', 'auto', 'important');
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