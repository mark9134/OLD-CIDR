// ip address as string

var IpAddress = function(ip, mask) {
    this.ip = ip;
    this.netmask = mask;
};

IpAddress.prototype.ipToArray = function() {
    return (this.ip.split('.'));
}

function updateTable (rowType) {
   if (rowType === 'binary') {
        return function(server) {
            var oArr = server.ipToArray();
            var arrRes = [];
            var str = '';
            for (var x = 0; x < oArr.length; x++) {
                var o = parseInt(oArr[x]).toString(2);
                while (o.length < 8) {
                    o = '0' + o;
                }
                arrRes.push(o);
            }
            //return(arrRes);
            appendRow(arrRes, rowType);
        }
            
    }
    else if (rowType === 'octal') {
        return function(server) {
            var octalArr = server.ipToArray();
            appendRow(octalArr, 'octal');

        }
    }

};

function appendRow (dataArr, type) {
    var table = document.querySelector(".iptable");
    if (type === 'binary') {
        var row = table.insertRow(-1);
        row.className = "binary-row";
    } 
    else if (type === 'octal') {
        var row = table.insertRow(-1);
        row.className = "octal-row";
    }
    for (var x = 0; x< dataArr.length; x++) {
        cell = row.insertCell(x);
        cell.innerHTML = dataArr[x];
    }
};

var addBinaryRow = updateTable('binary');
var addOctalRow = updateTable('octal');

router = new  IpAddress('192.168.0.3', '255.255.255.0');
macbook = new IpAddress('192.168.1.13','255.255.0.0');
google = new  IpAddress('8.8.8.8', '255.255.255.240');

var serverArray = [router, macbook, google];

for (x = 0; x < serverArray.length; x++) {
    addOctalRow(serverArray[x]);
    addBinaryRow(serverArray[x]);
}


