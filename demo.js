function bake(degrees) {
    var message;

    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (degrees < 100) {
        message = "I'm not a refrigerator!";
    } else {
        message = "That's very comfortable temperature for me.";
        // setMode('bake');
        // setMode(degrees);
    }
    
    return message;
    
    
}

var status = bake(350);
console.log(status)
