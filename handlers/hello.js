// handler/root.js

module.exports = (req, res) => {

    //
    // Rendern des `index` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    //
    res.render('index', {
        title: 'Hello',
        greeting: `Hello Es ist ${new Date().toISOString()}`
    });
};
