fetch('https://api.github.com/orgs/nodejs')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) { return console.log(error); });
console.log(" Next example on using fetch API ");
fetch('https://api.github.com/orgs/odicforcesounds', {
    headers: new Headers({
        'User-agent': 'Mozilla/4.0 Custom User Agent'
    })
})
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) { return console.log(error); });
console.log(" next exampl? ");
