/**
 * Created by h205p2 on 1/10/17.
 */

function Forest() {
    this.x0y0F = 'imgs/cabinSample.jpg';
    this.x0y0L = 'imgs/creekSample.jpg';
    this.x0y0R = 'imgs/pathSample.jpg';
}
var forest = new Forest();

/*var backgroundArray = [
'imgs/cabinSample.jpg',
'imgs/creekSample.jpg',
'https://i.ytimg.com/vi/jF7TqzPP38A/hqdefault.jpg'
];*/

var turn = function() {

};

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