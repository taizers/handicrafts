const UserLogin = require('../models/userLogin');

exports.signIn = (req, res) => {
    const body = req.body.body;

    UserLogin.findOne({ login: body.login, password: body.password })
    .then((user) => res.json({login: user._doc.login, role: user._doc.role}))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.signUp = (req, res) => {
    const body = req.body.body;

    const newUser = new UserLogin(body);
    console.log(body);
    UserLogin.findOne({ login: body.login })
    .then((user) => {
        if (user) {
            res.status(401).json('Пользователь уже существует')
        }else {
            newUser.save()
                .then((result) => res.json({login: result._doc.login, role: result._doc.role}))
                .catch((error) => res.status(400).json('Ошибка: ' + error))
        }
    })
    .catch((error) => res.status(400).json('Ошибка: ' + error));
};