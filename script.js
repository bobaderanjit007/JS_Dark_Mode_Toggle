inputEl = document.querySelector(".input");
bodyEl = document.querySelector("body");
sunEl = document.querySelector(".sunimg");
moonEl = document.querySelector(".moonimg");
inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();

function updateBody()
{
    if(inputEl.checked)
    {
        bodyEl.style.background = "black";
        moonEl.style.visibility = "hidden";
        sunEl.style.visibility = "visible"
    }
    else{
        bodyEl.style.background = "white";
        moonEl.style.visibility = "visible";
        sunEl.style.visibility = "hidden"

    }
}
inputEl.addEventListener("input", ()=>{
    updateLocalStorage();
    updateBody();
})

function updateLocalStorage()
{
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}