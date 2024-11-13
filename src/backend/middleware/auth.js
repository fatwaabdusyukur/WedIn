const jwt = require('jsonwebtoken');

const authMiddleware = (req, res) => {
    try {
        const token = req.cookies['access'];

        if (!token) return res.status(401).send({ statusText: 'Unauthorized' });

        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return res.send({ data });
    } catch (error) {
        return res.status(401).send({ statusText: 'Invalid token or expired token' })
    }
};

module.exports = authMiddleware;