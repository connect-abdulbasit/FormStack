let fname = document.forms["myForm"]["Firstname"];
let lname = document.forms["myForm"]["LastName"];
let email = document.forms["myForm"]["Email"];
let jobRoll = document.forms["myForm"]["jobRoll"];
let add = document.forms["myForm"]["Address"];
let city = document.forms["myForm"]["City"];
let pinCode = document.forms["myForm"]["Pincode"];
let date = document.forms["myForm"]["date"];
let img = document.forms["myForm"]["upload"];
let btn = document.querySelector(".buttonContainer button");
let Dname = document.querySelector(".Dname");
let Demail = document.querySelector(".Demail");
let Djob = document.querySelector(".Djob");
let DAddress = document.querySelector(".DAddress");
let Dcity = document.querySelector(".Dcity");
let DpinCode = document.querySelector(".DpinCode");
let Ddate = document.querySelector(".Ddate");
const applyForm = document.querySelector("#applyform");
const details = document.querySelector(".details");
let span = document.querySelectorAll("span");
let validateForm = () => {
    let error = 0;
    if (fname.value == "" || fname.value == null) {
        fname.style.border = "2px solid red";
        error++;
    }
    if (lname.value == "" || lname.value == null) {
        lname.style.border = "2px solid red";
        error++;

    }
    if (email.value == "" || email.value == null) {
        email.style.border = "2px solid red";
        error++;

    }
    if (jobRoll.value == "" || jobRoll.value == null) {
        jobRoll.style.border = "2px solid red";
        error++;

    }
    if (add.value == "" || add.value == null) {
        add.style.border = "2px solid red";
        error++;

    }
    if (city.value == "" || city.value == null) {
        city.style.border = "2px solid red";
        error++;

    }
    if (pinCode.value == "" || pinCode.value == null) {
        pinCode.style.border = "2px solid red";
        error++;

    }
    if (date.value == "" || date.value == null) {
        date.style.border = "2px solid red";
        error++;

    }
    if (img.value == "" || img.value == null) {
        img.style.border = "2px solid red";
        error++;

    }
    if (error == 0) {
        Dname.innerText = Dname.innerText.concat(fname.value, " ", lname.value);
        Demail.innerText = Demail.innerText.concat(" ", email.value);
        DAddress.innerText = DAddress.innerText.concat(" ", add.value);
        Dcity.innerText = Dcity.innerText.concat(" ", city.value);
        DpinCode.innerText = DpinCode.innerText.concat(" ", pinCode.value);
        Djob.innerText = Djob.innerText.concat(" ", jobRoll.value);
        Ddate.innerText = Ddate.innerText.concat(" ", date.value);
        applyForm.classList.add("hide");
        details.classList.remove("hide");

    } else {
        error = 0;

    }
    return false;
}
let checkPageFocus = () => {
    let element = document.activeElement;
    if (element === fname && fname.value !== "") {
        fname.style.border = "1px solid grey";
    } else if (element === lname && lname.value !== "") {
        lname.style.border = "1px solid grey ";
    } else if (element === email && email.value !== "") {
        email.style.border = "1px solid grey ";
    } else if (element===jobRoll&&jobRoll!=="") {
        jobRoll.style.border="1px solid grey";
    } else if (element === add && add.value !== "") {
        add.style.border = "1px solid grey ";
    } else if (element === city && city.value !== "") {
        city.style.border = "1px solid grey ";
    } else if (element === pinCode && pinCode.value !== "") {
        pinCode.style.border = "1px solid grey ";
    } else if (element === date && date.value !== "") {
        date.style.border = "1px solid grey ";
    } else if (element === img && img.value !== "") {
        img.style.border = "1px solid grey ";
    }
}
let req = () => {
    if (fname.value == "" || fname.value == null) {
        span[0].innerText = "*";
    } else {
        span[0].innerText = "";
    }
    if (lname.value == "" || lname.value == null) {
        span[1].innerText = "*";
    } else {
        span[1].innerText = "";
    }
    if (email.value == "" || email.value == null) {
        span[2].innerText = "*";
    } else {
        span[2].innerText = "";
    }
    if (jobRoll.value == "" || jobRoll.value == null) {
        span[3].innerText = "*";
    } else {
        span[3].innerText = "";
    }
    if (add.value == "" || add.value == null) {
        span[4].innerText = "*";
    } else {
        span[4].innerText = "";
    }
    if (city.value == "" || city.value == null) {
        span[5].innerText = "*";
    } else {
        span[5].innerText = "";
    }
    if (pinCode.value == "" || pinCode.value == null) {
        span[6].innerText = "*";
    } else {
        span[6].innerText = "";
    }
    if (date.value == "" || date.value == null) {
        span[7].innerText = "*";
    } else {
        span[7].innerText = "";
    }
    if (img.value == "" || img.value == null) {
        span[8].innerText = "*";
    } else {
        span[8].innerText = "";
    }
}
setInterval(checkPageFocus, 300);
setInterval(req, 100);
