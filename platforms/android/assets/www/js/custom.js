var apiUrl="http://whatsbeef.net";
var movieList=apiUrl+"/wabz/guide.php?start=";
//var movieList="https://ap1.nexchange.com";


document.addEventListener("deviceReady", deviceReady, false);
function deviceReady() {
    alert(movieList);
	//$.support.cors=true;
//	$(document).ready(function(){
//            alert("result");
	fillMovieList(0);
//	});
}

var $movieListHolder=$("#movieListHolder");

function fillMovieList(startIndex){
        $.ajax({url: movieList+startIndex, success: function(result){
        	var movies=result.results;
			for (index = 0; index < movies.length; ++index) {
				var movie=movies[index];
				$movieListHolder.append(createMovieRow(movie).prepend((index+startIndex)+":"));
			}
			var nextStartIndex=startIndex+movies.length;
			if(nextStartIndex<result.count){
			fillMovieList(startIndex+movies.length);
			}else{
				alert("end");
			}
        }});
}


function createMovieRow(movie){
	return $("<div></div>").html(movie.name);
}

