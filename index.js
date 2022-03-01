
// Colors in boxes
const divs = document.querySelectorAll(".cols");

var colors = [];
get_colors=()=>{
    document.querySelector(".container").style.backgroundColor = "rgb(241, 181, 16)";
    document.getElementById("result").innerText = "";
    document.getElementById("new-col").innerText = "NEW COLORS";
    divs.forEach(function (col) {
        var a = Math.floor(256 * Math.random());
        var b = Math.floor(256 * Math.random());
        var c = Math.floor(256 * Math.random());
        const rgb = "rgb(" + a + ", " + b + ", " + c + ")";
        col.style.backgroundColor = rgb;
        colors.push(rgb);
    })
    var x = Math.floor(divs.length * Math.random());
    document.getElementById("color_name").innerHTML = colors[x];
    return(clr= document.getElementById("color_name").innerHTML);
}

change_colors = (some_color) =>{
    divs.forEach(e => {
        e.style.backgroundColor = some_color;
    });
    colors = [];
}

// Selection of boxes
divs.forEach(cols => {
    cols.addEventListener("click", function (e) {
        document.getElementById("result").innerText = "";
        console.log(e.currentTarget.style.backgroundColor);
        var color = e.currentTarget.style.backgroundColor;      
        if (color === clr){
            document.getElementById("result").innerText = "Correct!!";
            document.getElementById("new-col").innerText = "PLAY AGAIN??";
            document.querySelector(".container").style.backgroundColor = clr;
            change_colors(clr);
        }
        else{
            document.getElementById("result").innerText = "Try Again";
            this.style.backgroundColor = "black";
            colors = [];
        }
    })
});


