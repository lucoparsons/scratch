/**
 * Created by h205p2 on 1/10/17.
 */
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
            url: "https://www.googleapis.com/customsearch/v1?q=forest&start=" + startIndex + "&imgSize=xlarge&key=AIzaSyCu3wCnIuKo0CdHrx9lmAXCvQLBfgEOyOk&cx=003558548276889252640:vmfxgbxjotu&searchType=image",
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
    }
}

function appendArray() {
    var z = 0;
    for (var x=0; x<10; x++) {
        resultArray2d.push([]);
        for (var y=0; y<10; y++) {
            resultArray2d[x][y] = resultArray[z];
            z += 1;
        }
    }
    console.log(resultArray2d);
}

var facing = ['N', 'E', 'S', 'W'];
var a = 0;
var direction = facing[0];


function turnyImages() {
    if (direction == 'N') {
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x][y+1].link).fadeIn();
        });
    }
    else if (direction == 'E') {
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x+1][y].link).fadeIn();
        });
    }
    else if (direction == 'S') {
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x][y-1].link).fadeIn();
        });
    }
    else if (direction == 'W') {
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x-1][y].link).fadeIn();
        });
    }
}
x=4;
y=4;
var turnRight = function() {
    $(document).ready(function() {
        a += 1;
        if (a > 3) {
            a -= 4;
        }
        direction = facing[a];
        document.getElementById("compass").src = "imgsCompass/" + direction + ".png";
        turnyImages();
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
    });
};

var walk = function() {
    if (direction == 'N') {
        y += 1;
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x][y+1].link).fadeIn();
        });
    }
    else if (direction = 'E') {
        x+=1;
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x+1][y].link).fadeIn();
        });
    }
    else if (direction = 'S') {
        y-=1;
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x][y-1].link).fadeIn();
        });
    }
    else if (direction = 'W') {
        x-=1;
        $('#backdrop').fadeOut(function () {
            $(this).attr('src', resultArray2d[x-1][y].link).fadeIn();
        });
    }
    document.getElementById("backdrop").src = resultArray2d[x][y].link
};



/*var forest = {
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
console.log(forest.x0.y0.E);*/

    //appending sum imgs: $("#img").append("<img src='" + resultArray2d[x][y].link + "' width='100' height='100'>")