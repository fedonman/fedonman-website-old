const init = () => {
    const container = document.getElementById('date');
	const today = moment();
	let lastAugust = '01/08/';
	today.month() <= 6 ? lastAugust += today.year() - 1 : lastAugust += today.year();
	const august = moment(lastAugust, 'DD/MM/YYYY');
	const diff = today.diff(august, "days") + 1;
    container.innerHTML = `Today is the ${diff}<sup>th</sup> of August!`;
    
    const mainElement = document.getElementById("content");
    mainElement.classList.add("fade-in");
};

window.onload = init;