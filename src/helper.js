const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

// Configuraciones de google
const verify = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return {
    err: false,
    name: payload.name,
    img: payload.picture,
    email: payload.email,
    img: payload.picture,
  };
};

const badRequest = (res, messageError) => {
  return res.status(400).json({
    error: true,
    messageError,
  });
};

module.exports = {
  verify,
  badRequest
};
