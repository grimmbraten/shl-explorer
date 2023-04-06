import * as dotenv from "dotenv";
dotenv.config();

export const getAccessToken = async () => {
  const response = await fetch("https://openapi.shl.se/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body:
      "grant_type=client_credentials&client_id=" +
      process.env.SHL_CLIENT +
      "&client_secret=" +
      process.env.SHL_SECRET
  });

  const { access_token } = await response.json();
  return access_token;
};
