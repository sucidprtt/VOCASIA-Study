// tambah elemen
document.getElementById('create').addEventListener('click', function() {
    var newItem = document.createElement('div')
    newItem.textContent = 'New Item'
    newItem.className = 'item'
    document.getElementById('content').appendChild(newItem)
});

// hapus elemen item1
document.getElementById('remove').addEventListener('click', function(){
    var itemToRemove = document.getElementById('item1')
    if (itemToRemove){
        document.getElementById('content').removeChild(itemToRemove)
        // tidak support di semua browser
        // itemToRemove.remove()
    }
})

// ubah elemen item1
document.getElementById('replace').addEventListener('click', function(){
    var newItem = document.createElement('div')
    newItem.textContent = 'Replaced Item'
    newItem.className = 'item'
    var itemToReplace = document.getElementById('item2')
    if (itemToReplace){
        document.getElementById('content').replaceChild(newItem, itemToReplace)
    }
})