const searchParams = new URLSearchParams(window.location.search)
const user_id = searchParams.get('id')


fetch(`http://localhost:3000/users/${user_id}`)
    .then(response => response.json())
    .then(console.log)