const config = {
    development: {
        DB_URL: 'mongodb+srv://admin:488690@cluster0.qcvrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        PORT: 3000,
        SECRET: 'pesho',
        SALT_ROUNDS: 10,
    },
    production: {
        DB_URL: 'mongodb+srv://admin:488690@cluster0.qcvrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        PORT: 80,
        SECRET: 'pesho',
        SALT_ROUNDS: 10,
    }
};

module.exports = config[process.env.NODE_ENV];