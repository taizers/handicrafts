const UserLogin = require('../models/users');

exports.signIn = (req, res) => {
    const body = req.body;

    UserLogin.findOne({ login: body.login, password: body.password })
    .then(user => res.json({...user._doc, password: '', id: user._id}))
    .catch(err => res.status(400));
};

exports.signUp = (req, res) => {
    const body = req.body;

    const newUser = new UserLogin(body);

    UserLogin.findOne({ login: body.login })
    .then((user) => {
        if (user) {
            res.status(401).json('Пользователь уже существует')
        } else {
            newUser.save()
                .then((result) => res.json({login: result._doc.login, role: result._doc.role}))
                .catch((error) => res.status(400).json('Ошибка: ' + error))
        }
    })
    .catch((error) => res.status(400).json('Ошибка: ' + error));
};