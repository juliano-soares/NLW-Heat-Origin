const linksRedesSocial = {
github: 'juliano-soares',
youtube: 'UC9yg06diEl3IyPyPOsDa_oQ',
facebook: 'julianoleonardosoares',
instagram: 'juliano_ls',
twitter: 'juliano_ls2'
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute("class")

        li.children[0].href = `https://${social}.com/${linksRedesSocial[social]}`
    }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksRedesSocial.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGithubProfileInfos()