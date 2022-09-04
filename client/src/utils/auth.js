import decode from 'jwt-decode';

class AuthService {
    //retrieve data saved in token
    getProfile() {
        return decode(this.getToken());
    }

    //check user is logged in
    Loggedin() {
        //checks for token and if valid
        const token = this.getToken();
        //use type coersion to check if token is NOT undefined and token is NOT expired
        return !!token && !this.isTokenExpired(token);
    }

    //check if token expired
    isTokenExpired(token) {
        try {
            const decode = decode(token);
            if (decode.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }

    getToken() {
        return localStorage.getItem('id_token');
    }


    login(idToken) {
        localStorage.setItem('id_token', idToken);

        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        // reload and reset state of app
        window.location.assign('/');
    }
}


export default new AuthService();