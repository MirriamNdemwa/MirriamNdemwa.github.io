document.addEventListener("DOMContentLoaded", function () {

    //   welcome message based on the time
    const welcome = document.querySelector("h2");
    const hour = new Date().getHours();

    if (welcome) {
        if (hour < 12) {
            welcome.textContent = "Good morning! Welcome to my website";
        } else if (hour < 17) {
            welcome.textContent = "Good afternoon! Welcome to my website";
        } else {
            welcome.textContent = "Good evening! Welcome to my website";
        }
    }

    

});
