const shows = document.querySelectorAll('.show');

shows.forEach(show => {
    show.addEventListener('click', () => {
        removeActiveClasses();
        show.classList.add('active');
    });
});

function removeActiveClasses() {
    shows.forEach(show =>{
        show.classList.remove('active');
    });
}