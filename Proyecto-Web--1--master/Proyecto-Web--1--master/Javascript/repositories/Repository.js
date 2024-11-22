


class Repository {

    getItem(key) {
        const value = localStorage.getItem(key)
        return JSON.parse(value)
    }

    insert(key, value) {
        const object = JSON.stringify(value)
        localStorage.setItem(key, object)
    }

    delete(key) {
        localStorage.removeItem(key)
    }

}