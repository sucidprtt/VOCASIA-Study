document.getElementById('submitButton').addEventListener('click', function(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var submittedDataDiv = document.getElementById('submittedData');
    submittedDataDiv.style.display = 'block';

    submittedDataDiv.innerHTML = `
    <h3>Data Anda: </h3>
    <p><strong>Name: </strong> ${name}</p>
    <p><strong>Email: </strong> ${email}</p>
    `
})