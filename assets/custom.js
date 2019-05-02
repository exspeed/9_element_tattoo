$(document).ready(function() {
    // GLOBAL VARIABLES
    const MAXIMAGES = 9;
   
    function instafeed_instagram(element, maxlimit) {

        var token = element.getAttribute("token");
        var userid = element.getAttribute("userid");
        var elementID = element.getAttribute("id");
        //var tag = element.getAttribute("tag");

        var lastMatchImages = 0;
        var feedcall = 0;

        var feed = new Instafeed({
        get: 'user',
        userId: userid,
        target: elementID,
        accessToken: token,
        limit: 20,
        resolution: 'standard_resolution',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        
        filter : function(image) {
            if( lastMatchImages < maxlimit){
                lastMatchImages++;
                return true;
            }
            return false;
        },
        /*
        after: function() { // useful if IG is live
            if(lastMatchImages < maxlimit){
                if(this.hasNext()){
                    feedcall++;
                    feed.next();
                }
            }
        },*/
        
        success: function(response) {
        response.data = response.data.filter(function(e){
          return e.type === 'image' || e.type =='carousel';
        });
        },
        });

        feed.run();

    }
    

    var elements = document.querySelectorAll("[id^='instafetch']");
   
    for (var i = 0; i < elements.length; i++){
        instafeed_instagram(elements[i], MAXIMAGES);
    }
    


        

    //document.getElementById("demo").innerHTML = instafeed_instagram();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

});
