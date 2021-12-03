contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get data
    const email = document.getElementById('email').value,
    subject = document.getElementById('subject').value, 
    message = document.getElementById('message').value,
    url = `http://localhost:9005`;
    


    // Pass data into object 
    const data = { email, subject, message };


    // Create request object
    const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });


    // Pass request object to 'fetch'
    fetch(request)
        .then((res) => res.json())
        .then((res) => {
            alert(res.message);
        }
    )
});