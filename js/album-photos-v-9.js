function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data))
}
function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => console.log(data));
}
loadAlbums();
loadPhotos();
function displayAlbums(albums) {
    console.log(albums);
    const albumsTitle = document.getElementById('albums-photos');
    for (const album of albums) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumsTitle.appendChild(p);
    }
}