function loadContent(page, pre_count_page){
    var url = "http://api.datastack.cc/designs";
    var data = {"p" : page, "prep": pre_count_page};
    $.ajax({
        url: url, 
        data: data,
        type: "GET",
        dataType:"JSON",  
        success: function(result){ 
            if(result['status']['code'] == '200'){
                datas = result['data']
                $.each(datas, function(i, data){ 
                    html_temp ='<div class="box">'+
                        '<div class="pic">'+
                        '<a href="'+ data['preview'] +'" class="image-popup ">'+
                        '<img src="'+ data['preview'] + '" alt="'+ data['title'] +'"></a>'+
                        '<div class="desc">'+ data['title'] + '</div>'+
                        '</div>'+
                    '</div>';
                    $("#contianer").append(html_temp);
                });
            }
        }
    }); 
}

$(function(){
    var page = 1;
    var pre_count_page = 15;
    loadContent(page, pre_count_page);
    $("#next-page").click(function(){
        page = page+1;
        $("#contianer").empty();
        loadContent(page, pre_count_page);
    });
});
