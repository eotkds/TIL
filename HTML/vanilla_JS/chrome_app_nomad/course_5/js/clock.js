const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    /* String으로 감싸 된다. */
    const hour = date.getHours() + "";
    const minute = date.getMinutes() + "";
    const second = date.getSeconds() + "";

    clock.innerText = `${hour.padStart(2,"0")}:${minute.padStart(2,"0")}:${second.padStart(2,"0")}`;
}
getClock();
setInterval(getClock, 1000);

