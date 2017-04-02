// forEach
// Write a function called listNames which takes in an array of songs and console.logs the name of each one.
// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".
// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.

function listNames(songs){
	songs.forEach(function(song){
		console.log(song.name);
	})
}

listNames(songs);

function listSongDetails(songs){
	songs.forEach(function(song){
		console.log(`${song.name}, by ${song.artist}`);
	})
}

listSongDetails(songs);

function summerJamCount(songs){
	return songs.reduce(function(acc,song){
		if ([6,7,8].includes(song.month)){
			acc++;
		}
		return acc;
	},0);
}

console.log(summerJamCount(songs));

// map
// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.
// Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.
// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)

function getDurations(songs){
	return songs.map(function(el){
		return el.duration;
	});
}

getDurations(songs);

function getDurationsInSeconds(songs){
	return songs.map(function(song){
		var durSec = song.duration[0] * 60 + Number(song.duration.slice(2));
		return durSec;
	});
}

getDurationsInSeconds(songs);

function getMainArtists(songs){
	return songs.map(function(song){
		var indexFeature = song.artist.indexOf(" featuring");
		if (indexFeature !== -1){
			return song.artist.slice(0,indexFeature);
		}
		else {
			return song.artist;
		}
	})
}

getMainArtists(songs);


// filter
// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.
// Write a function called getShortSongs which takes an array of songs and returns an array of songs which are shorter than 3 minutes.
// Write a function called getSongsByArtist which takes in an array of songs and the name of an artist and returns an array of songs by that artist.
// Write a function called getOneHitWonders which takes in an array of songs and returns an array of songs for artists who only appear once in the original array.

function getBigHits(songs){
	return songs.filter(function(song){
		return song.weeksAtNumberOne >= 10;
	});
}

getBigHits(songs);

function getShortSongs(songs){
	return songs.filter(function(song){
		return (["0", "1", "2"].indexOf(song.duration[0]) !== -1)
	});
}

getShortSongs(songs);

function getSongsByArtist(songs, artist){
	return songs.filter(function(el){
		return el.artist === artist;
	}).map(function(el){
		return el.name;
	});
}

console.log(getSongsByArtist(songs, "OMI"));

function getOneHitWonders(songs){
	var uniqueArtist = []
	var uniqueSongs = [];

	songs.forEach(function(song){
		if (!uniqueArtist.includes(song.artist)){
			uniqueArtist.push(song.artist);
			uniqueSongs.push(song);
		}
	});

	return uniqueSongs.map(function(song){
		return song.name;
	});
}

console.log(getOneHitWonders(songs));

// reduce
// Refactor summerJamCount to use reduce!
// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)
// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.
// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.

function getTotalDurationInSeconds(songs){
	var durationArr = getDurationsInSeconds(songs);
	return durationArr.reduce(function(acc, el){
		return acc + el;
	},0)
}

console.log(getTotalDurationInSeconds(songs));

function getSongCountByArtist(songs){
	return songs.reduce(function(acc, song){
		if (acc[song.artist] !== undefined){
			acc[song.artist]++;
		}
		else {
			acc[song.artist] = 1;
		}
		return acc;
	}, {});
}

console.log(getSongCountByArtist(songs));

function averageWeeksAtNumberOne(songs){
	return (songs.reduce(function(acc,song){
		return acc + song.weeksAtNumberOne;
	}, 0) / songs.length);
}

console.log(averageWeeksAtNumberOne(songs));
