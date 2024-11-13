const csrfMiddleware = (req, res, next) => {
    if (req.method === 'POST') {
        const token = req.headers['x-csrf-token'];
        if (!token) {
            return res.status(403).send({ statusText: 'Missing CSRF Token!' });
        }
    }

    next();
}

module.exports = csrfMiddleware;