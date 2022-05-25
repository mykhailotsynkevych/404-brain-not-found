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
