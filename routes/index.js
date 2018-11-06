const router = require('express').Router();
const User = require('../models').sequelize.model('user');
const Project = require('../models').sequelize.model('project');
const UserProject = require('../models').sequelize.model('UserProject');

router.post('/createuser', (req, res) => {
    console.log(req.body.name)
    if(!req.body.name) { return res.status(400).send('Missing fields')}
    User.create({
        name: req.body.name
    }).then(
        userCreated => res.send(userCreated)
    ).catch(
        err => res.send(err)
    )
})

router.post('/createuserproject/:id', (req, res) => {
    User.findOne({ where: { id: req.params.id } }).then(
        user => {
            Project.create({name: req.body.name}, { include: User }).then(
                project => {
                    user.addProject(project, { through: { status: 'finished' } }).then(
                        userProjectCreated => res.send(userProjectCreated)
                    ).catch(err => res.send({ message: err }))
                }
            ).catch(err => res.send(err))
        }
    ).catch(err => res.send({ msg: err }))
})

router.get('/userprojects/:id', (req, res) => {
    // using eager-loading
    User.findOne({ where: { id: req.params.id } }).then(
        user => {
            user.getProjects().then(
                projects => res.send(projects)
            )
        })
})

router.get('/getprojects', (req, res) => {
    // using eager-loading
    Project.findAll()
        .then(projects => res.send(projects))
        .catch(err => res.send(err))
})

// You wouldn't include on this table since it houses PK's instead of foreign keys...
router.get('/getuserprojects/:id', (req, res) => {
    UserProject.findAll({where: {userId: req.params.id}})
        .then(userProjects => {
                res.send(userProjects)
        })
        .catch(err => res.send(err))
})

//TODO: WIP
router.post('/createproject/:id', (req, res) => {
    User.findOne({ where: { id: req.params.id } }).then(
        user => {
            Project.create({name: req.body.name}, { include: User }).then(
                product => {
                    user.addProject(product, { through: { status: 'finished' } }).then(
                        userProjectCreated => res.send(userProjectCreated)
                    ).catch(err => res.send({ message: err }))
                }
            ).catch(err => res.send(err))
        }
    ).catch(err => res.send({ msg: err }))
})


module.exports = router