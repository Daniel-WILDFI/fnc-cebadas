document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario (enviar)

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Crear el enlace mailto con los valores del formulario
    const mailtoLink = `mailto:cebadas@sellin.uy?subject=Mensaje de ${name}&body=${message}`;

    // Abrir el cliente de correo con el mailto
    window.location.href = mailtoLink;
});
