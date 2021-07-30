const filterItem = document.querySelector(".items");
const filterItems = document.querySelectorAll(".item");
const filterImg = document.querySelectorAll(".image");

console.log(filterItem)
console.log(filterItems)
console.log(filterImg)

window.onload = () => { //Run when window is loaded
    filterItem.onclick = (selectedItem) => { // selectedItem comes from clickEvent
        if (selectedItem.target.classList.contains("item")) { //if user clickElement has .item class do this:
            filterItem.querySelector(".active").classList.remove("active"); //remove active class in the first element "item" (first in the nav)
            selectedItem.target.classList.add("active"); // add active class to the selected item

            let filterName = selectedItem.target.getAttribute("data-name"); // Adds data-name to filterName
            console.log(filterName);

            filterImg.forEach((image) => { //for each image, getAttribute data-name
                let filterImages = image.getAttribute("data-name");
                //if user selected item data-name value is equal to image data-name value
                //or data-name: "All"
                if ((filterImages == filterName) || filterName == "all"){
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show")
                }
            });
        }       
    }
    for (let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)");
    }
}

const previewBox = document.querySelector(".preview-box");
previewImg = previewBox.querySelector("img");

console.log(previewBox)

function preview(element) {
    let selectedPrevImg = element.querySelector("img").src;
    previewImg.src = selectedPrevImg;
    console.log(selectedPrevImg);
    previewBox.classList.add("show"); // show the 
}
function hidePreview() {
    previewBox.classList.remove("show")
    previewBox.classList.add("hide");
}



