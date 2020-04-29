//Enable Logging
let cosa = async () => {
    PhonePe.PhonePe.loggingEnabled = true;
    let sdk = await PhonePe.PhonePe.build(PhonePe.Constants.Species.web);
    PhonePe.PhonePe.build(PhonePe.Constants.Species.web).then((sdk) => {
        sdk.fetchAuthToken().then((res) => {
            console.log("Grant token data received = " + res)
            alert(res)
        }).catch((err) => {
            console.log("Error occurred while fetching the grant token: " + err)
            alert(err)
        })
    })
}
cosa();