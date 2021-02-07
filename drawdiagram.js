(function() {
    var canvas = document.getElementById("canvas");
    var incview = document.getElementById("increment");
    var c = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    var incrementlim = 2 / width;

    //chaos formula: f(x1) = r * x0 * (1 – x0)
    function fx(x1, r) {
        return r * x1 * (1 - x1);
    }

    function creategraph() {
        for (inc = 1; inc <= 200; inc++) {
            drawrender(inc);
        }
    }

    function drawrender(inc) {

        //draw to canvas
        function drawgraph(r) {
            x = .5,
                xpos = width * ((r - 2) / 2);
            incview.textContent = inc;

            for (let i = 0; i < inc; i++) {
                x = fx(x, r);
            }
            c.fillRect(xpos, height - (x * height), 1, 1); //draw each pixel
        }

        //render
        c.fillStyle = "rgba(255, 255, 255, 0.25)";
        setTimeout(function() {


            for (r = 2; r < 4; r += incrementlim) {
                (function(render) {
                    setTimeout(function() {
                        drawgraph(render);

                    }, 0);
                })(r);
            };
        }, 0);
    }

    creategraph();

})();