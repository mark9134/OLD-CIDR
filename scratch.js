// ip address as string

var ip_string = "192.168.0.1";
var octals = ip_string.split('.');
console.log(octals);

//update ip_string html iwth var
document.querySelector(".ip").textContent = ip_string;

//update html octals
for(x=0;x < octals.length;x++) {
    document.querySelector('#o' + (x+1)).textContent = parseInt(octals[x]).toString(2);
}