function loadContent(){
    var url = "http://api.datastack.cc/designs/random";
    $.ajax({
        url: url, 
        type: "GET",
        dataType:"JSON",  
        success: function(result){ 
            if(result['status']['code'] == '200'){
                data = result['data']
                console.log(data)
                html_temp ='<div class="box">'+
                '<div class="pic">'+
                '<a href="'+ data['preview'] +'" class="image-popup ">'+
                '<img src="'+ data['preview'] + '" alt="'+ data['title'] +'"></a>'+
                '</div>'+
                '</div>';
                $("#contianer").append(html_temp);
            }
        }
    }); 
}

$(function(){
    loadContent();
    $("#changeOne").click(function(){
        $("#contianer").empty();
        loadContent();
    });
});
