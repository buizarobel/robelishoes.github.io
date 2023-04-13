let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = (event) =>{
  event.preventDefault();
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', (event) =>{
    event.preventDefault();
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', (event) =>{
    event.preventDefault();
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', (event) =>{
    event.preventDefault();
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

document.querySelectorAll('.fas.fa-heart').forEach(heart =>{
  heart.addEventListener('click', (event) =>{
    event.preventDefault();
  });
});

document.querySelectorAll('.fas.fa-eye').forEach(eye =>{
  eye.addEventListener('click', (event) =>{
    event.preventDefault();
  });
});

