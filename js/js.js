// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) і генерує список з елементів:

const list = document.getElementById('list')

function generateList(array) {
    const ul = document.createElement('ul')
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        if (Array.isArray(array[i])) {
            li.appendChild(generateList(array[i]))
        } else {
            li.innerHTML += array[i]
        }
        ul.appendChild(li)
        list.appendChild(ul)
    }
    return ul
}


generateList([1,2, [ 1,2, [1,2,4,5]]])


// const ul = document.createElement('ul');
// for (let i = 0; i < array.length; i++){
//     const newArray = array[i];
//     if (Array.isArray(newArray)){
//         const li = document.createElement('li');
//         ul.appendChild(li);
//         for (let j = 0; j < newArray.length; j++){
//             li.innerHTML += newArray[j]
//         }
//     }
// }
// list.appendChild(ul)

// for (let i in array){
//     for (let j in array[i]){
//         const li = document.createElement('li');
//         li.innerHTML += array[i][j]
//         ul.appendChild(li)
//         list.appendChild(ul)
//     }
// }


// array.forEach(el => {
//     const li = document.createElement('li');
//     li.innerHTML += el
//     ul.appendChild(li)
// })
// list.appendChild(ul)


// array.forEach((number, i) => {
//     ul.innerHTML += ` < li > ${i} ${number} < /li>`

// });
// list.appendChild(ul)