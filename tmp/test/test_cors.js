fetch('https://api.github.com/orgs/odicforcesounds', {
    credentials: 'include',
})
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) { return console.log(error); });
