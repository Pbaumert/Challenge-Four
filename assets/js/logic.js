document.getElementById('toggle-theme').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});
