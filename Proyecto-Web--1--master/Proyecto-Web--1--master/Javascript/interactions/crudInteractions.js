

const contactService = new ContactService()
const tableBody = document.getElementById("tableBody")

function setUsersInTable() {
    const contacts = contactService.get()
    let html = ``

    if (contacts.length > 0) {
        contacts.forEach(contact => {
            html = html + `
            <tr>
                <td> ${contact.id} </td>
                <td> ${contact.firstName} </td>
                <td> ${contact.lastName} </td>
                <td> <a href="mailto:${contact.email}">${contact.email}</a> </td>
                <td>
                    <button class="btn btn-warning" data-contact="${contact.id}" >Delete</button>
                </td>
            </tr>
            `
        });
    }
    tableBody.innerHTML = html
}

setUsersInTable()

tableBody.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-contact")

    if (!id) return

    contactService.delete(id)

    setUsersInTable()
    new Notification("Se ha eliminado un nuevo usuario")
})

const form = document.getElementById("transactionForm")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const contact = Object.fromEntries(new FormData(e.target))
    contactService.insert(contact)
    form.reset()
    setUsersInTable()

    new Notification("Se ha creado un nuevo usuario")
})

const cleanButton = document.getElementById("cleanButton")

cleanButton.addEventListener("click", (e) => {
    form.reset()
})
