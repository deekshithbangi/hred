const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult } = require('express-validator');


router.get('/', auth, async(req,res) => {
    try {
        const user = await (User.findById(req.user.id)).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }

});

router.post('/', 
    [
        // check('name','Name is required').not().isEmail(),
        check('email','Valid email address required').isEmail(),
        check('password','password required').exists()
    ],
    async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password} = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg : 'invalid credentials' }]});
        }

    // compare return a promise so 'await'
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        return res.status(400).json({ errors: [{msg: 'invalid credentials'}] });
    }

    const payload = {
        user: {
            id: user.id
        }
    }
    // sign the token, pass in payload, pass in secret, expiration
    // inside the callback, if we dont get an error we send back the token
    jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 720000 },
        (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    };
}
);

module.exports = router;

