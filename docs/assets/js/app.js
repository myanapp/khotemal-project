const host = 'https://api-tmp-etherio.herokuapp.com'

function auth(username, password, callback, mode = 'login') {
    let xhr = new XMLHttpRequest()
    let form = new FormData()
    form.append('username', username)
    form.append('password', password)
    xhr.onload = function () {
        if (typeof callback === 'function') {
            return callback.call(this)
        }
        return console.log(this)
    }
    xhr.open('POST', `${host}/auth/${mode}`, true)
    xhr.send(form)
}