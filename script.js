function toggleMenu() {
  const menu = document.querySelector(".small-nav-links");
  const icon = document.querySelector(".ham-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Email.js so users can send email

const contactForm = document.getElementById("contact-form");
contactMessage = document.getElementById("contact-message");
const sendEmail = (e) => {
  e.preventDefault();
  // need serviceId - templateID - #form - publicKey
  // return a promise
  emailjs
    .sendForm(
      "service_2mg1v4r",
      "template_iyl3t1g",
      "#contact-form",
      "0lpcDxsL9se7Fq93v"
    )
    .then(
      () => {
        // show successfull message
        contactMessage.classList.toggle("success");

        contactMessage.textContent = "Message sent Successfully✅ ";
        // remove message
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        // have to clear the input fields
        contactForm.reset();
      },
      () => {
        // if message wasn't sent show the error
        contactMessage.classList.toggle("error");
        contactMessage.textContent = "Message not sent (service Error ❌";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);
