const sampleCont = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the sample controller'
    });
};

module.exports.sampleCont = sampleCont;