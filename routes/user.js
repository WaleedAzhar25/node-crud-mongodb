const express = require('express');
const User = require('../model/user');

const router = express.Router();

router.get('/users', async (req, res)=>{
    const allDbUsers = await User.find({});
    const html = 
    `<ul>
        ${
            allDbUsers.map((user)=> 
            `<li>
                ${user.firstName} - ${user.email}
            </li>`
            )
        }
    </ul>`
    res.send(html);
});

router.get('/',async (req, res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
} 
);

router
.route('/:id')
.get(async (req, res) =>{
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: 'User not found'});
    return res.json(user);
}).patch(async (req, res)=> {
    const user = await User.findByIdAndUpdate(req.params.id, { lastName: req.body.lastName9876 });
    if(!user) return res.status(404).json({error: 'User not found'});
    return res.json({status: 'Success'});
}).delete(async (req, res)=> {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.json({status: 'Success'})
});

router.post('/',async (req, res)=> {
    const body = req.body;
    console.log(body);
    if (!body || !body.firstName || !body.lastName || !body.email || !body.jobTitle) {
        return res.status(400).json('All fields are required');
    }
    const result = await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        jobTitle : body.jobTitle,
    });
    return res.status(201).json({msg: "Success", user: result});
});

module.exports = router;