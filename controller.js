const userModel = require("./model");

const testing = (req, res) => {
  res.status(200).send("Succesfully");
};

const userSignup = async (req, res) => {
  const userList = await userModel.find();
  const foundUser = userList.find((user) => user.email === req.body.email);
  if (!foundUser) {
    const user = await new userModel();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    await user.save();
    if (user) {
      res.status(200).send({ data: user });
    } else {
      res.status(400).send({ data: "tech issue" });
    }
  } else {
    res.status(400).send({ data: "User already exist" });
  }
};

module.exports = {
  testing,
  userSignup,
};
