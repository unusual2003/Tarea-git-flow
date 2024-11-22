
class EmailService {

    sendEmail(contactEmail, title, content) {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "20198882@itla.edu.do",
            Password: "password",
            To: contactEmail,
            From: "20198882@itla.edu.do",
            Subject: title,
            Body: content
        }).then(() => alert("Correo enviado"))
    }
}