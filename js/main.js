$(document).ready(function(){
    $("#send").click(function(){
        $.post({
            dataType: "json",
            url: "http://insurance.ibitcoin.co.il/register/",
            data: JSON.stringify({
                first_name: $("#first_name")[0].value,
                last_name: $("#last_name")[0].value,
                phone: $("#phone")[0].value,
                project: "insurance"
            }),
        });
    });
});
