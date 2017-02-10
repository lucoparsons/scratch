/**
 * Created by h205p2 on 1/10/17.
 */

var forest = {
    x0: {
        y0: {
            E: 'imgs/creekSample.jpg',
            S: 'imgs/pathSample.jpg'
        },
        y1: {
            E: 'https://i.ytimg.com/vi/jF7TqzPP38A/hqdefault.jpg',
            S: 'cabinSample.jpg',
            W: ''
        }
    }
};
console.log(forest.x0.y0.E);

var facing = ['N', 'E', 'S', 'W'];
var a = 0;
var direction = facing[0];

var turnRight = function() {
    $(document).ready(function() {
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', forest.x0y0F).fadeIn();
        });
        a += 1;
        if (a > 3) {
            a -= 4;
        }
        direction = facing[a];
        document.getElementById("compass").src = "imgsCompass/" + direction + ".png";
        console.log(a);
        console.log(direction);
    });
};

var turnLeft = function() {
    $(document).ready(function() {
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', forest.x0y0F).fadeIn();
        });
        a += 3;
        if (a > 3) {
            a -= 4;
        }
        direction = facing[a];
        document.getElementById("compass").src = "imgsCompass/" + direction + ".png";
        console.log(a);
        console.log(direction);
    });
};

var walk = function() {

};