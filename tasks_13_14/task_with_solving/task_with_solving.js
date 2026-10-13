function verify() {
    console.log("a")
    let a = parseFloat(elementA.value)
    console.log(a)

    if (a < 61) {
        result = a
        check = true;
    }
    if (a > 100) {
        result = 0
        check = true;
    }
    if (61 <= a && a <= 100) {
    result = a ** 4
    check = true;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

let result;
let check;

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)