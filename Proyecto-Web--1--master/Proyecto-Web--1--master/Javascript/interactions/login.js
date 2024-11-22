
function login() {

    const username =  document.getElementById("username").value
    const password =  document.getElementById("password").value
    const loginService = new LoginService()

    loginService.login(username, password)

}

const form = document.getElementById("loginForm")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    login()
})