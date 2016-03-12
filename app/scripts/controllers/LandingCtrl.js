(function(){
	function LandingCtrl(){
		this.heroTitle = "Turn up for Angular?";
	}
	angular
		.module('blocJams')
		.controller('LandingCtrl', LandingCtrl);
})();