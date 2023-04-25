var array = [];

var a;
var b;
var temp;

var allarraystr;

var showing = 0;

for (let i = 0; i < 75; i++) {
    array.push(i+1);
}

$('#generate').click( function(){
    showing = 0;

    for(let i = 0; i < 200; i++){
        a = Math.floor( Math.random() * 75 );
        b = Math.floor( Math.random() * 75 );
    
        temp = array[a];

        array[a] = array[b];
        array[b] = temp;
    }

    document.getElementById('num').textContent = array[showing];
    document.getElementById('showing').textContent = showing+1;
    
    allarraystr = ""

    for(let i = 0; i < 75; i++){
        allarraystr += String(array[i]) + "<br>"
    }

    document.getElementById("allarray").innerHTML = allarraystr.replace(/\n/g, "<br>")
});

$('#prev').click( function(){
    showing = showing > 0 ? showing - 1 : showing;

    document.getElementById('num').textContent = array[showing];
    document.getElementById('showing').textContent = showing+1;
});

$('#num').click( function(){
    showing = showing < 74 ? showing + 1 : showing;

    document.getElementById('num').textContent = array[showing];
    document.getElementById('showing').textContent = showing+1;
});

$('#show').click( function(){
    $("#allarray").toggleClass("active");

    allarraystr = ""

    for(let i = 0; i < 75; i++){
        allarraystr += String(array[i]) + "<br>"
    }

    document.getElementById("allarray").innerHTML = allarraystr.replace(/\n/g, "<br>")
});