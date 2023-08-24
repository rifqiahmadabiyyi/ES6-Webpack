// function getName() {
//     if(true) {
//         let nama = 'Kineb'
//         console.log(nama);
//     } else {
//         console.log(nama);
//     }
// }

// getName();

// const Person = {
//     id : 1,
//     name : 'kineb'
// };

// Person.id = 2;


// console.log(Person);


// let members = ['kineb', 'iqi', 'rifqi']

// let membersIndex = members.map((member, index) =>  member + ' ' + index)

// console.log(membersIndex)

// let SekolahKoding = {
//     members : ['kineb', 'iqi', 'rifqi'],

//     getMembers() {
//         this.members.map((name) => {
//             console.log(this);
//         });
//     }

// };

// console.log(SekolahKoding.getMembers());

// createTag = (title, tag) => {
//     console.log(title + ' Bruh ' + tag);
// }

// createTag('test', 'testing')

// import * as app from './app'
// import forum from "./app/forum"

// console.log(forum)

let getMember = new Promise((resolve, reject) => {
    if(false) {
        resolve('berhasil')
    } 
        reject('gagal')
    
}).then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.log('Ini di dalam catch ' + msg)
})

console.log(getMember)
