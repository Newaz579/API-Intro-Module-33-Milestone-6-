function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data));
}

function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => console.log(data));
}
function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => console.log(data));
}

function displayComments(data) {
    const loadComments = document.getElementById('load-comments');
    for (const comment of data) {
        // console.log(comment.name)
        const li = document.createElement('li');
        li.innerHTML = `name: ${comment.name} email: ${comment.name}`;
        loadComments.appendChild(li);
    }
}