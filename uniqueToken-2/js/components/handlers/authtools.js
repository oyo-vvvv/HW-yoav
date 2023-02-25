export const AuthTools = {
    fixEmail: function (email){
        return email.toLowerCase();
    },
    checkPassword: function(password){
        var rx = /[A-z]/;
        return rx.test(password);
    }
}