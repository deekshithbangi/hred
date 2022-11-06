const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

router.get('/' , (req, res) => res.send('User route'));
router.post('/',async (req, res) => {
    const { name, email, password} = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: [{ msg : 'user already exists' }]});
        }
        user = new User ({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(password,salt);
        await user.save();
        } catch(err) {
            console.log(err.message);
            res.status(500).send('Server error');
        };
});

module.exports = router;