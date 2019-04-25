$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '224007036',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '8272226300.7e2efb0.82dabc3251034e898bb2e4a5a715338e',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

});
