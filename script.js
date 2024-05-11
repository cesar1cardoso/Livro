let currentPage = 1;
const totalPages = 3;

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(`page${pageNumber}`).style.display = 'block';
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function toggleMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    const toggleButton = document.getElementById('toggleMode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
});