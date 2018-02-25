var ReqUrl = "http://47.104.94.216/api/public/";

function lock_string(str) {
    var newLocker;
    newLocker = hex_md5("my58_" + hex_md5("my58_" + str));
    return newLocker;
}
function time_token() {
    var timestamp,md_token,timeArr=[];
    timestamp=Date.parse(new Date())/1000;
    md_token=lock_string(timestamp);
    timeArr.push(timestamp);
    timeArr.push(md_token);
    return timeArr;
}

