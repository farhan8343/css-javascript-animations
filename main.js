jQuery(document).ready(function(){
    //For Sphere 
    for(var i=0; i < 500; i++){
        jQuery('<div class="c"></div>').appendTo(".particle-sphere");
    }

    particlesJS.load('particles-js', 'animationjs/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    particlesJS.load('waves-js', 'animationjs/particlesup.json', function() {
        console.log('callback - particles.js config loaded');
    });
});