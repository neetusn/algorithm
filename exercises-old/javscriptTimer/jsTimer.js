function eventHandler(){
    var spanEl = document.createElement("span");
    spanEl.setAttribute("class", "tool-tip");
    spanEl.innerText = "tooltip";
    document.querySelectorAll("div")[0].onmouseover = function () {
        this.appendChild(spanEl);
    };
    document.querySelectorAll("div")[0].onmouseout = function () {
        this.removeChild(spanEl);
    };
}