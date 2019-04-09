require("dotenv").config();

var axios = require("axios");
var Spotify = require('node-spotify-api')
var keys = require("./keys.js");
var fs = require('fs');
var moment = require("moment")
var userCommand = process.argv[2];
var secondCommand = process.argv.slice(3).join(" ");

var spotify = new Spotify(keys);


//Using spotify api to get the name of song
function spotifyThis(secondCommand){
    spotify.search({
        type: "track",
        query: secondCommand,
        limit: 5
      
    })
    .then(function(data,err){
        if(err){
            console.log("error : " + err);
        }
        var songs = data.tracks.items;
        // console.log(songs);
        for ( var i = 0; i < songs.length; i++){
            
            console.log("-----------------------------------")
            console.log( "Artist: " + songs[i].artists[0].name);
            console.log("Song Name: " + songs[i].name);
            console.log("Priview link: " + songs[i].preview_url)
            console.log("Song album: " + songs[i].album.name)
            console.log("-----------------------------------")
        }
    
    })


}

function findBands(){

var artist = secondCommand;

axios
    .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function(response){
        for(var i = 0; i < response.data.length; i ++){
            var venue = response.data[i].venue.name;
            var location = (response.data[i].venue.city + ", " + response.data[i].venue.region) ;
            var name = (response.data[i].lineup)
            var date = (response.data[i].datetime)
            
            console.log("------------------------")
            console.log(name);
            console.log(venue);
            console.log(location);
            console.log(moment(date).format('MM/DD/YYYY'))
            console.log("------------------------")
        }
        
        
        
    })
    .catch(function(error){
        console.log(error.message);
    })
}


function getMovie(){

var movie = secondCommand;

axios
    .get("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
    .then(function(response){
        

        
        console.log("-----------------------------")
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("Rated: " + response.data.Rated);
        console.log("Rotten Tomatoes Rating:" + response.data.Ratings[2].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("-----------------------------")
 
    })

}

function whatISay(){
    fs.readFile('random.txt', 'utf8', function(err,data){
        if(!err);
        var cmd = data.toString().split(",")
        spotifyThis(cmd[1]);
    })


}





function choices(userCommand){
    switch(userCommand){
        case "spotify-this-song":
            spotifyThis(secondCommand);
            break;
        
        case "concert-this":
            findBands();
            break;
    
        case "movie-this":
            getMovie();
            break;
        
        case "do-what-it-says":
            whatISay();
            break;
    }
   
}   

choices(userCommand);