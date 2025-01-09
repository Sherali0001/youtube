const link = document.querySelector('.main-sideba-a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // Default harakatni to'xtatish (sayt qayta yuklanmasligi uchun)
    link.classList.add('active'); // "active" sinfini qo'shish
});