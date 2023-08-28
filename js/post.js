
const link = 'https://jsonplaceholder.typicode.com/posts';

function displayPost () {
    fetch(link)
    .then( res => res.json())
    .then( data =>  totalPost(data))
}

function totalPost (posts) {
    const div = document.getElementById('section-container');
    for ( const post of posts){
        console.log(post);
       const postDiv = document.createElement('div');
       postDiv.classList.add("post");
       postDiv.innerHTML = `
        <h4> user: ${post.id}</h4>
        <h5> title: ${post.title}</h5>
        <p> description: ${post.body}</h5>
       `
       div.appendChild(postDiv);

    }
}

displayPost()