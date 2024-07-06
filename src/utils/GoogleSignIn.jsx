import axios from 'axios';

const getAccessToken = async () => {
  const params = new URLSearchParams();
  params.append('client_id', process.env.REACT_APP_GOOGLE_CLIENT_ID);
  params.append('client_secret', process.env.REACT_APP_GOOGLE_CLIENT_SECRET);
  params.append('refresh_token', process.env.REACT_APP_GOOGLE_REFRESH_TOKEN);
  params.append('grant_type', 'refresh_token');

  try {
    const response = await axios.post('https://oauth2.googleapis.com/token', params);
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
};
export default getAccessToken;