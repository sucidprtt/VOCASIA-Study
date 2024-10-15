var title = document.querySelector('#title')
title.style.color = 'blue'
title.style.fontSize = '36px'
title.style.textAlign = 'center'

var button = document.querySelector('.btn')
button.style.backgroundColor = 'green'
button.style.color = 'white'
button.style.border = 'none'
button.style.padding = '10px 20px'
button.style.borderRadius = '20px'

// check item dengan console
// var listItems = document.querySelectorAll('#list .item')
// console.log(listItems)

var listItems = document.querySelectorAll('#list .item')
listItems.forEach(function(item){
    item.style.fontWeight = 'bold'
    item.style.marginBottom = '10px'
})