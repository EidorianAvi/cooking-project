const searchParams = new URLSearchParams(window.location.search)
const userId = searchParams.get('id')




fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(userSelection)

const userSelectBar = document.querySelector('#user-selection')

function userSelection(users){
    users.forEach(user =>{
        let option = document.createElement('option')
        option.value = user.id;
        option.textContent = user.name;
        userSelectBar.append(option)
    })
}


