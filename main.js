document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.querySelector('#name');
    const userName = document.querySelector('#username');
    const userAvatar = document.querySelector('#avatar');
    const responsive = document.querySelector('#responsive');
    const userFollowers = document.querySelector('#followers');
    const userFollowing = document.querySelector('#following');
    const userLink = document.querySelector('#link');

    fetch('https://api.github.com/users/BrunoSantosprogrammer')
        .then(function (res) {
            return res.json();
        })

        .then(function (json) {
            nameElement.innerText = json.name;
            userName.innerText = json.login;
            userAvatar.src = json.avatar_url;
            userFollowers.innerText = json.followers;
            userFollowing.innerText = json.following;
            responsive.innerText = json.public_repos;
            userLink.href = json.html_url;
        })
})