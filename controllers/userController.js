const db = require("../models")

module.exports = {

    findUser: function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbModelUser => res.json(dbModelUser))
            .catch(err => res.status(422).json(err));
    },
    findAllUsers: function (req,res) {
        console.log("finding users",req)
        db.User.findAll({})
            .then(dbModelUser = res.json(dbModelUser))
            .catch(err => res.status(422).json(err));
    },
    // should create the user
    create: function (req, res) {
        console.log("create got called" , req.body);
        // return res.send("ok");
        db.User.create(req.body)
            .then(dbModelUser => res.json(dbModelUser))
            .catch(err => res.status(422).json(err));
    },
    // should allow information for the user to be updated
    update: function (req, res) {
        db.User.update(req.body,
            {
                where:
                {
                    id: req.params.userid
                }
            })
            .then(dbModelUser => res.json(dbModelUser))
            .catch(err => res.status(422).json(err));
    },
    // should allow a user to be deleted
    remove: function (req, res) {
        db.User.destroy({ where: { id: req.params.userid } })
            .then(dbModelUser => res.json(dbModelUser))
            .catch(err => res.status(422).json(err));
    }
}