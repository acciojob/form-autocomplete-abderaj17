document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const inputs = form.elements;

    // Restore saved data from Local Storage
    Array.from(inputs).forEach(input => {
        if (input.name && localStorage.getItem(input.name)) {
            input.value = localStorage.getItem(input.name);
        }
    });

    // Save data on input change
    form.addEventListener("input", function (event) {
        if (event.target.name) {
            try {
                localStorage.setItem(event.target.name, event.target.value);
            } catch (e) {
                console.error("Local Storage is full or not accessible", e);
            }
        }
    });

    // Clear storage and reset form
    document.getElementById("clear").addEventListener("click", function () {
        localStorage.clear();
        form.reset();
    });
});
