
// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))

// const url = 'https://jsonplaceholder.typicode.com/users';

function loadData () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responsse => responsse.json())
    .then(data => console.log(data))
}