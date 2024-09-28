console.log("lets write some javascript")

//popup load

window.onload = function() {
    
    document.querySelector(".popup").style.opacity = "1"
    document.querySelector(".massage").style.opacity = "0"
}
//gettin name of user and end of popupscreen
let username = document.querySelector("#name");


document.querySelector("#button").addEventListener("click", function() {
    document.querySelector(".popup").style.opacity = "0"
    document.querySelector(".massage").style.opacity = "1"
    let namevalue = username.value;
    console.log(namevalue)
    document.querySelector("#getname").value = `${namevalue}`
    //greeting screen of user
    if (namevalue == ""){
    
document.querySelector("#msg").innerHTML = `&nbsp;&nbsp;&nbsp;"Hii <br> &nbsp;&nbsp;User"`
}
else {
    document.querySelector("#msg").innerHTML = `&nbsp;&nbsp;&nbsp;"Hii <br> &nbsp;&nbsp;${namevalue}"`
}

//greeting screen off
setTimeout(function(){
    document.querySelector(".massage").style.opacity = "0";
}, 10000);




//popup rating screen
setTimeout(function(){
    document.querySelector(".feedback").style.opacity = "1";
}, 15000);

//reting screen content and open description box

let star1  = document.querySelector(".star1")
star1.addEventListener("click", function(){
    star1.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    document.querySelector(".rateus>p").innerHTML = "i just hate it😠";
    document.querySelector(".description").style.opacity = "1";
   document.querySelector("#getrating").value = "1/5"
   let rate =  document.querySelector("#getrating")
   let rateval = rate.value;
console.log(rateval)    
})
let star2  = document.querySelector(".star2")
star2.addEventListener("click", function(){
    star1.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    star2.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    document.querySelector(".rateus>p").innerHTML = "i dont't like it😩";
    document.querySelector(".description").style.opacity = "1";
    document.querySelector("#getrating").value = "2/5"
    let rate =  document.querySelector("#getrating")
    let rateval = rate.value;
 console.log(rateval)    
})
let star3  = document.querySelector(".star3")
star3.addEventListener("click", function(){
    star1.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    star2.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    star3.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    document.querySelector(".rateus>p").innerHTML = "it is awsome😄";
    document.querySelector(".description").style.opacity = "1";
    document.querySelector("#getrating").value = "3/5"
    let rate =  document.querySelector("#getrating")
    let rateval = rate.value;
 console.log(rateval)    
})
let star4  = document.querySelector(".star4")
star4.addEventListener("click", function(){
    star1.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    star2.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    star3.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    star4.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    document.querySelector(".rateus>p").innerHTML = " i ust like it😎";
    document.querySelector(".description").style.opacity = "1";
    document.querySelector("#getrating").value = "4/5"
    let rate =  document.querySelector("#getrating")
    let rateval = rate.value;
 console.log(rateval)    
})
let star5  = document.querySelector(".star5")
star5.addEventListener("click", function(){
    star1.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    star2.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    star3.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    star4.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    star5.src = "https://ganesh-patankar.github.io/notify/filledstar.svg";
    document.querySelector(".rateus>p").innerHTML = " i just love it😍";
    document.querySelector(".description").style.opacity = "1";
    document.querySelector("#getrating").value = "5/5"
    let rate =  document.querySelector("#getrating")
    let rateval = rate.value;
 console.log(rateval)    
})

//off the rating screen

let submit  = document.querySelector("#desbutton")
submit.addEventListener("click" , function(){
    document.querySelector(".feedback").style.opacity = "0";
    document.querySelector(".welcomeandretting").style.display = "none";

})

})
