var moviename="End Game"
var movierating= 4.5
var movielang="English"


var movies = {
    name:"End Game",
    rating:4.5,
    lang:'English'
}

typeof(movies)
"object"
movies.name
"End Game"
movies.rating
4.5
movies.genre="Action"
"Action"
movies
{name: "End Game", rating: 4.5, lang: "English", genre: "Action"}
delete movies.lang
true
movies
{name: "End Game", rating: 4.5, genre: "Action"}
movies.rating=4.8
4.8
movies['rating']
4.8

///////JSON//////
JavaScript Object notation
///////
var movies = [
    {
        name:"End Game",
        rating:4.5,
        lang:'English'
    },
    {
        name:"Death Race",
        rating:3.5,
        lang:'English'
    },
    {
        name:"Madmax",
        rating:4.4,
        lang:'English'
    }
]

movies[2].name
"Madmax"