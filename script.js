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
    document.querySelectorAll(".picture-block").forEach(item => item.style.display="none");
    document.querySelectorAll(".tag").forEach(item => item.classList.remove("active"));
    
    switch (filterName) {
        case "all":
            document.querySelectorAll(".picture-block").forEach(item => item.style.display="block");
            document.querySelector(".all-tag").classList.add("active")
            break;

        case "web":
            document.querySelectorAll(".web").forEach(item => item.style.display="block");
            document.querySelector(".web-tag").classList.add("active")
        break;

        case "graph":
            document.querySelectorAll(".graph").forEach(item => item.style.display="block");
            document.querySelector(".graph-tag").classList.add("active")
        break;

        case "art":
            document.querySelectorAll(".art").forEach(item => item.style.display="block");
            document.querySelector(".art-tag").classList.add("active")
        break;
    
        default:
            break;
    }
}