$(document).ready(function() {
    $('#plugin1').dblclick(function() {
        $(this).fadeOut('fast');
    });
    
    $('#plugin2').hover(function() {
        $(this).fadeOut('fast');
    });
    
});

   

$("button").click(function(){
    $.getJSON("http://api.fixer.io/latest", function(result){
        console.log(result);
        $.each(result.rates, function(i, field){
            console.log(i);
            $("div#output").append(i + " " + field + " ");
        });
    });
});

