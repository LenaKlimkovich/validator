const input = document.querySelector('.input');
const cards = document.querySelectorAll('.cards div');

export function showSystemLogo(system) {
    cards.forEach(card => {
        const sys = card.getAttribute('data-system');
       card.classList.toggle('active', sys === system);
    });
}

export function showValidationState(isValid) {
    input.classList.toggle('valid', isValid);
    input.classList.toggle('invalid', !isValid);
}
