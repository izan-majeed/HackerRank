var btn = document.getElementById("btn");

btn.addEventListener("click",function() {
        var value = this.innerHTML;
        this.innerHTML = parseInt(value)+1;
});