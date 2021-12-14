let mongoose = require('mongoose'),
    // importation express pour manipuler les routes
    express = require('express'),
    // epress.router| importation des router
    router = express.Router();

// importation de task model
let taskSchema = require('../models/Task');

// create task
router.post("/create-task", async (req, res) => {
    try { // async await pour la synchronisation de la base de données
        const tasking = await new taskSchema(req.body).save(); // requette mongodb (save)
        res.status(200).send(tasking); // status 200 ok
    } catch (e) {
        res.status(500).send(e); // status 500 probleme interne de serveur
    }
});


// get task
router.route('/').get((req, res) => {
    taskSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get seul task
router.route('/edit-task/:id').get((req, res) => {
    taskSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// update task
router.route('/update-task/:id').put((req, res, next) => {
    taskSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Task a été modifié !')
        }
    })
})

// delete task
router.route('/delete-task/:id').delete((req, res, next) => {
    taskSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({msg: data})
        }
    })
})

module.exports = router;
