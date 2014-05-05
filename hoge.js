const
    irkit = require('node-irkit'),
    localApi = irkit.getLocalApi("http://192.168.0.4"),
    webApi = irkit.getWebApi(),
    myRoomLight = '{"format":"raw","freq":38,"data":[17421,9061,1037,1232,935,3458,935,1190,1073,1190,1073,1190,1190,1190,1073,1190,935,3458,1037,3341,1037,1190,935,3458,1002,3458,1002,1111,1111,3341,968,3458,968,1150,1150,3458,1037,3341,1037,1275,1002,3458,1002,1190,1037,3341,1037,1150,1150,3341,1037,1190,935,1275,935,3458,1037,1190,1002,3458,1037,1232,935,3458,1111,1111,1111]}',
    myRoomLightMessage = JSON.parse(myRoomLight);
for (var a in localApi) {
    console.log(a);
}
localApi.postMessages(myRoomLightMessage, function(err) {

});