fetch('https://api.github.com/orgs/odicforcesounds', {
  credentials: 'include',
})
.then(response => response.json())
.then(data => {
  console.log(data)
})
.catch(error => console.log(error))

