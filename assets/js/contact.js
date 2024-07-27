document.addEventListener('DOMContentLoaded', function() {
    const thisForm = document.querySelector('.php-email-form');

    if (!thisForm) return;

    // Counter to track the number of times the event listener is attached
    let eventListenerCount = 0;

    // Ensure the form is not already being submitted
    let isSubmitting = false;

    // Remove existing event listener before attaching a new one
    thisForm.removeEventListener('submit', submitHandler);

    // Define the submit handler function
    function submitHandler(event) {
        event.preventDefault(); // Prevent default form submission

        if (isSubmitting) {
            console.log('Form is already being submitted'); // Debugging: Log if already submitting
            return;
        }

        isSubmitting = true;
        thisForm.querySelector('button[type="submit"]').disabled = true; // Disable the submit button

        const formData = new FormData(thisForm);

        fetch(thisForm.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            thisForm.querySelector('.loading').classList.remove('d-block');

            if (data.success) {
                console.log('Email sent successfully'); // Debugging: Log success
                thisForm.querySelector('.sent-message').classList.add('d-block');
                thisForm.reset();
            } else {
                throw new Error(data.message || 'Form submission failed');
            }
        })
        .catch(error => {
            thisForm.querySelector('.loading').classList.remove('d-block');
            displayError(thisForm, error.message);
        })
        .finally(() => {
            // Re-enable the submit button and reset isSubmitting flag
            thisForm.querySelector('button[type="submit"]').disabled = false;
            isSubmitting = false;
        });
    }

    // Attach the submit handler to the form
    thisForm.addEventListener('submit', submitHandler);

    // Increment and log the event listener count
    eventListenerCount++;
    console.log(`Event listener attached ${eventListenerCount} times`);

    function displayError(thisForm, error) {
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
        console.error('Error:', error); // Debugging: Log errors
    }
});