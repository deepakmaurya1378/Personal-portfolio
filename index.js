function sendEmail() {
    alert("ok")
	Email.send({
	Host: "smtp.gmail.com",
	Username : "new",
	Password : "Itachi@123",
	To : 'deepakmaurya1378@gmail.com',
	From : "deepakmaurya1378@gmail.com",
	Subject : "email subject",
	Body : "email body",
	}).then(
		message => alert("mail sent successfully")
	);
}