# liri-node-app

LIRI is like the iphones SIRI, but insead of using speech you must use a command to find information for relative data. LIRI is a command line node application that takes in a command and users type a subject to search. 

Comands are :
1.  "spotify-this-song"
2.  "movie-this"
3.  "concert-this"
4.  "do-what-it-says"

## Preview
![](/Gifs/liriapp.gif)

## Usage
All commands must be ran in the terminal. 

`spotify-this-song`: This command will use spotifys API to look for a song title and give you  information on that song. This is set to the a limit of 5 songs, but that can be changed in the "spotifyThis" function. 
Ex: `node liri.js spotify-this-song song`
Output: 
```
* Artist : name of artist
* Song Name:  name of song
* Preview link: 30 second preview of song (if avaliable)
* Song album: name of album `
```
`movie-this`: This command will use OMDB data base to search a movie and give you  information on that movie. The movie must be a valid movie or there will errors. 

Ex: `node liri.js movie-this movie`
Output: 
```
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
```

`concert-this`: This will give you data on all concerts an artist is having using the Bands in Town API. 
Ex: `node liri.js concert-this artist`
Output:
```
*Artist
*Name of venue
*Venue location 
*Date of the Event
```

`do-what-it-says`: This command will read from the `random.txt` file a command inside that file. This command does not need any user input opposed to the initiation of the command. The default command is `spotify-this-song 'I Want It That Way`
Ex. `node liri.js do-what-it-says`

Output:
```
-----------------------------------
*Artist: Backstreet Boys
*Song Name: I Want It That Way
*Priview link: https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=5fae9ec27df24a96880e54fb33260502
*Song album: The Hits--Chapter One
-----------------------------------
```
## Technologies Utilized

*   NodeJs
*   JavaScript
*   Spotify API
*   OMDB API
*   Bands In Town API
*   Moments.js
*   Axios
*   DotEnv

## Author
*   Calvin Fronda
