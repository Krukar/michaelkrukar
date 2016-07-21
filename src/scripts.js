var grid = document.getElementById('grid');

document.getElementById('jsWebToggle').addEventListener('click', function(){
	grid.classList.toggle('filter');
	var hide = document.querySelectorAll('.harley, .kaleb, .krukar, .liquid, .wd40, .barry, .meundies');
	for(item of hide){
		item.classList.toggle('hide');
	}
});

document.getElementById('jsArtToggle').addEventListener('click', function(){
	grid.classList.toggle('filter');
	var hide = document.querySelectorAll('.makeful, .media, .netflix, .radio, .schedulizer, .trace, .uber, .liquid, .wd40, .barry, .meundies');
	for(item of hide){
		item.classList.toggle('hide');
	}
});

document.getElementById('jsVideoToggle').addEventListener('click', function(){
	grid.classList.toggle('filter');
	var hide = document.querySelectorAll('.makeful, .media, .netflix, .radio, .schedulizer, .trace, .uber, .harley, .kaleb, .krukar, .barry, .meundies');
	for(item of hide){
		item.classList.toggle('hide');
	}
});

document.getElementById('jsPhotoToggle').addEventListener('click', function(){
	grid.classList.toggle('filter');
	var hide = document.querySelectorAll('.makeful, .media, .netflix, .radio, .schedulizer, .trace, .uber, .harley, .kaleb, .krukar, .liquid, .wd40');
	for(item of hide){
		item.classList.toggle('hide');
	}
});