const getDateAndTime = async (timezone) => {
    const response = await fetch('http://worldclockapi.com/api/json/' + timezone +  '/now', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.json()

    let date, TimeNzone 
    [date, TimeNzone] = data.currentDateTime.split("T")
  
    let time1, time2
  if (TimeNzone.includes('-')){
        [time1, time2] = TimeNzone.split('-')
  
        document.getElementById("time").innerHTML = "The current time is " + time1;
        document.getElementById("timeZone").innerHTML = "The time zone is  -" + time2;
        document.getElementById("date").innerHTML = "The date is " + date;
      }
  
  else if (TimeNzone.includes('+')){
      [time1, time2] = TimeNzone.split('+')
        document.getElementById("time").innerHTML = "The current time is " + time1;
        document.getElementById("timeZone").innerHTML = "The time zone is +" + time2;
        document.getElementById("date").innerHTML = "The date is " + date;
  }
  
  else if (TimeNzone.includes('Z')){
      [time1, time2] = TimeNzone.split('+')
        document.getElementById("time").innerHTML = "The current time is " + time1.replace("Z", "");
        document.getElementById("timeZone").innerHTML = "The time zone is +00:00";
        document.getElementById("date").innerHTML = "The date is " + date;
  }
  
  else{
      document.getElementById("time").innerHTML = "Got invalid parameters from WorldClockAPI";
  }
    
  }