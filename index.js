const input = document.querySelectorAll(".formcontrol");
const applyForm = document.querySelector("#applyform");
const details = document.querySelector(".details");
let empty = (a, b) => {
    a.style.border = "1px solid red";
    b.classList.remove("hide");
}
let full = (a, b) => {
    a.style.border = "1px solid grey";
    b.classList.add("hide");
}
let check = (element1) => {
    if (element1.value == "" || element1.value == null) {
    return 0;
    } else {
        return 1;
    }
}
input.forEach((e) => {
    e.children[1].addEventListener("blur", () => {
    let x= check(e.children[1]);
    if (x==0) {
       empty(e.children[1], e.children[0].children[0]) 
    }else{
        full(e.children[1], e.children[0].children[0]) 
    }
    });
})
let detail=()=>{
    details.children[1].innerText+=` ${input[0].children[1].value} ${input[1].children[1].value}`;
    for (let index = 2; index < 8; index++) {     
    details.children[index].innerText+=` ${input[index].children[1].value}`;       
    }
}
let validateForm = () => {
    error=0;
    input.forEach((e)=>{
    let y = check(e.children[1]);
    if (y==0) {
        error=1;
    }
    })
    if (error==0) {
        applyForm.classList.add("hide");
        details.classList.remove("hide");
        detail();
        console.log("no error");
    }else{
        alert("Fill all the required inputs:");
    }
    return false;
}
