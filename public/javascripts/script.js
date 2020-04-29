//Enable Logging
let cosa = async () => {
    PhonePe.PhonePe.loggingEnabled = true;
    //let sdk = await PhonePe.PhonePe.build(PhonePe.Constants.Species.web);
    PhonePe.PhonePe.build(PhonePe.Constants.Species.web).then((sdk) => {
        sdk.fetchAuthToken().then(async (res) => {
            console.log("Grant token data received = " + JSON.stringify(res))
            let result = await sdk.seekPermission([PhonePe.Constants.Permission.READ_SMS, PhonePe.Constants.Permission.LOCATION,PhonePe.Constants.Permission.CAMERA])            
            sdk.getCurrentLocation()
                .then((location) => { 
                    alert("Location received with latitude = " + location.latitude + ' longitude = ' + location.longitude);
                    console.log("Location received with latitude = " + location.latitude + ' longitude = ' + location.longitude)
                })
                .catch((err) => { 
                    console.log("Error found when fetching location = " + err) 
            })

            sdk.getItem('app', 'key', null)
                .then((data) => {
                console.log('Value received = ' + data)
            })
                .catch((err) => {})

        }).catch((err) => {
            console.log("Error occurred while fetching the grant token: " + err)
            alert(err)
        })
    })
}
let logs = ()  => {
    // Overriding console object
    console = {};
    // Getting div to insert logs
    let logger = document.getElementById("logger");
    // Adding log method from our console object
    console.log = text =>
    {
        let element = document.createElement("div");
        let txt = document.createTextNode(text);
        element.appendChild(txt);
        logger.appendChild(element);
    }
}
logs();
cosa();