function SendMail() {
    var params = {
      from_name: document.getElementById("fullName").value,
      from_email: document.getElementById("email_id").value,
      message: document.getElementById("message").value,
    };
    emailjs
      .send("service_z0g8u64", "template_zrmv1dq", params)
      .then(function (res) {
        alert("Your message has been sent successfully" + res.status);
      });
  }
  