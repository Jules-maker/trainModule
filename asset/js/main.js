// animation header opacity
// function waitingAnimation() {
//     document.getElementsByClassName('.overlay').className += 'opacity';

// }
// setTimeout(function waitingAnimation() {
//     document.getElementsByClassName('.overlay').className += 'opacity';
//     return true
// },1)
// if (waitingAnimation === true) {
//     document.write('BBBBBBBB');
//     console.log('BBBBBBBB');

// }else {document.write('aaaaaaa');
// console.log('aaaaa');}

// const overlay = document.getElementsById(".overlay");
// overlay.className = "overlay opacity";
// var myopacity = 0;
var myopacity = 1;
var myopacityp = 0.5;
const mouseTarget = document.getElementById('mouseTarget');
const mouseTargetFade = document.getElementById('fade');
const apear = document.getElementsByClassName('disapear')
function apearClass() {
    // apear.classList.remove("disapear"); Cannot read properties of undefined (reading 'remove')
    document.getElementById("navbar").classList.remove('disapear'); 
    console.log('okkkkk')
}




function disapear() {
    mouseTargetFade.style.display = "none";
}
function MyFadeFunction() {
    setTimeout(disapear,2000);
    setTimeout(apearClass,2000);
    
    if (myopacity >= 0.5) {
        myopacity -= .010;
        myopacityp -= .020;
        setTimeout(function () { MyFadeFunction() }, 50);
    }
     mouseTarget.style.opacity = myopacity;
     mouseTargetFade.style.opacity = myopacityp;
    //  return 2;
    // console.log(myopacityp)

}
// if (MyFadeFunction == 2) {
//     mouseTargetFade.style.display = "none";
//     console.log('ok');
// }


// document.getElementById('mouseTarget').style.opacity = myopacity;
 




// mouseTarget.addEventListener('mouseenter', e => {
//     // on ajoute la fonction fade puis on modifie l'opacité
//     setTimeout(MyFadeFunction, 1000);
// })
