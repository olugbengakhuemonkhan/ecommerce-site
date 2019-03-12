//Client ID
//4a0ee094ba842cfa85eb
//Client Secret
//1a13370540e049d55e64a5d5cf777a79d1c037e3

const config = {
    passport: {
        clientID: 'aabfffa851fa69a04194',
        clientSecret: 'a6f706ec33b1badaead8f251da8558016b50ab2a',
        callbackURL:  'http://localhost:3000/auth/github/callback'           

    },
    pg:{
        host: 'localhost',
        port: 5432,
        database: 'Zapp',
        user: 'postgres',
        password: ""
     }

};


module.exports = config