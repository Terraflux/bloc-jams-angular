(function() {
	function Metric($rootScope){
		$rootScope.songPlays = [];

		var Metric = {};

		Metric.registerSongPlay = function(songObj){
			songObj['playedAt'] = new Date();
			$rootScope.songPlays.push(songObj);
		};

		Metric.listSongsPlayed = function(){
			var songs = [];
			angular.forEach($rootScope.songPlays, function(song){
				songs.push(song.name);
			});
			return songs;
		};

		return Metric;
	};

	angular
		.module('blocJams')
		.service('Metric', ['$rootScope', Metric]);
})();