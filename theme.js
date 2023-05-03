var maximum = 75;

var arraynum = [];

var a;
var b;
var temp;

var allarraystr;
var i;
var i2;

var showing = 0;

const maxnum = document.getElementById("maxnum");

for (i = 0; i < maximum; i++) {
    i2 = i+1 < 10 ? "0" + String(i+1) : String(i+1);
    arraynum.push(i2);
}

$('#title').click( function(){
    if($("#setting").hasClass("panelactive") == false){
        $("#setting").toggleClass("panelactive");
        $("#blackbg").toggleClass("panelactive");
    }
});

$('#setting>#close').click( function(){
    $("#setting").removeClass("panelactive");
    $("#blackbg").removeClass("panelactive");

    maximum = maxnum.value;

    arraynum = [];

    for (i = 0; i < maximum; i++) {
        i2 = i+1 < 10 ? "0" + String(i+1) : String(i+1);
        arraynum.push(i2);
    }

    showing = 0;

    for(i = 0; i < maximum*2; i++){
        a = Math.floor( Math.random() * maximum );
        b = Math.floor( Math.random() * maximum );
    
        temp = arraynum[a];

        arraynum[a] = arraynum[b];
        arraynum[b] = temp;
    }

    document.getElementById('num').textContent = arraynum[showing];
    document.getElementById('showing').textContent = showing+1;
    document.getElementById('num-2').textContent = arraynum[showing];
    document.getElementById('showing-2').textContent = showing+1;
    
    allarraystr = ""

    for(i = 0; i < maximum; i++){
        i2 = i+1 < 10 ? "0" + String(i+1) : String(i+1);
        allarraystr += String(i2) + "&emsp;" + String(arraynum[i]) + "<br>"
    }

    document.getElementById("allarray").innerHTML = allarraystr.replace(/\n/g, "<br>")
    document.getElementById("allarray-2").innerHTML = allarraystr.replace(/\n/g, "<br>")

});

$('#setting>#back').click( function(){
    $("#setting").removeClass("panelactive");
    $("#blackbg").removeClass("panelactive");
});





$('#generate').click( function(){
    showing = 0;

    for(i = 0; i < maximum*2; i++){
        a = Math.floor( Math.random() * maximum );
        b = Math.floor( Math.random() * maximum );
    
        temp = arraynum[a];

        arraynum[a] = arraynum[b];
        arraynum[b] = temp;
    }

    document.getElementById('num').textContent = arraynum[showing];
    document.getElementById('showing').textContent = showing+1;
    document.getElementById('num-2').textContent = arraynum[showing];
    document.getElementById('showing-2').textContent = showing+1;
    
    allarraystr = ""

    for(i = 0; i < maximum; i++){
        i2 = i+1 < 10 ? "0" + String(i+1) : String(i+1);
        allarraystr += String(i2) + "&emsp;" + String(arraynum[i]) + "<br>"
    }

    document.getElementById("allarray").innerHTML = allarraystr.replace(/\n/g, "<br>")
    document.getElementById("allarray-2").innerHTML = allarraystr.replace(/\n/g, "<br>")
});

$('#prev').click( function(){
    showing = showing > 0 ? showing - 1 : showing;

    document.getElementById('num').textContent = arraynum[showing];
    document.getElementById('showing').textContent = showing+1;
    document.getElementById('num-2').textContent = arraynum[showing];
    document.getElementById('showing-2').textContent = showing+1;
});

$('#num').click( function(){
    showing = showing < maximum-1 ? showing + 1 : showing;

    document.getElementById('num').textContent = arraynum[showing];
    document.getElementById('showing').textContent = showing+1;
    document.getElementById('num-2').textContent = arraynum[showing];
    document.getElementById('showing-2').textContent = showing+1;
});

$('#show').click( function(){
    $("#allarray").toggleClass("active");
    $("#allarray-2").toggleClass("active");

    allarraystr = ""

    for(i = 0; i < maximum; i++){
        i2 = i+1 < 10 ? "0" + String(i+1) : String(i+1);
        allarraystr += String(i2) + "&emsp;" + String(arraynum[i]) + "<br>"
    }

    document.getElementById("allarray").innerHTML = allarraystr.replace(/\n/g, "<br>")
    document.getElementById("allarray-2").innerHTML = allarraystr.replace(/\n/g, "<br>")
});





$('#generate-2').click( function(){
    showing = 0;

    for(i = 0; i < maximum*2; i++){
        a = Math.floor( Math.random() * maximum );
        b = Math.floor( Math.random() * maximum );
    
        temp = arraynum[a];

        arraynum[a] = arraynum[b];
        arraynum[b] = temp;
    }

    document.getElementById('num').textContent = arraynum[showing];
    document.getElementById('showing').textContent = showing+1;
    document.getElementById('num-2').textContent = arraynum[showing];
    document.getElementById('showing-2').textContent = showing+1;
    
    allarraystr = ""

    for(i = 0; i < maximum; i++){
        i2 = i+1 < 10 ? "0" + String(i+1) : String(i+1);
        allarraystr += String(i2) + "&emsp;" + String(arraynum[i]) + "<br>"
    }

    document.getElementById("allarray").innerHTML = allarraystr.replace(/\n/g, "<br>")
    document.getElementById("allarray-2").innerHTML = allarraystr.replace(/\n/g, "<br>")
});

$('#prev-2').click( function(){
    showing = showing > 0 ? showing - 1 : showing;

    document.getElementById('num').textContent = arraynum[showing];
    document.getElementById('showing').textContent = showing+1;
    document.getElementById('num-2').textContent = arraynum[showing];
    document.getElementById('showing-2').textContent = showing+1;
});

$('#next-2').click( function(){
    showing = showing < maximum-1 ? showing + 1 : showing;

    document.getElementById('num').textContent = arraynum[showing];
    document.getElementById('showing').textContent = showing+1;
    document.getElementById('num-2').textContent = arraynum[showing];
    document.getElementById('showing-2').textContent = showing+1;
});

$('#show-2').click( function(){
    $("#allarray").toggleClass("active");
    $("#allarray-2").toggleClass("active");

    allarraystr = ""

    for(i = 0; i < maximum; i++){
        i2 = i+1 < 10 ? "0" + String(i+1) : String(i+1);
        allarraystr += String(i2) + "&emsp;" + String(arraynum[i]) + "<br>"
    }

    document.getElementById("allarray").innerHTML = allarraystr.replace(/\n/g, "<br>")
    document.getElementById("allarray-2").innerHTML = allarraystr.replace(/\n/g, "<br>")
});