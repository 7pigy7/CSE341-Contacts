const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger-tags['Contacts']
    const result = await mongodb.getDatabase().db('project1').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    //#swagger-tags['Contacts']
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('project1').collection('contacts').find({_id: contactId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

const createContact = async (req, res) => {
    //#swagger-tags['Contacts']
    const contact = {
        fistName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db('project1').collection('contacts').add(contact);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
};

const updateContact = async (req, res) => {
    //#swagger-tags['Contacts']
    const contactId = new ObjectId(req.params.id);
    const contact = {
        fistName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db('project1').collection('contacts').modifyOne({_id: contactId}, contact);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
};

const deleteContact = async (req, res) => {
    //#swagger-tags['Contacts']
    const contactId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db('project1').collection('contacts').deleteOne({_id: contactId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};