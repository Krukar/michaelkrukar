(function(){
	var portfolio = {
		harley:{
			"image": "harley.png",
			"title": "Harley Lichtenstein",
			"category": "Art",
			"info": ["<p>I could never draw, but I could always steal. If you steal enough things, throw them together and do some actual work then it's your own. They won't question that you stole it. As long as you do some actual work, that's the key.</p><p>Roy Fox Lichtenstein was an American pop artist. During the 1960s, along with Andy Warhol, Jasper Johns, and James Rosenquist among others, he became a leading figure in the new art movement.</p><p>Harley Quinn (Harleen Frances Quinzel) is a fictional character appearing in American comic books published by DC Comics, commonly as an adversary of the superhero Batman and commonly as the Joker's sidekick.</p>"],
			"status": "online",
			"tools": "Illustrator",
			"link": "img/harley.png"
		},
		makeful:{
			"image": "makeful.jpg",
			"title": "Makeful",
			"category": "Web",
			"info": ["<p>Makeful is a DIY community website launched by Blue Ant Media.</p><p>I worked with a back end developer to build the website from scratch. We went with Foundation and Angular since I was comfortable with them. For this project I incorporated Gulp and NPM, a first for the team.</p><p>Our one major requirement was that it be built in Wordpress, which possessed a set of challenges that we managed to overcome.</p>"],
			"status": "online",
			"tools": "HTML, CSS, Javascript, jQuery, Angular, Foundation, PHP, Wordpress, MySQL, Gulp, NPM",
			"link": "http://bemakeful.com/"
		},
		radio:{
			"image": "radio.png",
			"title": "Krukar Radio",
			"category": "Web",
			"info": ["<p>I listen to a lot of music. Occasionally I'll hear a song on the radio and write down what it's called. Then at work I'll open up YouTube and go through songs. Tragically after every song I have to go back to YouTube and find the next song. So I decided to build something to automate this inconvenience.</p><p>I also use this on my phone so I made it as lean as possible, it's all one page minified. I even wrote it all in vanilla Javascript just to keep it light.</p><p>This is version 2. There was a version 1 which was an ambitious web app but it never took off. It was originally called Krukar's Playlist but I pivoted to Krukar Radio.</p>"],
			"status": "online",
			"tools": "HTML, CSS, Javascript",
			"link": "http://radio.michaelkrukar.com"
		}
	};

	var pieces = Object.keys(portfolio);
	var key = pieces[Math.floor(Math.random() * pieces.length)];
	setMain(key);

// USE DATA ATTR
	document.querySelector('navItem').addEventListener('click', function(){
		console.log('foo')
	})

	document.getElementById('jsWebToggle').addEventListener('click', function(){
		document.body.classList.remove('showArt', 'showVideo', 'showPhoto');
		document.body.classList.toggle('showWeb');
	});

	document.getElementById('jsArtToggle').addEventListener('click', function(){
		document.body.classList.remove('showWeb', 'showVideo', 'showPhoto');
		document.body.classList.toggle('showArt');
	});

	document.getElementById('jsVideoToggle').addEventListener('click', function(){
		document.body.classList.remove('showWeb', 'showArt', 'showPhoto');
		document.body.classList.toggle('showVideo');
	});

	document.getElementById('jsPhotoToggle').addEventListener('click', function(){
		document.body.classList.remove('showWeb', 'showArt', 'showVideo');
		document.body.classList.toggle('showPhoto');
	});

	document.getElementById('jsRadio').addEventListener('click', function(){
		setMain('radio');
	});

	document.getElementById('jsHarley').addEventListener('click', function(){
		setMain('harley');
	});

	function setMain(key){
		var piece = portfolio[key];
		document.getElementById('jsImage').src = 'img/' + piece.image;
		document.getElementById('jsTitle').textContent = piece.title;
		document.getElementById('jsCategory').textContent = piece.category;
		document.getElementById('jsInfo').innerHTML = piece.info;
		document.getElementById('jsStatus').textContent = piece.status
		document.getElementById('jsTools').textContent = piece.tools;
		document.getElementById('jsLink').href = piece.link;
	};
})();