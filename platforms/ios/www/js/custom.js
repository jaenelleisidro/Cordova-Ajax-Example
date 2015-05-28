document.addEventListener("deviceReady", deviceReady, false);
function deviceReady() {
     alert("result");
	$.support.cors=true;
	$(document).ready(function(){
            alert("result");
        $.ajax({url: "https://ap1.nexchange.com", success: function(result){
            alert(result);
        }});
	});
}
