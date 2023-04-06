import { getAccessToken } from './oauth2.js';

export const query = async endpoint => {
  const token = await getAccessToken();
  const response = await fetch(`https://openapi.shl.se/${endpoint}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  const result = await response.json();

  if (!result) throw new Error('Internal server error');

  return result;
};
