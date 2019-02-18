const express = require('express');
const router = express.Router();


//Item Model (used for post method when we need to construct a new object to save in the database)
const Item = require('../../models/Item');


// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

// @route POST api/items
// @desc POST an Item
// @access Public
router.post('/', (req, res) => {
   //Construct an object that will go into the database
   const newItem = new Item({
       name: req.body.name //the body parser allows us to do this
   })

   //this saves it to the database and is promised based
   newItem.save()
    .then(item => res.json(item))
})

// @route Delete api/items/:id
// @desc Delete an Items
// @access Public
router.delete('/:id', (req, res) => {
    //First we need to find this id
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ sucess: true })))
        .catch(err => res.status(404).json({ sucess: false }));
 })

module.exports = router;