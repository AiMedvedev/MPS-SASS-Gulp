const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
	let textArea = item.offsetHeight;

	item.addEventListener('input', (e) => {
		let $this = e.target;

		$this.style.height = textArea + 'px';
		$this.style.height = $this.scrollHeight + 'px';
	})
});