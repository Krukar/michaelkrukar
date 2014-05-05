// Baby's first Js

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12435905-2', 'michaelkrukar.com');
ga('send', 'pageview');

// Create video variables
var playerDemoReel, playerLiquidRising, playerWD40, playerJulyTalk, playerDota1000;

// When YT API is ready will create videos
function onYouTubeIframeAPIReady() {
	playerDemoReel = new YT.Player('playerDemoReel', {
		videoId: 'ig_GsGkzTbI',
		playerVars: { 'rel': 0, 'showinfo': 0, 'fs': 0 },
	});
	playerLiquidRising = new YT.Player('playerLiquidRising', {
		videoId: '_R2Ep6L5gIA',
		playerVars: { 'rel': 0, 'showinfo': 0, 'fs': 0 },
	});
	playerWD40 = new YT.Player('playerWD40', {
		videoId: 'r6VDYO5MSDQ',
		playerVars: { 'rel': 0, 'showinfo': 0, 'fs': 0 },
	});
	playerJulyTalk = new YT.Player('playerJulyTalk', {
		videoId: '5KT8owLfcsU',
		playerVars: { 'rel': 0, 'showinfo': 0, 'fs': 0 },
	});
	playerDota1000 = new YT.Player('playerDota1000', {
		videoId: 'mahHF8dIeVg',
		playerVars: { 'rel': 0, 'showinfo': 0, 'fs': 0 },
	});
}


// Document Ready
$(function() {

	// Panel Snap init
	$('body').panelSnap({
		onSnapFinish: function($target) {
			// Pause video when the page scrolls aways and hide it
			playerDemoReel.pauseVideo();
			$('#playerDemoReel').hide();
			playerLiquidRising.pauseVideo();
			$('#playerLiquidRising').hide();
			playerWD40.pauseVideo();
			$('#playerWD40').hide();
			playerJulyTalk.pauseVideo();
			$('#playerJulyTalk').hide();
			playerDota1000.pauseVideo();
			$('#playerDota1000').hide();
		}
	});

	// Start video on button press
	$("#play-demo-reel").click(function () {
		playerDemoReel.playVideo();
		$('#playerDemoReel').show();
	});
	$("#play-liquid-rising").click(function () {
		playerLiquidRising.playVideo();
		$('#playerLiquidRising').show();
	});
	$("#play-wd40").click(function () {
		playerWD40.playVideo();
		$('#playerWD40').show();
	});
	$("#play-july-talk").click(function () {
		playerJulyTalk.playVideo();
		$('#playerJulyTalk').show();
	});
	$("#play-dota-1000").click(function () {
		playerDota1000.playVideo();
		$('#playerDota1000').show();
	});

});

