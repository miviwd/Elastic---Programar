let messageSent = false

const sendEmail = () => {

    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const phoneInput = document.getElementById('phone')



    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;



    fetch('https://ael3wgw4ia2wa4ntvvc7cmfj6y0nxaan.lambda-url.us-west-2.on.aws/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
        }),
    }).then(() => {
        window.location.href = './agradecimentos.html'
    })
}