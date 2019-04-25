$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '224007036',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '8272226300.1677ed0.ff10fbc86e39462d8e21cade298ab1b6',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

});
