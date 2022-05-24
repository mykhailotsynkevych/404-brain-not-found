import './sass/main.scss';
// Modal window script
// data-modal-open - на кнопку открытия модального окна.
// data-modal-close - на кнопку закрытия модального окна.
// data-ancor-close на якорную ссылку
// data-modal - на бекдроп модального окна.
(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        closeAncorBtn: document.querySelector('[data-ancor-close]'),
        modal: document.querySelector('[data-modal]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeAncorBtn.addEventListener('click', toggleModal);
    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.modal.classList.toggle('is-hidden');
    }
})();
// Form script
// data-form-open - на кнопку открытия модального окна.
// data-form-close - на кнопку закрытия модального окна.
// data-form - на бекдроп модального окна.
(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-form-open]'),
        closeModalBtn: document.querySelector('[data-form-close]'),
        modal: document.querySelector('[data-form]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
        document.body.classList.toggle("form-open");
        refs.modal.classList.toggle('is-hidden');
    }
})();
// Scroll script
$(document).ready(function () {
    // Add smooth scrolling to all links
    $('a').on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                },
            );
        } // End if
    });
});

