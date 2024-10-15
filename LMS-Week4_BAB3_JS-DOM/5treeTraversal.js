// traversal parent elemen ke refrensi child elemet
// var firstChild = document.getElementById('firstChild')
// var parent = firstChild.parentNode
// console.log(parent)

// mengembalikan text yang tidak tampil/spasi diantara elemtnya
// var firstChild = document.getElementById('firstChild')
// var parent = document.getElementById('parent')
// var children = parent.childNodes
// console.log(children)

// menggembalikan element yang terlihat saja
// var firstChild = document.getElementById('firstChild')
// var parent = document.getElementById('parent')
// var elementChild = parent.children
// console.log(elementChild)

// mengembalikan elemen jarak yaitu text
// var nextSibling = firstChild.nextSibling
// console.log(nextSibling)

// mengembalikan elemet selanjutnya, bukan text
// var nextElementSibling = firstChild.nextElementSibling
// console.log(nextElementSibling)

// element di next, terus elemen sebelum, jadi elemen yang dipanggil keluarannya sama
// jika dipanggil anak1, prev anak2 yaitu anak1
// var nextElementSibling = fisrtChild.nextElementSibling
// var previousElementSibling = nextElementSibling.previousElementSibling
// console.log(previousElementSibling)

// mengembalikan element sebelumnya
var previousElementSibling = thirdChild.previousElementSibling
console.log(previousElementSibling)
