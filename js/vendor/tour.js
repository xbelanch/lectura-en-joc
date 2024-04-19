$(document).ready(function($) {

    $.powerTour({
        tours: [{
            trigger: '#starttour-1',
            startWith: 1,
            easyCancel: true,
            escKeyCancel: true,
            scrollHorizontal: true,
            keyboardNavigation: true,
            loopTour: false,
            highlightEndSpeed: 1000, //new 2.3.0
            onStartTour: function(ui) {

                // show bottom bar
                // $('#demo-bar-footer').animate({
                //     bottom: 0
                // }, 1000);

            },
            onEndTour: function(ui) {

                // animate back to the top
                $('html, body').animate({
                    scrollBottom: 0
                }, 1000, 'swing');
                //$('html, body').animate({scrollLt:0}, 1000, 'swing'); 

                // progress meter hide and reset
                // $('#progressmeter').children('#progressmeter-bar').width(0).next().text();

                // // hide bottom bar
                // $('#demo-bar-footer').animate({
                //     bottom: '-70px'
                // }, 1000);

            },
            onProgress: function(ui) {

                // var i = ui.stepIndex;
                // var total = ui.totalSteps;
                // var barSize = 100 / total * i + '%';

                // // progress meter
                // $('#progressmeter-text').html('<span>' + i + '</span> / ' + total + '').prev('#progressmeter-bar').animate({
                //     width: barSize
                // }, 400);

            },
            steps: [{
                    hookTo: '', //not needed
                    content: '#step-one',
                    width: 350,
                    position: 'str',
                    offsetY: -80,
                    offsetX: -50,
                    fxIn: 'lightSpeedIn',
                    fxOut: 'bounceOutLeft',
                    showStepDelay: 0,
                    center: 'step',
                    scrollSpeed: 400,
                    scrollEasing: 'swing',
                    scrollDelay: 0,
                    timer: '00:20',
                    highlight: false,
                    keepHighlighted: false,
                    keepVisible: false, // new 2.2.0
                    onShowStep: function(ui) {},
                    onHideStep: function(ui) {}
                },

                {
                    hookTo: '#hook-two',
                    content: '#step-two',
                    width: 435,
                    position: 'bl',
                    offsetY: 60,
                    offsetX: 0,
                    fxIn: 'flipInX',
                    fxOut: 'flipOutY',
                    showStepDelay: 1000,
                    center: 'step',
                    scrollSpeed: 400,
                    scrollEasing: 'swing',
                    scrollDelay: 0,
                    timer: '00:00',
                    highlight: false,
                    keepHighlighted: false,
                    keepVisible: false, // new 2.2.0
                    onShowStep: function(ui) {

                        // fadd fx class to buy button
                        //$('#hook-two > .btn').addClass('colorfadingbutton');

                    },
                    onHideStep: function(ui) {

                        // remove fx class from buy button
                        // $('#hook-two > .btn').removeClass('colorfadingbutton');

                    }
                }, {
                    hookTo: '#header',
                    content: '#step-three',
                    width: 360,
                    position: 'tm',
                    offsetY: 0,
                    offsetX: 20,
                    fxIn: 'slideInDown',
                    fxOut: 'slideOutUp',
                    showStepDelay: 500,
                    center: 'step',
                    scrollSpeed: 400,
                    scrollEasing: 'swing',
                    scrollDelay: 500,
                    timer: '00:60',
                    highlight: false,
                    keepHighlighted: false,
                    keepVisible: false, // new 2.2.0
                    onShowStep: function(ui) {
                        $('#header').addClass("powertour-highlight");

                    },
                    onHideStep: function(ui) {}
                }, {
                    hookTo: '#hook-four',
                    content: '#step-four',
                    width: 600,
                    position: 'tm',
                    offsetY: 80,
                    offsetX: 0,
                    fxIn: 'fadeInDown',
                    fxOut: 'fadeOut',
                    showStepDelay: 2000,
                    center: 'step',
                    scrollSpeed: 2000,
                    scrollEasing: 'swing',
                    scrollDelay: 1000,
                    timer: '00:00',
                    highlight: false,
                    keepHighlighted: false,
                    keepVisible: false, // new 2.2.0
                    onShowStep: function(ui) {


                    },
                    onHideStep: function(ui) {

                        //hide the helper images(demo so not needed)

                    }
                }

            ],
            stepDefaults: [{
                width: 500,
                position: 'tr',
                offsetY: 0,
                offsetX: 0,
                fxIn: '',
                fxOut: '',
                showStepDelay: 0,
                center: 'step',
                scrollSpeed: 200,
                scrollEasing: 'swing',
                scrollDelay: 0,
                timer: '00:00',
                highlight: false,
                keepHighlighted: false,
                keepVisible: false, // new 2.2.0
                onShowStep: function() {},
                onHideStep: function() {}
            }]
        }]
    });

    // Use this to run the first tour on page load
    $.powerTour('run', 1);

});