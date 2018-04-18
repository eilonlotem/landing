$(document).ready(function(){
    $("#send").click(function(){
        $.ajax("http://insurance.ibitcoin.co.il/register/", {
            first_name: $("#first_name").value,
        },
        function(data, status){
           $("button").value = "done"; 
        });
    });
});
