function render(arr){
    document.querySelector(".row").innerHTML=""
    arr.forEach(obj =>{
        document.querySelector(".row").innerHTML+=`
        <div class="card col-12 col-sm-6 col-md-4" style="max-width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${obj.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${obj.Year}</h6>
            <p class="card-text">Genre: ${obj.Genre}</p>
            <p class="card-text">Director: ${obj.Director}</p>
            <p class="card-text">Country: ${obj.Country}</p>
            <p class="card-text">Awards: ${obj.Awards}</p>
            <p class="card-text">imdbRating: ${obj.imdbRating}</p>
        </div></div>
        `
    })
}
render(films)

