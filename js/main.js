$(document).ready(function () {


    // click event
    $("#submit-btn").click(function () {
        event.preventDefault();

        //Declare variable – Remove case sensitive
        var city = $('#city-type').val().toLowerCase().trim();;



        // ARRAY METHOD (Works)

        /*
                    if ($.inArray(city, ['nyc', 'new york', 'new york city']) >= 0) {
                        city = 'nyc';
                        $('body').removeClass();
                        $('body').addClass('nyc');

                    } else if ($.inArray(city, ['san francisco', 'bay area']) >= 0) {
                        city = 'sanf';
                        $('body').removeClass();
                        $('body').addClass('sf');

                    } else if ($.inArray(city, ['la', 'lax', 'los angeles']) >= 0) {
                        city = 'la';
                        $('body').removeClass();
                        $('body').addClass('la');

                    } else if ($.inArray(city, ['austin', 'atx']) >= 0) {
                        city = 'austin';
                        $('body').removeClass();
                        $('body').addClass('austin');


                    } else if ($.inArray(city, ['sydney', 'syd']) >= 0) {
                        city = 'sydney';
                        $('body').removeClass();
                        $('body').addClass('sydney');


                    } else console.log('No go dude!');

        */

        // Accept multiple names & change image Add/remove Class
        if (city == 'nyc' || city == 'new york' || city == 'new york city') {
            $('body').removeClass();
            $('body').addClass('nyc');

        } else if (city == 'san francisco' || city == 'bay area') {
            $('body').removeClass();
            $('body').addClass('sf');

        } else if (city == "la" || city == "los angeles" || city == "lax") {
            $('body').removeClass();
            $('body').addClass('la');

        } else if (city == 'austin' || city == 'atx') {
            $('body').removeClass();
            $('body').addClass('austin');

        } else if (city == 'sydney' || city == 'syd') {
            $('body').removeClass();
            $('body').addClass('sydney');



        } else {
            alert('Try a different city');

        }; 


        /*
                // Accept multiple names & change image – Change CSS Method
                if (city == 'nyc' || city == 'new york' || city == 'new york city') {
                    $('body').css('background-image', 'url(./images/nyc.jpg)');

                } else if (city == 'san francisco' || city == 'bay area') {
                    $('body').css('background-image', 'url(./images/sf.jpg)');

                } else if (city == "la" || city == "los angeles" || city == "lax") {
                    $('body').css('background-image', 'url(./images/la.jpg)');

                } else if (city == 'austin' || city == 'atx') {
                    $('body').css('background-image', 'url(./images/austin.jpg)');

                } else if (city == 'sydney' || city == 'syd') {
                    $('body').css('background-image', 'url(./images/sydney.jpg)');
                 


                } else {
                    alert('Try a different city');

                }; */
        $('form').trigger("reset");

    });
});







/*
$('#submit-btn').click(function () {
    var city = ('#city-type').val();
    console.log(city);

    //if submits this || this || this

    if (city == "New York" || "New York City" || "NYC") {
        //change background pic    
        $('body').addClass('nyc');
    };

});
*/