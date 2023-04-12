//export into routes\api\index.js
const router = require('express').Router();

const {userController} = require('../controllers/userController');

router.get('/', async (req, res) => userController
  .getAllUsers(req, res));

  router.get('/:id', async (req, res) => userController
    .getUserById({ params: { id: req.params.id } }, res));

  router.post('/', async (req, res) => userController
    .createUser(req, res));

    router.put('/:id', async (req, res) => userController
        .updateUser({ params: { id: req.params.id } }, res));

    router.delete('/:id', async (req, res) => userController
        .deleteUser({ params: { id: req.params.id } }, res));

    router.post('/:userId/friends/:friendId', async (req, res) => userController
        .addFriend({ params: { userId: req.params.userId, friendId: req.params.friendId } }, res));

module.exports = router;

