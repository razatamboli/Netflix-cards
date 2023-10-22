
const cl = console.log;

const cardbyjavascript = document.getElementById("cardbyjavascript");

let movieArr = [
    {
	  title: "Iron man 3",
      poster_path: "https://cdn.wallpapersafari.com/88/25/F8Axm1.jpg",
	  vote_count: 8
      
	},
	{
	  title: "The Morbius",
      poster_path: "https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022-thumbnail.jpg",
	  vote_count: 5
      
	},
	{
	  title: "THOR",
      poster_path: "https://w0.peakpx.com/wallpaper/902/32/HD-wallpaper-heimdall-thor-comics-holi-hollywood-idris-elba-marvel-marvel-cinematic-universe-marvel-comics-marvel-movies-movie-movie-poster-orange-poster-thor-ragnarok.jpg",
	  vote_count: 7
      
	},
	{
	  title: "Gamer",
      poster_path: "https://e0.pxfuel.com/wallpapers/351/606/desktop-wallpaper-hollywood-movies-action-movie-thumbnail.jpg",
	  vote_count: 3
      
	},
	{
	  title: "The SpiderMan",
      poster_path: "https://e1.pxfuel.com/desktop-wallpaper/357/105/desktop-wallpaper-hollywood-movie-backgrounds-hollywood-movie-poster-thumbnail.jpg",
	  vote_count: 8
      
	},
	{
	  title: "Avatar",
      poster_path: "https://e1.pxfuel.com/desktop-wallpaper/528/531/desktop-wallpaper-1-pc-hollywood-movies-hollywood-movie-poster-thumbnail.jpg",
	  vote_count: 6
      
	}
      ]

let result = ``;

for (let i = 0; i < movieArr.length; i++){
result = result + `<div class="col-4">
				     <div class="card">
					     <figure class="movie-card">   
				             <img src="${movieArr[i].poster_path}">
				             <figcaption>   
								 <div class="container"> 
								     <div class="row">
						                 <div class="col-10">
						                     <div class="title p-4">${movieArr[i].title}</div>
							             </div>
							             <div class="col-2">
							                 <div class="title p-4">${movieArr[i].vote_count}</div>
							              </div>
						             </div>									 
					                 <div class="overview">
					                     <h3 class="info">This Movie premiered in Sydney on April 14, 2008, and was released in the United States on May 2, being the first film in Phase One of the MCU.
						             It grossed over $585 million, becoming the eighth-highest grossing film of 2008.</h3>
					                 </div>
								 </div>
						     </figcaption>
					     </figure>		 	 
				     </div>
				 </div>`
}

cardbyjavascript.innerHTML = result;