
let textstyle = document.getElementById('TextBurger').style.backgroundColor = 'brown'
document.getElementById('TextBurger').style.padding = '10px'
document.getElementById('TextBurger').style.marginLeft = '30px'
document.getElementById('TextBurger').style.width = '70px'
document.getElementById('TextBurger').style.border = 'solid black'



let textstyle2 = document.getElementById('TextBurger2').style.backgroundColor = 'brown'
document.getElementById('TextBurger2').style.padding = '10px'
document.getElementById('TextBurger2').style.width = '70px'

document.getElementById('TextBurger2').style.marginLeft = '70px'
document.getElementById('TextBurger2').style.border = 'solid black'




let textstyle3 = document.getElementById('TextBurger3').style.backgroundColor = 'brown'
document.getElementById('TextBurger3').style.padding = '10px'
document.getElementById('TextBurger3').style.width = '70px'
document.getElementById('TextBurger3').style.marginLeft = '70px'

document.getElementById('TextBurger3').style.border = 'solid black'






let textstyle4 = document.getElementById('TextBurger4').style.backgroundColor = 'brown'
document.getElementById('TextBurger4').style.padding = '10px'
document.getElementById('TextBurger4').style.width = '70px'
document.getElementById('TextBurger4').style.marginLeft = '70px'

document.getElementById('TextBurger4').style.border = 'solid black'




let textstyle5 = document.getElementById('TextBurger5').style.backgroundColor = 'brown'
document.getElementById('TextBurger5').style.padding = '10px'
document.getElementById('TextBurger5').style.width = '70px'
document.getElementById('TextBurger5').style.marginLeft = '30px'

document.getElementById('TextBurger5').style.border = 'solid black'



function toggleInfo() {
    const content = document.getElementById('BurgerContent');
    const btn = document.querySelector('.expand-btn');
    if (content.style.display === "block") {
        content.style.display = "none";
        btn.textContent = "+";
    } else {
        content.style.display = "block";
        btn.textContent = "-";
    }
}


function toggleInfo2() {
    const content2 = document.getElementById('BurgerContent4');
    const btnnew = document.querySelector('.expand-btn2');
    if (content2.style.display === "block") {
        content2.style.display = "none";
        btnnew.textContent = "+";
    } else {
        content2.style.display = "block";
        btnnew.textContent = "-";
    }
}

function toggleInfo3() {
    const content3 = document.getElementById('BurgerContent3');
    const btnnew2 = document.querySelector('.expand-btn3');
    if (content3.style.display === "none") {
        content3.style.display = "block";
        btnnew2.textContent = "+";
    } else {
        content3.style.display = "none";
        btnnew2.textContent = "-";
    }
}


function toggleInfo4() {
    const content4 = document.getElementById('BurgerContent5');
    const btnnew3 = document.querySelector('.expand-btn4');
    if (content4.style.display === "none") {
        content4.style.display = "block";
        btnnew3.textContent = "+";
    } else {
        content4.style.display = "none";
        btnnew3.textContent = "-";
    }
}







function OpenBurger() {


    const BurgerContent = document.getElementById('BurgerContent');
    if (BurgerContent.style.display === "block") {
        BurgerContent.style.display = "none";
    } else {
        BurgerContent.style.display = "block";
    }


}







function OpenBurger2() {
    
const Burg = document.getElementById('BurgerContent4')
if(Burg.style.display === 'none'){
    Burg.style.display = 'block'
}else{
    Burg.style.display = 'none'
}


}












function OpenBurger4() {
    
    const Burg = document.getElementById('BurgerContent5')
    if(Burg.style.display === 'none'){
        Burg.style.display = 'block'
    }else{
        Burg.style.display = 'none'
    }
    
    
    }





function OpenBurger3(){
const system = document.getElementById('BurgerContent3')

if(system.style.display === 'none'){
    system.style.display = 'block'
}else{
    (system.style.display = 'none')
}


}














