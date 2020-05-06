var express = require("express");
var auth = require('../../middleware/auth');
var router = express.Router();

//Item model
const Item = require('../../model/Item_model');

//@Desc : Get all Items
//@Access : Public
//@Route: /api/items
router.get('/', (req,res)=>{
    Item.find()
    .sort({date:-1})
    .then(items => res.json(items));
});

//@Desc : Add an Item
//@Access : Private
//@Route: /api/items
router.post('/', auth, (req,res)=>{
    const newItem = new Item({
        name:req.body.name
    });
    newItem.save()
    .then(item => res.json(item));
});

//@Desc : Delete an Item
//@Access : Private
//@Route: /api/items/:id
router.delete('/:id', auth, (req,res)=>{
    Item.findByIdAndRemove(req.params.id)
    .then(() => res.json({success:true}))
    .catch(err => res.status(404).json({success:false}));
});

module.exports = router;
