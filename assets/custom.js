$(document).ready(function() {



    function instafeed_instagram() {
       var elements = document.querySelectorAll("[id^='instafetch']");

       var instance = [];
      
       for(var i = 0; i < elements.length; i++){
        var token = elements[i].getAttribute("token");
        var userid = elements[i].getAttribute("userid");
        var elementID = elements[i].getAttribute("id");
        var tag = elements[i].getAttribute("tag");

        instance.push(
            new Instafeed({
        get: 'user',
        userId: userid,
        target: elementID,
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: token,
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        }));
        instance[i].run();
       }
    };


    instafeed_instagram();
    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

});
