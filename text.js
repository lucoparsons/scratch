/**
 * Created by h205p2 on 1/10/17.
 */
var query = prompt("enter your image search key. one word, all lower case.");
var resultArray = [];
var resultArray2d = [];
var apiTimes = 10;
var apiCounter = 0;

//careful!  var i is global now
for(var i=0; i<apiTimes; i++) {
    if(i==0) {
        getAPI(1)
    }
    else {
        getAPI((i*10) + 1);
    }
}


function getAPI(startIndex) {
    $(document).ready(function () {
        $("#output").empty();
        $.ajax({
            url: "https://www.googleapis.com/customsearch/v1?q=" + query + "&start=" + startIndex + "&key=AIzaSyCu3wCnIuKo0CdHrx9lmAXCvQLBfgEOyOk&cx=003558548276889252640:vmfxgbxjotu&searchType=image",
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (result) {
                buildInitialArray(result);
            },
            error: function () {
                alert('Failed!');
            }
        });
    });
}

function buildInitialArray(result) {
    console.log(result);
    for (var u=0; u<10; u++) {
        resultArray.push(result.items[u]);
    }
    apiCounter++;
    if(apiCounter == apiTimes) {
        appendArray();
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x][y+1].link).fadeIn(2000);
        });
        calcSpot();
        var rectHeight = 224-(distance*16);
            $('#rectangle').css({'height': rectHeight+'px'})
    }
}

function appendArray() {
    var z = 0;
    for (var x=0; x<10; x++) {
        resultArray2d.push([]);
        for (var y=0; y<10; y++) {
            resultArray2d[x][y] = resultArray[z];
            z+=1;
        }
    }
    console.log(resultArray2d);
    console.log()
}


var facing = ['N', 'E', 'S', 'W'];
var a = 0;
var direction = facing[0];

function turnyImages() {
    if (direction == 'N') {
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x][y+1].link).fadeIn(1300);
        });
    }
    else if (direction == 'E') {
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x+1][y].link).fadeIn(1300);
        });
    }
    else if (direction == 'S') {
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x][y-1].link).fadeIn(1300);
        });
    }
    else if (direction == 'W') {
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x-1][y].link).fadeIn(1300);
        });
    }
}
x=4;
y=4;
var distance = 0;
var theSpot = [Math.floor((Math.random()*8)+1), Math.floor((Math.random()*8)+1)];
console.log(theSpot);
function reloadage() {
    location.reload();
}
function spotCheck() {
    $(document).ready(function() {
        $('.cntrls').hide();
        $('#backdrop').fadeOut(function () {

            $(this).attr('src', 'https://media.giphy.com/media/yr7n0u3qzO9nG/giphy.gif').fadeIn(5000);
        });
        //document.getElementById('tempGauge').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/CH_cow_2_cropped.jpg/250px-CH_cow_2_cropped.jpg';
        $('#tempGauge').attr('src', 'imgs/brokenGauge.png');
        $('#rectangle').animate({height: "+=450px"}, 'slow');
        $('body').append("<div onclick='reloadage()' id='daImg'>play again</div>")
    });
}
function calcSpot() {
    distance = Math.abs(theSpot[0] - x) + Math.abs(theSpot[1] - y);
}
calcSpot();
console.log(distance);
function tempCheck() {
    if (distance<startDist) {      //if distance gets smaller, temp gauge up
        $('#rectangle').animate({height: "+=16px"}, 'fast');
    }
    else if (distance>startDist) {      //if distance gets bigger, temp gauge down
        $('#rectangle').animate({height: "-=16px"}, 'fast');
    }
}

var turnRight = function() {
    $(document).ready(function() {
        a += 1;
        if (a > 3) {
            a -= 4;
        }
        direction = facing[a];
        document.getElementById("compass").src = "imgsCompass/" + direction + ".png";
        turnyImages();
        boundaryCheck();
    });
};

var turnLeft = function() {
    $(document).ready(function() {
        a += 3;
        if (a > 3) {
            a -= 4;
        }
        direction = facing[a];
        document.getElementById("compass").src = "imgsCompass/" + direction + ".png";
        turnyImages();
        boundaryCheck();
    });
};

var walk = function()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           {
    startDist = distance;
    boundaryCheck();
        if (direction == 'N') {
            y += 1;
            calcSpot();
            if ((Math.abs(theSpot[0] - x) + Math.abs(theSpot[1] - y)) == 0) {
                spotCheck();
            }
            else {
                $('#backdrop').fadeOut(function () {
                    $(this).attr('src', resultArray2d[x][y + 1].link).fadeIn(1300);
                });
                tempCheck();
            }
        }
        else if (direction == 'E') {
            x += 1;
            calcSpot();
            if ((Math.abs(theSpot[0] - x) + Math.abs(theSpot[1] - y)) == 0) {
                spotCheck();
            }
            else {
                $('#backdrop').fadeOut(function () {
                    $(this).attr('src', resultArray2d[x + 1][y].link).fadeIn(1300);
                });
                tempCheck();
            }
        }
        else if (direction == 'S') {
            y -= 1;
            calcSpot();
            if ((Math.abs(theSpot[0] - x) + Math.abs(theSpot[1] - y)) == 0) {
                spotCheck();
            }
            else {
                $('#backdrop').fadeOut(function () {
                    $(this).attr('src', resultArray2d[x][y - 1].link).fadeIn(1300);
                });
                tempCheck();
            }
        }
        else if (direction == 'W') {
            x -= 1;
            calcSpot();
            if ((Math.abs(theSpot[0] - x) + Math.abs(theSpot[1] - y)) == 0) {
                spotCheck();
            }
            else {
                $('#backdrop').fadeOut(function () {
                    $(this).attr('src', resultArray2d[x - 1][y].link).fadeIn(1300);
                });
                tempCheck();
            }
        }

    console.log(x);
    console.log(y);
};

function boundaryCheck() {
    $(document).ready(function () {
        if (y>=8 && direction == 'N') {
            $('#walk').hide();
        }
        else if (x>=8 && direction == 'E') {
            $('#walk').hide();
        }
        else if (y<=1 && direction == 'S') {
            $('#walk').hide();
        }
        else if (x<=1 && direction == 'W') {
            $('#walk').hide();
        }
        else {
            $('#walk').show();
        }
    });
}

$(document).ready(function() {
    $('div').mouseenter(function(){
        $(this).css({'text-shadow': '4px 2px #ff0000'});
    }).mouseleave(function(){
        $(this).css({'text-shadow': '4px 2px #F0F8FF'});
    });
});