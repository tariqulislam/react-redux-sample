import { login } from './admin.async';

/**
 * Question: How to decode/parse JWT in JavaScript without using any library
 * Source: StackOverflow
 * Answered by: Peheje
 * Edited by: imgx64
 * URL: https://stackoverflow.com/a/38552302/5554993
 * 
 * @param {*} token 
 */
const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

const attemptLogin = (data, callback) => {
    console.log(data);
    return () => {
        login(data).then(res => {
            console.log(res);
            console.log(parseJwt(res.data.accessToken));

            localStorage.setItem('role', JSON.stringify('admin'));
            localStorage.setItem('username', JSON.stringify(data.username));
            localStorage.setItem('loggedIn', JSON.stringify(true));

            callback();
        }).catch(ex => {
            console.log(ex)
        })
    }
}


export {
    attemptLogin
}


