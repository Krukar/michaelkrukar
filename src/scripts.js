(function(){	
	// Portfolio
	var portfolio = {
		barry:{
			image: "barry.jpg",
			title: "",
			category: "",
			info: [""],
			status: "",
			tools: "",
			link: "img/barry.jpg"
		},
		harley:{
			image: "harley.png",
			title: "Harley Lichtenstein",
			category: "Art",
			info: ["<p>I could never draw, but I could always steal. If you steal enough things, throw them together and do some actual work then it's your own. They won't question that you stole it. As longstatusyou do some actual work, that's the key.</p><p>Roy Fox Lichtenstein was an American pop artist. During the 1960s, along with Andy Warhol, Jasper Johns, and James Rosenquist amontoolsothers, he became a leading figure in the new art movement.</p><p>Harley Quinn (Harleen Frances Quinzel) is a fictional character appearing in American comic books published by DC Comics,linkas an adversary of the superhero Batman and commonly as the Joker's sidekick.</p>"],
			status: "online",
			tools: "Illustrator",
			link: "img/harley.png"
		},
		kaleb:{
			image: "kaleb.png",
			title: "",
			category: "",
			info: [""],
			status: "",
			tools: "",
			link: "img/kaleb.png"
		},
		krukar:{
			image: "krukar.png",
			title: "",
			category: "",
			info: [""],
			status: "",
			tools: "",
			link: "img/krukar.png"
		},
		liquid:{
			image: "liquid.jpg",
			title: "",
			category: "",
			info: [""],
			status: "",
			tools: "",
			link: "img/liquid.jpg"
		},
		makeful:{
			image: "makeful.jpg",
			title: "Makeful",
			category: "Web",
			info: ["<p>Makeful is a DIY community website launched by Blue Ant Media.</p><p>I worked with a back end developer to build the website from scratch. We went with Foundation and Angular since Istatuscomfortable with them. For this project I incorporated Gulp and NPM, a first for the team.</p><p>Our one major requirement was that it be built in Wordpress, which possessed a set otoolschallenges that we managed to overcome.</p>"],
			link: "online",
			tools: "HTML, CSS, Javascript, jQuery, Angular, Foundation, PHP, Wordpress, MySQL, Gulp, NPM",
			link: "http://bemakeful.com/"
		},
		media:{
			image: "media.png",
			title: "",
			category: "",
			info: [""],
			status: "",
			tools: "",
			link: "img/media.png"
		},
		meundies:{
			image: "meundies.jpg",
			title: "",
			category: "",
			info: [""],
			status: "",
			tools: "",
			link: "img/meundies.jpg"
		},
		netflix:{
			image: "netflix.png",
			title: "",
			category: "",
			info: [""],
			status: "",
			tools: "",
			link: "img/netflix.png"
		},
		radio:{
			image: "radio.png",
			title: "Krukar Radio",
			category: "Web",
			info: ["<p>I listen to a lot of music. Occasionally I'll hear a song on the radio and write down what it's called. Then at work I'll open up YouTube and go through songs. Tragically after every songstatushave to go back to YouTube and find the next song. So I decided to build something to automate this inconvenience.</p><p>I also use this on my phone so I made it as lean as possibltools it's all one page minified. I even wrote it all in vanilla Javascript just to keep it light.</p><p>This is version 2. There was a version 1 which was an ambitious web app but it never took off.linkwas originally called Krukar's Playlist but I pivoted to Krukar Radio.</p>"],
			status: "online",
			tools: "HTML, CSS, Javascript",
			link: "http://radio.michaelkrukar.com"
		},
		schedulizer:{
			image: "schedulizer.png",
			title: "",
			category: "",
			info: [""],
			status: "Online",
			tools: "",
			link: ""
		},
		trace:{
			image: "trace.png",
			title: "",
			category: "",
			info: [""],
			status: "",
			tools: "",
			link: "img/trace.png"
		},
		uber:{
			image: "uber.png",
			title: "",
			category: "",
			info: [""],
			status: "",
			tools: "",
			link: "img/uber.png"
		},
		wd40:{
			image: "wd40.png",
			title: "",
			category: "",
			info: [""],
			status: "",
			tools: "",
			link: "img/wd40.png"
		},
	};

	// Add event handlers for every piece
	var keys = document.querySelectorAll('.barry, .harley, .kaleb, .krukar, .liquid, .makeful, .media, .meundies, .netflix, .radio, .schedulizer, .trace, .uber, .wd40');
	for(var i = 0; i < keys.length; i++){
		keys[i].addEventListener('click', function(){
			switchKey(this.dataset.key);
		});
	}

	// Toggle mobile menu
	document.getElementById('jsHeaderToggle').addEventListener('click', function(){
		document.getElementById('jsHeader').classList.toggle('open');
	})

	// Set a piece to be shown
	function setKey(key){
		var piece = portfolio[key];
		document.getElementById('jsImage').src = 'img/' + piece.image;
		document.getElementById('jsTitle').textContent = piece.title;
		document.getElementById('jsCategory').textContent = piece.category;
		document.getElementById('jsInfo').innerHTML = piece.info;
		document.getElementById('jsStatus').textContent = piece.status
		document.getElementById('jsTools').textContent = piece.tools;
		document.getElementById('jsLink').href = piece.link;
		document.querySelector('.main').classList.remove('hide');
	}

	// Toggle what piece is shown
	function switchKey(key){
		document.body.classList.add('fadeOut');
		setTimeout(function(){ 
			window.scrollTo(0, 0);
			setKey(key);
			window.location.hash = key;
			document.body.classList.remove('fadeOut');
		}, 1000);
	}

	// If someone links to a piece
	if(window.location.hash){
		setKey(window.location.hash.substring(1));
	}

})();