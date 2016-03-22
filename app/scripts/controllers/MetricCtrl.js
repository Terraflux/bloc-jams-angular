(function(){
	function MetricCtrl(Metric){
		this.songPlays = Metric.listSongsPlayed;
	}

	angular
		.module('blocJams')
		.controller('MetricCtrl', ['Metric', MetricCtrl])
})();