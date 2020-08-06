const CLIENT_ID = '7351da467acb4ff4aab55981ad516e1d';
const REDIRECT_URI = 'https://tunebunnies.com';

export const redirectToAuthorizationPage = () => {
    window.location = 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID
        + '&response_type=code&redirect_uri=' + REDIRECT_URI
        + '&scope=playlist-read-private%20playlist-modify-private%20playlist-modify-public';
};
