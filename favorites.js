const searchParams = new URLSearchParams(window.location.search)
const user_id = searchParams.get('id')

console.log(user_id)

fetch(`http://localhost:3000/users/${user_id}`)
    .then(response => response.json())