const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

// Configuraciones de google
const verify = async (token) => {
  const validDomain = "misena.edu.co";

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const domain = payload["hd"];

  if (domain === undefined || domain !== validDomain) return { err: true };

  return {
    err: false,
    firstName: payload.given_name,
    name: payload.name,
    email: payload.email,
    img: payload.picture
  };
};

module.exports = {
  verify,
};
