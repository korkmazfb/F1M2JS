const mytitle = document.getElementById("mytitle");
const myimage = document.getElementById("myimage");
const myinput = document.getElementById("myinput")
let lokaties =[
    {
        "titel":"plaats 0",
        "image":"img/0.jpg"
    },
    {   
        "titel":"plaats 1",
        "image":"img/1.jpg"
    },
    {
        "titel":"plaats 2",
        "image":"img/2.jpg"
    },
    {
        "titel":"plaats 3",
        "image":"img/3.jpg"
    },
    {
        "titel":"plaats 4",
        "image":"img/4.jpg"
    },
    {
        "titel":"plaats 5",
        "image":"img/5.jpg"
    },
    {
        "titel":"plaats 6",
        "image":"img/6.jpg"
    },
    {
        "titel":"plaats 7",
        "image":"img/7.jpg"
    },
    {
        "titel":"plaats 8",
        "image":"img/8.jpg"
    },
    {
        "titel":"plaats 9",
        "image":"img/9.jpg"
    },
    {
        "titel":"plaats 10",
        "image":"img/10.jpg"
    },
    {
        "titel":"plaats 11",
        "image":"img/11.jpg"
    }

]



//mytitle.innerHTML = "dit is gevoegd door java";
//myimage.src = "img/1.jpg";

function show(index){
    mytitle.innerHTML = lokaties[index].titel;
    myimage.src = lokaties[index].image;
}

function getinput(){
    show(myinput.value);
    //console.log(myinput.value)
    myinput.value = "";
    myinput.focus();
}

