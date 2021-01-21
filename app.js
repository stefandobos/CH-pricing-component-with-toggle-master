const toggleBtn = document.querySelector(".slider");
const yearly = Array.from(document.querySelectorAll(".yearly"));
const monthly = Array.from(document.querySelectorAll(".monthly"));
const chkBox = document.querySelector("input[type=checkbox]");

chkBox.focus();
let isMonthly = true;

let elePos = window.getComputedStyle(
	document.querySelector('.slider'), ':before'
).getPropertyValue('transform')

function toggleItems() {
    
    if (isMonthly) {
        monthly.forEach(element => {
            element.style.visibility = "hidden";
        })
        yearly.forEach(element => {
            element.style.visibility = "visible";
        })
        isMonthly = false;
    } else {
        monthly.forEach(element => {
            element.style.visibility = "visible";
        })
        yearly.forEach(element => {
            element.style.visibility = "hidden";
        })
        isMonthly = true;
    }

}

toggleBtn.addEventListener("click", () => {
    toggleItems();
})

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    
    if (keyName === " ") {       
        toggleItems();
    }
})