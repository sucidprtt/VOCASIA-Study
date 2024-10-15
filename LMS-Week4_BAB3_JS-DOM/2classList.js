// add menambahkan
var title = document.querySelector('#title')
title.classList.add('highlight')

// remove menghilangkan
var button = document.querySelector('.btn')
button.classList.remove('btn')

// benar hilanng
// var button = document.querySelector('.btn')
// if (button.classList.contains('btn')){
//     button.classList.remove('btn')
// }

// tidak hilang
// var button = document.querySelector('.btn')
// if (button.classList.contains('tombol')){
//     button.classList.remove('btn')
// }

// replace menggantikan
var listItems = document.querySelectorAll('.item')
listItems.forEach(function(item){
   item.classList.replace('item', 'new-item')
})

// toggle, !add || !remove, bisa menambahkan dan menghilangkan saat terjadi interaksi pengguna
var checkbox = document.querySelector('input[type="checkbox"]')
checkbox.addEventListener('change', function(){
   checkbox.classList.toggle('styled-checkbox')
})