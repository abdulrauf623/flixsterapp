const myAPIKey = `5e2be8664fc1cc45634f5797dc4cdf56`

const APILink = `https://api.themoviedb.org/3/movie/now_playing?api_key=`


const word = ""




const generateError = (event) => {
    document.lastChild.innerHTML += `
        <span style="color: red;">${event} not found</span>
    `;
}


function displayResults(responseData) {

    responseData.results.forEach(data => {

        console.log("something: ")

        let title = data.title

        let poster = data.poster_path
        
        let rating = data.vote_average



        let path = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/` + poster

        
        document.getElementById("moviespace").innerHTML += 

        `
        
        <div  class = "photos"> <img src = "${path}" width = "300"> 
        
        <div id = "rating">

        <div style = "color: white"> ${rating} &#x2B50 </div>
        

        
        </div>

        <div id = "title" style = "color: white"> ${title} </div>
        
        
        
        </div>

        
        
        `

    }
    )




}


async function getResults() {

    document.getElementById("moviespace").innerHTML = ""

    const apiURL = APILink + myAPIKey

    console.log("api url", apiURL)


    try {


        let response = await fetch(apiURL)


        console.log("Response: " , response)


        let responseData = await response.json()


        console.log("Response Data: " , responseData)


        displayResults(responseData)


    }
    

    catch (error){


        console.log(error)
    }



}


window.onload = function(){


    getResults()

}