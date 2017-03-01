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
            $("#img").append("<img src='" + resultArray2d[x][y].link + "' width='100' height='100'>")
        }
    }
    console.log(resultArray2d);
}


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
        console.log(resultArray);
        console.log(resultArray2);
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


/*function returnObj(result) {
    resultObj = result;
    //console.log(resultObj)
}*/

function handler(imgTag) {
    document.getElementById("backdrop").src=resultObj.items[imgTag].link;
}
