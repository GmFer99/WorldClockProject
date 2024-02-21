const getDateAndTime = async (timezone) => {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://worldtimeapi.org/api/timezone/' + timezone, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        // If response is not OK, show an error message
        document.getElementById("time").innerHTML = "Error fetching time";
        document.getElementById("timeZone").innerHTML = "Please try again";
        document.getElementById("date").innerHTML = "Could not retrieve date";
        return;
    }

    const data = await response.json();

    // Extracting datetime and timezone from response
    let datetime = data.datetime;
    let timeZone = data.timezone;

    // Splitting datetime into date and time
    let [date, time] = datetime.split('T');
    let formattedTime = time.slice(0, 5); // Getting HH:MM format

    // Updating HTML elements
    document.getElementById("time").innerHTML = "The current time is " + formattedTime;
    document.getElementById("timeZone").innerHTML = "The time zone is " + timeZone;
    document.getElementById("date").innerHTML = "The date is " + date;
};

// Ensure DOM is fully loaded before attaching event listeners
// Ensure DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('parisTime').addEventListener('click', () => getDateAndTime('Europe/Paris'));
    document.getElementById('saoPauloTime').addEventListener('click', () => getDateAndTime('America/Sao_Paulo'));
    document.getElementById('sanFranciscoTime').addEventListener('click', () => getDateAndTime('America/Los_Angeles'));
});

