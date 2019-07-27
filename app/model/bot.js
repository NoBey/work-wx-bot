const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 *
 ** @user       {String}     用户名
 ** @password   {String}     密码
 ** @tel        {String}     手机号码
 ** @xh         {String}     学号
 ** @email      {String}     邮箱
 ** @portrait   {String}     头像
 ** @pwA        {String}     教务密码
 ** @pwB        {String}     校园网密码
 ** @user       {String}     用户名
 **
 *
 */


const BotSchema = new Schema({
  name: {
    type: String,
    unique: true
  },

  url: {
    type: String
  },

  remark: {
    type: String,
  }
})



BotSchema.plugin(require('../plugins/common.js'));
const Bot = mongoose.model('Bot', BotSchema);
export default Bot;
