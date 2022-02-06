const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;