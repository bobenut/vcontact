var self = {};

self.get = function (req) {
    var result = {
        body: {},
        query: {}
    };
    console.log('req.body: %s', JSON.stringify(req.body))
    console.log('req.query: %s', JSON.stringify(req.query))

    if (!req) {
        return result;
    }

    if (req.body) {
        result.body = req.body;
    }

    if (req.query) {
        result.query = req.query;
    }

    return result;
};

module.exports = self;