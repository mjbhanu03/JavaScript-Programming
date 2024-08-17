function validate() {
    let user = document.getElementById("c").value;
    let user2 = document.getElementById("c");
    let re = /^[7-9][0-9]{9}$/;
    if (re.test(user)) {
        alert("done");
        return true;
    } else {
        user2.classList.add("error");
        return false;
    }
}

window.onclick = function (event) {
    if (event.target.matches('#c')) {
        document.getElementById("c").classList.remove("error");
    }
}

