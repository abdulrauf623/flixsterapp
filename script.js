const myAPIKey = `5e2be8664fc1cc45634f5797dc4cdf56`

const APILink = `https://api.themoviedb.org/3/movie/now_playing?api_key=`

const APIsearch = `https://api.themoviedb.org/3/search/movie?api_key=`

const search = `&query=`


const word = ""

var here = ""

var searched = false


var start = 0

var limit = 10










const generateError = (event) => {
    document.lastChild.innerHTML += `
        <span style="color: red;">${event} not found</span>
    `;
}


function displayResults(responseData) {

    const responses = responseData.results.slice(start, start + limit)

    responses.forEach(data => {


        console.log("something: ")

        let title = data.title

        let poster = data.poster_path
        
        let rating = data.vote_average



        let path = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/` + poster

        
        document.getElementById("movie-grid").innerHTML += 

        `
        
        <div  class = "movie-card"> <img class = "movie-poster" src = "${path}" width = "300"> 
        
        <div id = "rating">

        <div class = "movie-votes" style = "color: white"> ${rating} &#x2B50 </div>
        

        
        </div>

        <div class = "movie-title" style = "color: white"> ${title} </div>
        
        
        
        </div>

        
        
        `

    }
    )




}


function loadMore(){

    start = start + 1 + limit


    if (searched == true){

        fetchresults(here)

    }


    else {

    getResults(document.getElementById("movie-grid").innerHTML)


    }





}


 function getResults(string) {



    document.getElementById("movie-grid").innerHTML = string

    document.getElementById("nowplaying").innerText = `Now Playing`

    const apiURL = APILink + myAPIKey

    console.log("api url", apiURL)


    fetchresults(apiURL)



}

 
function nothing(){


document.querySelector("#form").addEventListener("submit", (event)  => {



    event.preventDefault()

    searched = true

    document.getElementById("movie-grid").innerHTML= ""

    document.getElementById("nowplaying").innerText = `Search Results`

    document.getElementById("close-button").removeAttribute("hidden")

    const apiURL = APIsearch + myAPIKey + search + event.target.searchterm.value

    here = apiURL


    console.log("Searched word: ", event.target.searchterm.value)


    console.log("URL search", apiURL)



    if (event.target.searchterm.value.length > 1){


        start = 0


        fetchresults(apiURL)
    }

    else{
        
        
        start = 0

        searched = false
        

        getResults("")
    }



    

    




}
)



}



async function fetchresults(apiURL){

    try{


        let response = await fetch(apiURL)

        console.log("Response: ", response)


        let responseData = await response.json()

        console.log("Response Data", responseData)


        displayResults(responseData)
    }

    catch(error){

        console.log(error)
    }



}


function smart(){

    start = 0

    searched = false

getResults("")

document.getElementById("close-button").setAttribute("hidden", true)




}


window.onload = function(){

getResults("")
    

    nothing()

}