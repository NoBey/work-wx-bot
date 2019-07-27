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


const TriggerSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  type: {
    type: String,
  },
  rule: {
    type: Array,
  },

  remark: {
    type: String,
  }
})



TriggerSchema.plugin(require('../plugins/common.js'));
const Trigger = mongoose.model('Trigger', TriggerSchema);
export default Trigger;
