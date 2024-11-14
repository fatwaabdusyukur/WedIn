const { login } = require("../schema/auth/resolver");

async function signIn(req, res){
    try {
        const { username, password } = req.body;
  
        return await login(username, password, res);
      } catch (error) {
        return res.status(500).send({ statusText: 'Something wrong with the server!'});
      }
}

async function signOut(res) {
  try {

    res.clearCookie('access', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'Production',
      sameSite: 'strict'
    });

    return res.status(200).send({ status: true });
  } catch (error) {
    return res.status(500).send({ statusText: 'Something wrong with the server!'});
  }
}

module.exports = { signIn, signOut };