document.getElementById("text_box").innerHTML = 'j:next  k:translation';

var file_name = 'words.csv'

var arr;
var index = 0;
var prev_index = 0;
var state = 0; // 0 word 1 translation 

readFile(function (data) { arr = data });


$(document).keydown(function (e) {
    // console.log(e.which);

    if (e.which == 74) // j
    {
        next();
    }
    if (e.which == 75) //k
    {
        reveal();
    }
    if (e.which == 78) //n
    {
        openWikiDutch();
    }
    if (e.which == 79) //m
    {
        openWikiEnglish();
    }


});

function readFile(callback) {
    $.get(file_name, function (data) {
        var arr = $.csv.toArrays(data);

        callback(arr);
    }, "text");
}

function openWikiDutch() {
    var url = "https://en.wiktionary.org/wiki/" + arr[index][0] + "#Dutch"
    console.log("open wiki");
    console.log(url);
    window.open(url);
}
function openWikiEnglish() {
    var url = "https://en.wiktionary.org/wiki/" + arr[index][0] + "#English"
    console.log("open wiki");
    console.log(url);
    window.open(url);
}

function openYouglishDutch() { 
    var url = "https://youglish.com/pronounce/" + arr[index][0] + "/dutch?"
    window.open(url);
}

function next() {
    if (arr.length == 1)
        index = 0
    else {
        while (index == prev_index)
            index = Math.floor(Math.random() * arr.length)
    }
    prev_index = index;
    showWord();
    state = 0;
}

function showWord() {
    var item = arr[index];
    $('#text_box').html(item[0]);
    var element = document.getElementById("text_box");
    element.style.backgroundColor = "#FFFFFF";
}

function showTranslation() { 
    var item = arr[index];
    $('#text_box').html(item[1]);
    var element = document.getElementById("text_box");
    element.style.backgroundColor = "#deffde";
}


function reveal() {
    
    if (state == 0) {
        showTranslation();
        state = 1;
    }
    else {
        showWord();
        state = 0;
    }


}