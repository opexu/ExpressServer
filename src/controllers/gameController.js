const path = require('path');

const playGame = (req, res) => {
    console.log("aaaaaaaaaaaaaaaaaa",__dirname);
    res.sendFile(path.join(__dirname, "/../static/HeatMachine/index.html"));
};

const gameFiles = (req, res) => {
    console.log("req.params: ");
    console.log(req.params);
    const { folder, file } = req.params;

    const extension = path.extname(file);
    console.log("extension: "+extension);

    if( extension !== ".gz"){
        res.sendFile(path.join(__dirname, "/../static/HeatMachine/", folder, file));
    }else{
        res.header('Content-Encoding', 'gzip');
        res.sendFile(path.join(__dirname, "/../static/HeatMachine/", folder, file));
    }
};

module.exports = {
    playGame,
    gameFiles,
    serveGzip,
};