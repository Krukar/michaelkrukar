document.getElementById('jsMainToggle').addEventListener('click', function(){
	document.getElementById('jsMain').classList.toggle('open');
});

document.getElementById('jsWebToggle').addEventListener('click', function(){
	var hide = document.querySelectorAll('.harley, .kaleb, .krukar, .liquid, .wd40, .barry, .meundies');
	for(item of hide){
		item.classList.toggle('hide');
	}
});

document.getElementById('jsArtToggle').addEventListener('click', function(){
	var hide = document.querySelectorAll('.makeful, .media, .netflix, .radio, .schedulizer, .trace, .uber, .liquid, .wd40, .barry, .meundies');
	for(item of hide){
		item.classList.toggle('hide');
	}
});

document.getElementById('jsVideoToggle').addEventListener('click', function(){
	var hide = document.querySelectorAll('.makeful, .media, .netflix, .radio, .schedulizer, .trace, .uber, .harley, .kaleb, .krukar, .barry, .meundies');
	for(item of hide){
		item.classList.toggle('hide');
	}
});

document.getElementById('jsPhotoToggle').addEventListener('click', function(){
	var hide = document.querySelectorAll('.makeful, .media, .netflix, .radio, .schedulizer, .trace, .uber, .harley, .kaleb, .krukar, .liquid, .wd40');
	for(item of hide){
		item.classList.toggle('hide');
	}
});