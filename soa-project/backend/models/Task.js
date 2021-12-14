//importation biblio mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//declation des champs (schema)
taskSchema = new Schema({
    TaskName: {
        type: String
    },
    Description: {
        type: String
    },
    Deadline: {
        type: Date
    }
}, {collection: 'tasks'}) //par defaut mangoose



module.exports = mongoose.model('Task', taskSchema) //export en task
