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
