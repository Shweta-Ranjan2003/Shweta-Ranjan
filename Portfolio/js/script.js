 let header = document.querySelector('header');

 window.addEventListener('scroll', () => {
     if (window.scrollY > 900) {
         header.style.position = 'sticky';
         header.style.top = '0';
        } else {
            header.style.position = 'static'; // Reset to the default position
     }
 });


var typed = new Typed('#element', {
    strings: ['Web developer', 'Web designer','Botni','Bot','Aabiee','Ha Halo'],
    typeSpeed: 70,
    loop:true
});

//Parallax effect
let home=document.querySelector('.big-container');
window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    home.style.marginTop=value+'px';
})


const follower = document.querySelector('#minobject');

window.addEventListener('mousemove', (e) => {
    // Get the current mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Set the follower position to match the mouse position
    follower.style.left = mouseX + 'px';
    follower.style.top = mouseY + 'px';
});


