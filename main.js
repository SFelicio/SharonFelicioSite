const cursor = document.querySelector("#cursor"),
anchor = document.querySelectorAll("a");


//custom cursor
window.addEventListener("mousemove", (e) => {
    let x = e.pageX;
        y = e.pageY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
}) 

//anchor tag hover effect

anchor.forEach((anc) => {
    anc.addEventListener("mousemove", () => {
        cursor.style.transform = "scale(2)";
        cursor.style.animationName = "borderAnimate";
    });
    anc.addEventListener("mouseleave", () => {
        cursor.style.transform = "";
        cursor.style.animationName = "";
    });
});



//Web Design draggable slide

let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "dragging"
});

slider.addEventListener('mouseenter', () => {
    slider.style.cursor = "drag"
});

slider.addEventListener('mouseup', () => {
    slider.style.cursor = "drag"
});

window.addEventListener('mouseup', () => {
    pressed = false;
})

slider.addEventListener('mousemove', (e) => {
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX
    innerSlider.style.left = `${x-startx}px`;
});

function checkboundary(){
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left) > 0){
        innerSlider.style.left = '0px';
    }else if(inner.right < outer.right){
        innerSlider.style.left = `-$(inner.width - outer.width)px`;
    }
}


