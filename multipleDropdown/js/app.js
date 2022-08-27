console.log("Working");


const selectAll = document.querySelectorAll(".selected");

selectAll.forEach((selected) => {
    
    const selectBox = selected.nextElementSibling;

    const option = selectBox.querySelectorAll(".option");
    selected.addEventListener("click", () => {
        if (selectBox.classList.contains("active")) {
            selectBox.classList.remove("active");
        }
        else {
            let currentActive = document.querySelector(".select-box.active");
            if (currentActive) {
                currentActive.classList.remove("active");
            }
        selectBox.classList.add("active");

        }
    });

    option.forEach(op => {
        op.addEventListener("click", () => {
            selected.querySelector("p").innerHTML = op.querySelector("label").innerHTML;
            selectBox.classList.remove("active");
        })  
    })
})