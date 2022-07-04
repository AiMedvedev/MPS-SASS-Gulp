const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
const body = document.body;

const showSidebar = () => {
	let mask = document.createElement('div');

	mask.classList.add('page__mask');
	mask.addEventListener('click', closeSidebar);
	page.appendChild(mask);
	body.classList.add('show-sidebar');
}

const closeSidebar = () => {
	body.classList.remove('show-sidebar');
	document.querySelector('.page__mask').remove();
}

burger.addEventListener('click', (e) => {
	if (body.classList.contains('show-sidebar')) {
		closeSidebar();
	} else {
		showSidebar();
	}
});
