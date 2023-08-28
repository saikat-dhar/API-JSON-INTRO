
const url = 'https://jsonplaceholder.typicode.com/photos';

function totalData () {
    fetch(url)
    .then(res => res.json())
    .then(data => userData(data))
}

function userData (data) {
    const ul = document.getElementById('item-list');
    for ( const user of data) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.url;
        ul.appendChild(li);
    }
}