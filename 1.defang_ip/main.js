`To convert an IP address to a defanged IP address, we need to replace “.” with “[.]”. 
During coding interviews, a standard problem for changing an IP address is that you receive a valid IP address, 
you must return a defanged version of that IP address.`

module.exports.defang = (ip_address) => {
    let ip_defang = "";
    let ip = ip_address.split('.');
    if (ip.length !== 4) return "string is invalid"
    ip_defang = ip.join("[.]");
    return ip_defang;
};
