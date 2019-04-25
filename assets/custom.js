$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '224007036',
        limit: 12,
        resolution: 'standard_resolution',
        clientId: '7e2efb0e47994ac9bd9a079a3fdb5146',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

});