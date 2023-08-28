
const friend = {
    name: 'saikat',
    age: 23,
    class: 'eleven',
    id: '14re345',
    
}
// const json = JSON.stringify(friend);
// console.log(json);
// const total = JSON.parse(json);
// console.log(total);


const object = {
    name: 'saikat',
    age: 23,
    job: 'web Developer',
    position: 'frontend-developer',
    address:{
        street: '15A / 24, h-45',
        city: 'Maijdi',
        zilla: 'Noakhali'
    }
}
const objectJson = JSON.stringify(object);
const objectParse = JSON.parse(objectJson);
console.log(objectParse);
console.log(objectJson);