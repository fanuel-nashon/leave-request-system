const User = require('../models/user');

const userController = {
    async findAllUsers(req, res) {
        try {
            const users = await User.findAll();
            return res.json({ success: true, data: users });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'sorry something went wrong' });
        }
    },

    async findUserById(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            if (Number.isNaN(id)) {
                return res.status(400).json({ success: false, message: 'Invalid id' });
            }

            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }

            return res.json({ success: true, data: user });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Sorry something went wrong' });
        }
    }
};

module.exports = userController;