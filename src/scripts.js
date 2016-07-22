var filter = function(cat){
	document.getElementById('grid').classList.add('filter');
	var hide = document.querySelectorAll('.show');
	for(item of hide){
		item.classList.remove('show');
	}
	var show = document.querySelectorAll(cat);
	for(item of show){
		item.classList.add('show');
	}
};

document.getElementById('jsWebToggle').addEventListener('click', function(){
	var cat = '.web';
	filter(cat);
});

document.getElementById('jsArtToggle').addEventListener('click', function(){
	var cat = '.art';
	filter(cat);
});

document.getElementById('jsVideoToggle').addEventListener('click', function(){
	var cat = '.video';
	filter(cat);
});

document.getElementById('jsPhotoToggle').addEventListener('click', function(){
	var cat = '.photo';
	filter(cat);
});