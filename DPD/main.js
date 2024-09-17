const interiorSlider = document.querySelector(".sliding-img-wrapper #interior-slider");
const interiorBeforeImage = document.querySelector(".sliding-img .interior");

interiorSlider.addEventListener("input", (val) => { 
    let sliderValue = val.target.value + "%";
    interiorBeforeImage.style.width = sliderValue;
})
const exteriorSlider= document.querySelector(".sliding-img-wrapper #exterior-slider");
const exteriorBeforeImage = document.querySelector(".sliding-img .exterior");

exteriorSlider.addEventListener("input", (val) => { 
    let sliderValue = val.target.value + "%";
    exteriorBeforeImage.style.width = sliderValue;
})
