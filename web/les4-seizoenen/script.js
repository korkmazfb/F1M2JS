const mytitle = document.getElementById('mytitle')
const myimage = document.getElementById('myimage')

;let seizoenen = [
    {
        "titel":"seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"grey"
    },

    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "backGround":"green"
    },

    {
        "titel":"zomer",
        "image":"img/summer.jpg",
        "backGround":"yellow"
    },

    {
        "titel":"autumn",
        "image":"img/autumn.jpg",
        "backGround":"brown"
    },

    {
        "titel":"autumn",
        "image":"img/autumn.jpg",
        "backGround":"white"
    },

]

//let seizoen = {
//    "titel":"lente",
//  "image":"img/spring.jpg"
// }; 

function show(index){
    mytitle.innerHTML = seizoenen[index].titel;
    myimage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround
}