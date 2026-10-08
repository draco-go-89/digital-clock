function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString('en-US', {
        wedday:'long', year: 'numeric',
        month: 'long', day: 'numeric'
    });
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML =date;
}
setInterval(updateClock,1000);
updateClock();