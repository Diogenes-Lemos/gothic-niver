const dataEnd = new Date("Oct 02, 2024 20:00:00");
const eventStamp = dataEnd.getTime();

const hourCounter = setInterval(function() {
    const now = new Date();
    const nowStamp = now.getTime();

    const timeToEvent = eventStamp - nowStamp;

    const daysToEvent = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));
    const hoursToEvent = Math.floor((timeToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesToEvent = Math.floor((timeToEvent % (1000 * 60 * 60)) / (1000 * 60));
    const secondsToEvent = Math.floor((timeToEvent % (1000 * 60)) / 1000);

    document.getElementById('counter').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;
    
    if (timeToEvent < 0) {
        clearInterval(hourCounter);
        document.getElementById('counter').innerHTML = 'Tarde demais';
    }
}, 1000);