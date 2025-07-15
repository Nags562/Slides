
document.addEventListener('DOMContentLoaded', () =>{
    const slides = document.querySelectorAll('.slides');
    let currentSlide = 0;
    const slideDuration = 3000;

    function showSlide(index){
        slides.forEach((slides, i) =>{
            slides.classList.remove('active');
            if(i === index){
                slides.classList.add('active');
            }
        });
        slides[index].classList.add('active');
    }
    function nextSlide(){
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    setInterval(nextSlide, slideDuration);
});