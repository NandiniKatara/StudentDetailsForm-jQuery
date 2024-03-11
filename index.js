$(document).ready(function () {
    $("#addDetailsBtn").click(function () {
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const age = $("#age").val();
        const gender = $("#gender").val();
        const rollNo = $("#rollNo").val();
        const dob = $("#dob").val();
        const hobbies = $("#hobbies").val();
        if (firstName === "" || lastName === "" || age === "" || gender === "" || rollNo === "" || dob === "" || hobbies === "") {
            alert("Please fill in all fields.");
            return;
        }
        alert("Data added successfully !!")
        let personsArray = [];
        if (localStorage.getItem("studentDatabase")) {
            personsArray = JSON.parse(localStorage.getItem("studentDatabase"));
        }
        let personDetails = { rollNo: rollNo, firstName: firstName, lastName: lastName, age: age, gender: gender, dob: dob, hobbies: hobbies };
        personsArray.push(personDetails);
        let detailString = JSON.stringify(personsArray);
        localStorage.setItem("studentDatabase", detailString);
    });

    $("#getDetailsBtn").click(function (event) {
        event.preventDefault();
        const rollToSearch = $("#roll").val();
        let personsArray = [];
        if (localStorage.getItem("studentDatabase")) {
            personsArray = JSON.parse(localStorage.getItem("studentDatabase"));
        }

        const foundPerson = personsArray.find(person => person.rollNo == rollToSearch);
        const detailsContent = $("#detailsContent");
        if (foundPerson) {
            detailsContent.html(`
                <strong>Roll Number:</strong> ${foundPerson.rollNo}<br>
                <strong>First Name:</strong> ${foundPerson.firstName}<br>
                <strong>Last Name:</strong> ${foundPerson.lastName}<br>
                <strong>Age:</strong> ${foundPerson.age}<br>
                <strong>Gender:</strong> ${foundPerson.gender}<br>
                <strong>Date of Birth:</strong> ${foundPerson.dob}<br>
                <strong>Hoobies:</strong> ${foundPerson.hobbies}<br>
            `);
        } else {
            detailsContent.html("Student not found with this Roll Number.");
        }
    });
});
