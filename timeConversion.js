
function timeConversion(s) {

    let [hour, min, seconds] = s.split(":");

    let militaryTime = "";


    if(seconds.includes("PM")){

        if(hour != parseInt(12)){
            hour =  hour =  String(parseInt(hour) + 12);
        }



        seconds = seconds.split("PM")[0]
    } else {

        if(hour == parseInt(12)){
            hour = String("00")
        }

        seconds = seconds.split("AM")[0]
    }


    militaryTime = hour + ":" + min + ":" +seconds;

    return militaryTime;

}

console.log(timeConversion('11:01:00PM'))