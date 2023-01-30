const config = require("./config");

console.log(config);

const debug = {
    log: (msg) => {
        if (config.debug) console.log(msg);
    },
    error: (msg) => {
        if (config.debug) console.error(msg);
    }, 
}
        
module.exports = {debug};