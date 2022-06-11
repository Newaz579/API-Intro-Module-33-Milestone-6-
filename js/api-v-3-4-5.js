function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1') //fetch mane tene ana. eikhane link ta diye amra manuser server tke data antesi. 
        .then(response => response.json()) // eiline e amra then diye response likhbo pore response ta json e convert korbo.
        .then(json => console.log(json)); //erpor ei line e json ta k consol.log() korbo. jodi json er jaigai amra chaile data o dite pari taile console.log() e amra data likhe dibo

}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data)); //amra eikhane console.log() na kore ekta function k call diye data gula k parameter hisabe oi funciton er kase pathai dite pari. erpore oi function data gula k jemon icche temon korbe.
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}

function displayUsers(data) {
    // console.log(data); // amra j parameter tke data gula paisi oigula console.log() kore dicchi apatoto.
    const ul = document.getElementById('users');
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerHTML = `Name: ${user.name} email: ${user.email}`
        ul.appendChild(li);
        //eikhane kaj hoyeche server tke data gula niye page e show kora
    }
}