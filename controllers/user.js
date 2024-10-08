const User = require('../model/user');

async function handlerAllUser ( req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById ( req, res) {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: 'User not found'});
    return res.json(user);
}

async function handleUpdateUserById ( req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, { lastName: req.body.lastName });
    if(!user) return res.status(404).json({error: 'User not found'});
    return res.json({status: 'Success'});
}

async function handleDeleteUserById ( req, res) {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.json({status: 'Success'})
}

async function handleAddUser ( req, res) {
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
}



module.exports = {
    handlerAllUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleAddUser
}