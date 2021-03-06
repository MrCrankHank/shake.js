(function($){
    $.fn.shake = function(conf) {
        var config = $.extend({
            speed: 30,
            duration: 2000,
            spread: 3
        }, conf);

        return this.each(function() {
            var t = $(this);

            var shake = function() {
                var topPos = Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2);
                var leftPos = Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2);
                var rotate = Math.floor(Math.random() * config.spread - (config.spread - 1) / 2); // cheers to erik@birdy.nu for the rotation-idea
                t.css({position: 'relative', left: leftPos +'px', top: topPos +'px', WebkitTransform: 'rotate(' +rotate +'deg)'});
            };

            var doShake = function () {
                var vibrationInterval = setInterval(shake, config.speed);
                var stopShake = function() {
                    clearInterval(vibrationInterval);
                    t.css({position: 'static', left: 'auto', top: 'auto', WebkitTransform: 'rotate(0deg)'});
                };
                setTimeout(stopShake, config.duration);
            };

            doShake();
        });
    };
}( jQuery ));