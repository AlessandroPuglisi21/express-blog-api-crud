const express = require("express");
const router = express.Router();
const posts = require ('../data/posts.js');
const postController = require('../controllers/postControllers.js')

// CRUD

//! Index 

router.get('/', postController.index)

//! Show 

router.get('/:tag', postController.show)
//! Store

router.post('/', postController.store)

//! Update

router.put('/:id', postController.put)

//! Modify

router.patch('/:id', postController.patch)

//! Destroy

router.delete('/:id', postController.destroy)

module.exports = router 