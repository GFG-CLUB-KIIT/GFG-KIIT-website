window.onload = function () {
    
  const contact_form = document.getElementById("contact-us");

  contact_form.addEventListener("submit", function (evt) {
    evt.preventDefault();//preventing default form submission

    //getting values from the contact form
    const user_email = document.getElementById("email").value;
    const user_msg = document.getElementById("message").value;

    let form_data = {
      email: user_email,
      message: user_msg,
    };

    // console.log({ form_data });

    //making an post request
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      // print JSON response
      if (xhr.status >= 200 && xhr.status < 300) {
        // parse JSON
        const response = JSON.parse(xhr.responseText);
        if(response.ok===true){
            alert("form submitted successfully!!");
            contact_form.reset();
        }else{
            alert("Oops! error occured while submtting the form");
        }
      }
    };

    xhr.open("POST", "https://formspree.io/f/moqyagbz");

    // set `Content-Type` header
    xhr.setRequestHeader("Content-Type", "application/json");

    // send rquest with JSON payload
    xhr.send(JSON.stringify(form_data));
  });
};