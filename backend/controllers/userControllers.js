const express = require('express');

const User = require("../models/user");

const addUser=async(req,res) => {
  const {name,hobby,age}=req.body;
  const user = await User.create({ name, hobby, age });
    res.send(user);
}

const getUsers=async(req,res) => {
  const users = await User.find({});
  res.send(users);
}

module.exports = { addUser,getUsers };