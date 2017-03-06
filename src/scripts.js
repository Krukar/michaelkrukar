(function(){
	// Portfolio
	var portfolio = {
		barry:{
			image: "barry.jpg",
			title: "Barry",
			category: "Photography",
			info: "<p>To commemorate my cosplay I took this photo. I've always wanted to dress up for Fan Expo and in 2015 I did, I went as Barry Dylan from Archer.</p><p>The costume is just a classic red track suit, dyed blonde hair and a tiny amount of makeup to look more cartoony. A few people recognized me, some thought I was the Six Million Dollar man.</p><p>Photo inspired by George Costanza.</p>",
			status: "Online",
			tools: "Canon EOS 60D, Canon EF24-70mm f/2.8L USM, Canon Speedlite 430EX II, Adobe Lightroom"
		},
		harley:{
			image: "harley.png",
			title: "Harley Lichtenstein",
			category: "Art",
			info: "<p>I could never draw, but I could always steal. If you steal enough things, throw them together and do some actual work then it's your own. They won't question that you stole it. As long as you do some actual work, that's the key.</p><p>Roy Fox Lichtenstein was an American pop artist. During the 1960s, along with Andy Warhol, Jasper Johns, and James Rosenquist among others, he became a leading figure in the new art movement.</p><p>Harley Quinn (Harleen Frances Quinzel) is a fictional character appearing in American comic books published by DC Comics, commonly as an adversary of the superhero Batman and commonly as the Joker's sidekick.</p>",
			status: "Online",
			tools: "Adobe Illustrator"
		},
		kaleb:{
			image: "kaleb.png",
			title: "Kaleb",
			category: "Art",
			info: "<p>For my friend's wedding I wanted to get him a unique gift. I also wanted to pad my portfolio. We're both big fans of Archer so I decided to draw his newborn son Archer style.</p>",
			status: "Online",
			tools: "Adobe Illustrator"
		},
		krukar:{
			image: "krukar.png",
			title: "Adventure Time Krukar",
			category: "Art",
			info: "<p>Adventure Time is one of my favorite cartoons. One day I found a series of Adventure Time comics that had really nice profile drawings of the main cast. So I drew myself in that style.</p><p>I ended up printing this out at 24x36 inches and hanging it on my wall. Every year on my birthday I have my friends sign the background.</p>",
			status: "Online",
			tools: "Adobe Illustrator"
		},
		liquid:{
			image: "liquid.jpg",
			title: "Liquid Rising",
			category: "Video",
			info: "<p>Liquid Rising is a documentary I released in 2012. I was hired by <a href='http://www.teamliquid.net/' target='_blank'>Team Liquid</a> to follow their Starcraft 2 team to various events. I ended up going to IPL 4 in Atlantic City, Team Liquid HQ in New York, MLG Orlando, Blizzcon in Anaheim, GSL in Seoul, South Korea and Las Vegas.</p><p>The documentary was released with a pay what you want model and earned a profit. Anyone that paid past a certain amount earned a free poster.</p><p>All footage was shot by me on a Canon DSLR and edited in Adobe Premiere Pro. Audio was edited by me in Pro Tools. The animations were drawn by a TL fan and out sourced to an After Effects editor.</p>",
			status: "Online",
			tools: "Canon EOS 60D, various Canon lenses, Adobe Premiere Pro, Adobe After Effects, Pro Tools 10",
			link: "https://www.youtube.com/watch?v=_R2Ep6L5gIA"
		},
		makeful:{
			image: "makeful.jpg",
			title: "Makeful",
			category: "Web",
			info: "<p>Makeful is a DIY community website launched by Blue Ant Media.</p><p>This is the second verison of Makeful that I worked on. The original build was done using Wordpress, Angular and Foundation. The current version uses Laravel to handle the backend while the JS was done entirely with jQuery.</p><p>A third iteration is likely.</p>",
			status: "Online",
			tools: "HTML, CSS, Javascript, jQuery, Angular, Foundation, PHP, Wordpress, MySQL, Gulp, NPM, Laravel, Homestead",
			link: "http://bemakeful.com/"
		},
		media:{
			image: "media.png",
			title: "Media Visualizer",
			category: "Web",
			info: "<p>I'm fascinated with visualizing data. I've been collecting data on all the media I consume since 2013. This includes when I finished reading a book, when I watched a movie and when I completed a video game.</p><p>By visualizing data you begin to see new patterns. What does this visualization reveal about me?</p>",
			status: "WIP",
			tools: "HTML, CSS, Javascript, Gulp, NPM",
			link: "http://media.michaelkrukar.com/"
		},
		meundies:{
			image: "meundies.jpg",
			title: "Meundies",
			category: "Photography",
			info: "<p>Underwear hanging on a clothes line, so quaint.</p><p>Every month <a href='https://www.meundies.com/' target='_blank'>Meundies</a> releases a pair of underwear with a brand new design. I hung them up in chronological order and had a fun photoshoot.</p><p>Meundies reached out to me, asking if they can use it in their advertising. Now I can claim I'm a professional commercial photographer.</p>",
			status: "Online",
			tools: "Canon EOS 60D, Canon EF24-70mm f/2.8L USM, Adobe Lightroom"
		},
		netflix:{
			image: "netflix.png",
			title: "Netflix Visualizer",
			category: "Web",
			info: "<p>When I showed someone my <a href='http://media.michaelkrukar.com/' target='_blank'>Media Visualizer</a> they said it should visualize Netflix data. So I went home and branched out the original build in to a Netflix version.</p><p>Netflix does not have a public API so the only way to access your activity list is to manually copy and paste it. Not ideal but the only option. For now...</p>",
			status: "WIP",
			tools: "HTML, CSS, Javascript, Gulp, NPM",
			link: "http://netflix.michaelkrukar.com/"
		},
		radio:{
			image: "radio.png",
			title: "Krukar Radio",
			category: "Web",
			info: "<p>I listen to a lot of music. Occasionally I'll hear a song on the radio and write down what it's called, then at work I'll open up YouTube and listen to them. Tragically after every song I have to go back to YouTube and find the next song. So I decided to build something to automate this inconvenience.</p><p>I also use this on my phone so I made it as lean as possible, it's all one page minified. To push it even further it's written entirely in vanilla JS.</p><p>This is version 2. There was a version 1 which was an ambitious web app but it never took off. It was originally called Krukar's Playlist but I pivoted to Krukar Radio.</p>",
			status: "Online",
			tools: "HTML, CSS, Javascript",
			link: "http://radio.michaelkrukar.com"
		},
		schedulizer:{
			image: "schedulizer.png",
			title: "BAM Schedulizer",
			category: "Web",
			info: "<p>At Blue Ant Media we work with tv schedules, which are generated in a very convoluted and error prone way. To ease this process I built an internal tool to automate the entire process.</p><p>An editor uploads a raw file that is exported out of Broadview. This file then gets processed in NodeJS, generated JSON goes to Amazon S3 and generated XML files go to specific servers.</p><p>It's only accessible by employees at work, but the code and ideas behind it are worth mentioning here. It's also my frist NodeJS app AND first internal tool, so I'm proud.</p>",
			status: "Online - Internal Use Only",
			tools: "HTML, CSS, Javascript, jQuery, Angular, Bourbon, NodeJS, Koa, PHP, Wordpress, MySQL, Amazon AWS, Amazon S3, Gulp, NPM"
		},
		tide:{
			image: "tide.jpg",
			title: "Turn of the Tide",
			category: "Video",
			info: "<p>Video experience of a classic Dota 2 moment, Navi vs IG at The International 2.</p><p>Recorded at 1,000 FPS in game. Song used in the video is M83 - Lower Your Eyelids To Die With The Sun.</p>",
			status: "Online",
			tools: "Source Film Maker, Dota 2, Adobe Premiere Pro",
			link: "https://www.youtube.com/watch?v=mahHF8dIeVg"
		},
		trace:{
			image: "trace.png",
			title: "TRaCE Track Report Connect Exchange",
			category: "Web",
			info: "<p>Wordpress site built for McGill University. I was contracted by <a href='http://www.goodlookinkids.com/' target='_blank'>Good Looking Kids</a> to handle development and deployment.</p><p>TRaCE is a one-year pilot project which aims to track what PhDs are doing, report that information to universities and the public, connect PhDs inside and outside the university and foster exchanges of knowledge among one another.</p>",
			status: "Online",
			tools: "HTML, CSS, Javascript, jQuery, Angular, Foundation, PHP, Wordpress, MySQL, Gulp, NPM",
			link: "http://iplaitrace.com/"
		},
		wd40:{
			image: "wd40.png",
			title: "WD40 TV Spot",
			category: "Video",
			info: "<p>Through some connections at Corus I was hired to direct a 30 second TV spot for WD40.</p><p>The entire project went from brainstorming to completion in 2 weeks. I worked with a designer on the graphical elements and we hired a radio announcer to do the read.</p><p>Aired on Discovery Channel Canada in May 2013.</p>",
			status: "Online",
			tools: "Adobe After Effects",
			link: "https://www.youtube.com/watch?v=r6VDYO5MSDQ"
		},
	};

	// Add event handlers for every piece
	var keys = document.querySelectorAll('.barry, .harley, .kaleb, .krukar, .liquid, .makeful, .media, .meundies, .netflix, .radio, .schedulizer, .trace, .tide, .wd40');
	for(var i = 0; i < keys.length; i++){
		keys[i].addEventListener('click', function(){
			switchKey(this.dataset.key);
			ga('send', 'event', 'portfolio', 'view', this.dataset.key);
		});
	}

	// Toggle mobile menu
	document.getElementById('jsHeaderToggle').addEventListener('click', function(){
		document.getElementById('jsHeader').classList.toggle('close');
	})

	// Toggle main
	document.getElementById('jsMainToggle').addEventListener('click', function(){
		if(!this.classList.contains('disabled')){
			switchKey();
		}
	})

	// Set a piece to be shown
	function setKey(key){
		// If they link to a piece that does not exist ignore it
		if(portfolio[key]){
			var piece = portfolio[key];
			document.getElementById('jsImage').src = 'img/' + piece.image;
			document.getElementById('jsTitle').textContent = piece.title;
			document.getElementById('jsCategory').textContent = piece.category;
			document.getElementById('jsInfo').innerHTML = piece.info;
			document.getElementById('jsStatus').textContent = piece.status
			document.getElementById('jsTools').textContent = piece.tools;
			if(piece.link){
				document.getElementById('jsLink').href = piece.link;
				document.getElementById('jsLink').classList.remove('hide');
			}
			else{
				document.getElementById('jsLink').classList.add('hide');
			}
			document.getElementById('jsMainToggle').classList.remove('disabled');
			document.getElementById('jsMain').classList.remove('hide');
		}
		else{
			document.getElementById('jsMainToggle').classList.add('disabled');
			document.getElementById('jsMain').classList.add('hide');
			window.history.replaceState(null, null, '/');
		}
	}

	// Toggle what piece is shown
	function switchKey(key){
		document.body.classList.add('fade');
		setTimeout(function(){
			setKey(key);
			window.scrollTo(0, 0);
			if(key){
				window.history.pushState(null, null, key);
			}
			else{
				window.history.pushState(null, null, '/');
			}
		}, 500);

		setTimeout(function(){
			document.body.classList.remove('fade');
		}, 1000);

	}
	// If someone links to a piece
	if(window.location.pathname !== '/'){
		ga('send', 'event', 'portfolio', 'link', window.location.pathname.substring(1));
		setKey(window.location.pathname.substring(1));
	}

	// If someone goes back
	window.onpopstate = function(event) {
		if(window.location.pathname !== '/'){
			setKey(window.location.pathname.substring(1));
		}
		else{
			document.getElementById('jsMain').classList.toggle('hide');
		}
	};
})();
