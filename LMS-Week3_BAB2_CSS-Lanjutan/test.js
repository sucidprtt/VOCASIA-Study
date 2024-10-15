//Event Handling dengan Interkasi Pengguna

// cuma bisa manggil neken button q aja karena yaang di eksekusi lebih awal
// var myElement = document.querySelector("button")

// myElement.addEventListener('click', handleClick) 

// function handleClick(){
//     alert("Hello")
// }


// menambahkan all di QS, kalau tanpa argumen index [] tidak bisa dipanggil, 
// bisa ditekan sesuai index yang diisi, jadi cuma satu aja juga tapi ga cuma q
// var myElement = document.querySelectorAll("button") [2]

// myElement.addEventListener('click', handleClick) 

// function handleClick(){
//     alert("Hello")
// }

// bisa mencet semuanya dengan pengkondisian
// var numberOfKeys = document.querySelectorAll(".key").length

// function handleClick(){
//     alert("Hello")
// }

// for (var i = 0; i < numberOfKeys; i++){
//     document.querySelectorAll(".key")[i].addEventListener('click', handleClick) 
// }


//--------------------------------------------------------------------------------------
//Keyboard Event Handling

// agar bisa ditekan dan berganti warna menyala yang ditargetkan ke style .key-active
var numberOfKeys = document.querySelectorAll("button").length

function handleClick(clickedElement){
    clickedElement.classList.add('active')
}

for (var i = 0; i < numberOfKeys; i++){
    document.querySelectorAll("button")[i].addEventListener('click', function(event){
        handleClick(event.target)
    }) 
}

// tambahin fungsi berikut biar bisa ditekan keyboard
document.addEventListener('keydown', function(event){
    const key = event.key;
    const keyElement = document.querySelector(`.${key.toLowerCase()}.key`);
    if (keyElement){
        keyElement.classList.add('active')
    }
})

document.addEventListener('keyup', function(event){
    const key = event.key;
    const keyElement = document.querySelector(`.${key.toLowerCase()}.key`);
    if (keyElement){
        keyElement.classList.remove('active')
    }
})

