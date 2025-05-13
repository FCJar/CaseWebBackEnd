const startDB = require("./mongodb");

class Loaders{
    async start(){
        await startDB();
    }
}

module.exports = new Loaders();