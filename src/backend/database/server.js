const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const csrfMiddleware = require('../middleware/csrf');
const authMiddleware = require('../middleware/auth');
const { createHandler } = require("graphql-http/lib/use/express");
const { schema } = require("../schema/root/schema");
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const { signIn, signOut } = require('../handler/login');

dotenv.config();

function main() {
  const app = express();
  const port = process.env.PORT;
  const csrfProtection = csrf({ cookie: true });

  const graphql = createHandler({ schema });

  app.use(cors({ origin: 'http://localhost:4000', credentials: true }));
  app.use(cookieParser());
  app.use(express.json());
  app.all("/graphql", csrfMiddleware, graphql);

  app.post('/login', csrfMiddleware, async (req, res) => await signIn(req, res));

  app.get('/protected', (req, res) => authMiddleware(req, res));

  app.get('/logout', (req, res) => signOut(res));

  app.get('/csrf-token', csrfProtection, (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = { main };
