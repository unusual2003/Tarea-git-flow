
class ContactService {

    constructor(){
        this.repository = new Repository()
    }

    get() {
        return this.repository.getItem("contacts") ?? []
    }

    insert(contact = new Contact()) {
        const contacts = this.get()
        
        
        contacts.length > 0 
         ? contact.id = contacts[contacts.length - 1].id + 1
         : contact.id = 0

        contacts.push(contact)
        this.repository.insert("contacts", contacts)
    }

    delete(contactId) {
        const contacts = this.repository.getItem("contacts")
        const newContacts = contacts.filter((contact) => {
            return contact.id != contactId
        })

        this.repository.insert("contacts",newContacts)
    }
}