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
    // console.log(data);
    return () => {
        login(data).then(res => {
            let token = localStorage.setItem('token', res.data.accessToken);
            let role = localStorage.setItem('role', JSON.stringify('admin'));
            
            const parsetoken = parseJwt(res.data.accessToken)

            const adminUser = parsetoken.user

            const adminRole = adminUser.authorities[0].authority
            localStorage.setItem("admin_role", adminRole)
            localStorage.setItem("admin_user", JSON.stringify(adminUser))

            // console.log('Executing Callback')
            callback({ decodedToken: {...parseJwt(res.data.accessToken), role: 'admin'}, status: true, message: 'Login Success!' });
        }).catch(ex => {
            console.log('FAILED');
            callback({status: false, message: 'Login Failed!'});
            console.log(ex);
        })
    }
}


export {
    attemptLogin
}


