window.onload = () => {
	const container = document.getElementById('date');
	const today = moment();
	let lastAugust = '01/08/';
	today.month() <= 6 ? lastAugust += today.year() - 1 : lastAugust += today.year();
	const august = moment(lastAugust, 'DD/MM/YYYY');
	const diff = today.diff(august, "days") + 1;
	container.innerHTML = `Σήμερα είναι ${diff} Αυγούστου!`;
}