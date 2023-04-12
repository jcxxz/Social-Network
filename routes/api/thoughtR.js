//export into routes\api\index.js
const router = require('express').Router();
const {thoughtController} = require('../../controllers/thoughtController');

router.get('/', async (req, res ) => thoughtController
    .getAllThoughts(req, res));

router.get('/:id', async (req, res) => thoughtController
    .getThoughtById({ params: { id: req.params.id } }, res));

router.post('/', async (req, res) => thoughtController
    .createThought(req, res));

router.put('/:id', async (req, res) => thoughtController
    .updateThought({ params: { id: req.params.id } }, res));

router.delete('/:id', async (req, res) => thoughtController
    .deleteThought({ params: { id: req.params.id } }, res));

module.exports = router;