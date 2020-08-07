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
  
    if (domain === undefined || domain !== validDomain) return true 
  
    console.log(payload.name);
    console.log(payload.email);
    console.log(payload.picture);
  
    return false;
  };

  
  module.exports = {
    verify
  }