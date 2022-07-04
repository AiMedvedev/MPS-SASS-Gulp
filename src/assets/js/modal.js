const modalBtn = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');
const body = document.body;

const closeModal = (currentModal) => {
	let modalContent = currentModal.querySelector('.modal__content');

	modalContent.removeAttribute('style');

	setTimeout(() => {
		currentModal.classList.remove('show');
		body.classList.remove('no-scroll');
	}, 200);
}


modalBtn.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let $this = e.currentTarget;
		let modalId = $this.getAttribute('data-modal');
		let modal = document.getElementById(modalId);
		let modalContent = modal.querySelector('.modal__content');

		modalContent.addEventListener('click', event => {
			event.stopPropagation();
		})

		modal.classList.add('show');
		body.classList.add('no-scroll');

		setTimeout(() => {
			modalContent.style.transform = 'none';
			modalContent.style.opacity = 1;
		}, 1);
	});
});

modalClose.forEach(btn => {
	btn.addEventListener('click', (e) => {
	
		let currentModal = e.currentTarget.closest('.modal');

		closeModal(currentModal);
	});
});

modal.forEach(btn => {
	btn.addEventListener('click', (e) => {
		
		let currentModal = e.currentTarget;

		closeModal(currentModal);
	});
});

