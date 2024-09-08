document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            if (!username || !title || !content) {
                alert('Please fill out all fields.');
                return;
            }

            const posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push({ username, title, content });
            localStorage.setItem('posts', JSON.stringify(posts));

            window.location.href = 'posts.html';
        });
    } else {
        console.error('Form element not found!');
    }
});
