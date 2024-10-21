// const myWife = "Rere";

// const myAge = "21";

// const isMarried = false;

// myFutureWife = "Deborah";

// let myWhatever = null;

// const eachStudent = {
//     firstName: "Emmanuel",
//     lastName: "Unique",
//     age: 21,
//     cityOfResidence:"Lagos"
// }

// const Students = ["Princess", "Emmanuel"]



// 
const myNav = document.getElementById('myNav');
const openNav = document.getElementById('openBtn');
const closeNav = document.getElementById('closeNav');


function hideNav(){
    if(myNav.style.display === "flex"){
        myNav.style.display = "none"
    }

    else{
        myNav.style.display = "flex"
    }
}

openNav.addEventListener('click', hideNav)
closeNav.addEventListener('click', hideNav)