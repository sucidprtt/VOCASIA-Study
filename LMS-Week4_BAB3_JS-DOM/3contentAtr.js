var draggableAttr = document.createAttribute('draggable')
draggableAttr.value = true

document.getElementById('title').textContent = "Selamat Datang"

document.querySelector('.btn').addEventListener('click', function(){
    document.getElementById('title').textContent = "Tombol telah di klik!"
})

// mereplace anak elemen digabung ke induk elemen
// document.getElementById('list').innerHTML = `
// <li class="item"><a href="http://www.bing.com">Bing</a></li>
// `

document.querySelector('#list .item a').setAttribute('href', 'https://www.yahoo.com')

var input = document.querySelector('input[type="checkbox"]')

input.setAttribute('checked', true)
// input.setAttribute('draggable', true)
input.setAttributeNode(draggableAttr)
