var slideIndex = 1;
              showSlides(slideIndex);
          
              // Next/previous controls
              function plusSlides(n) {
                showSlides(slideIndex += n);
              }
          
              function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                if (n > slides.length) {slideIndex = 1}
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slideIndex-1].style.display = "flex";
              }

function switchFirstPhone() {
    document.querySelector(".phone-one").classList.toggle("phone-one-off");
}

function switchSecondPhone() {
    document.querySelector(".phone-two").classList.toggle("phone-two-off");
}

function togglePictureBlock(filterName) {
    document.querySelectorAll(".picture-block").forEach(item => item.style.order="4");
    document.querySelectorAll(".tag").forEach(item => item.classList.remove("active"));
    
    switch (filterName) {
        case "all":
            document.querySelector(".all-tag").classList.add("active")
            break;

        case "web":
            document.querySelectorAll(".web").forEach(item => item.style.order="1");
            document.querySelectorAll(".art").forEach(item => item.style.order="2");
            document.querySelector(".web-tag").classList.add("active")
        break;

        case "graph":
            document.querySelectorAll(".graph").forEach(item => item.style.order="1");
            document.querySelectorAll(".art").forEach(item => item.style.order="2");
            document.querySelectorAll(".second-pic").forEach(item => item.style.order="1");
            document.querySelector(".graph-tag").classList.add("active")
        break;

        case "art":
            document.querySelectorAll(".art").forEach(item => item.style.order="1");
            document.querySelectorAll(".first-pic").forEach(item => item.style.order="2");
            document.querySelectorAll(".web").forEach(item => item.style.order="3");
            document.querySelectorAll(".third-pic").forEach(item => item.style.order="2");
            document.querySelector(".art-tag").classList.add("active")
        break;
    
        default:
            break;
    }
}

function makeActive(event) {
    if(event.target.parentNode.classList.contains('active')) {
        event.target.parentNode.classList.remove('active');
    } else {
        document.querySelectorAll(".picture-block").forEach(item => item.classList.remove('active'));
        event.target.parentNode.classList.add('active');
    }
}


let modalWindow = document.getElementById('modal-window')
let formForCheck = document.forms[0];


function openModal() {
    if (!formForCheck.name.value.length) {
        alert('Please fill name field');
    } else if (!formForCheck.email.value.length ||
     !formForCheck.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert('Please check email adress');
    } else {
      document.getElementById('subject-text').innerHTML = formForCheck.subject.value ? `Тема: ${formForCheck.subject.value}` : 'Без темы';
      document.getElementById('description-text').innerHTML = formForCheck.description.value ? `Описание: ${formForCheck.description.value}` : 'Без описания';
      modalWindow.style.display='block';
    }
}

function closeModal() {
    modalWindow.style.display='none'
}

window.onclick = function(event) {
  if (event.target == modalWindow) {
    modalWindow.style.display = "none";
  }
}

function changeActiveHeaderElement() {
    document.querySelectorAll('.header-element').forEach(item => item.classList.remove('header-active'));
}

function setActiveElement(event) {
    setTimeout(function() {
        document.querySelectorAll('.header-element').forEach(item => item.classList.remove('header-active'));
        event.target.parentNode.classList.add('header-active');
    }, 100)
}