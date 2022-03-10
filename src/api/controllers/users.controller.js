const Users = require('../models/users.model');

exports.create = async (req, res, next) => {
  try {
    const user = new Users(req.body);  
    await user.save();
    return res.send({status: true, data: user, messages: "User created successfully"});
  }
  catch (error)
  {
    return res.send({status: false, error, message: "Something went wrong"});
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const {id} = req.params;
    let user = await Users.findById({_id: id});
    res.send({status: true, data: user, message: "User retrieved successfully."});
  } catch (error) {
    return res.send({status: false, error, message: "Something went wrong"});
  }
};

exports.get = async (req, res, next) => {
  try {
    let allUsers = await Users.find({}).select({createdAt: 0, updatedAt:0, __v:0, id:0}).sort({createdAt:-1}).exec();
    res.send({status: true, data: allUsers, message: "Users retrieved successfully."});
  } catch (error) {
    return res.send({status: false, error, message: "Something went wrong"});
  }
};
