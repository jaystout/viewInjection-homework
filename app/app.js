function initListeners(){
    $("#nav nav a").click(function(e){
        var btnID = this.id;
        MODEL.getView(btnID);
        //console.log(btnID);
});
}

function initSite() {
    $.get('views/nav.html', function(nav){
        $("#nav").html(nav);
        initListeners();
    });

$.get("views/home/home.html", function (data){
    $("#app").html(data);
});

$.get("views/footer.html", function (data){
    $("#footer").html(data);
});
}

$(document).ready(function(){
    initSite();
});

