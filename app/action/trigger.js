import Dao from '../model/trigger';

export default {

  create: async (ctx, next)=>{
    const { name, remark, url } = ctx.request.body
    ctx.body = await Dao.create({
       name, remark, url
      })
  },

  update: async (ctx, next)=>{
    const { name, remark, url, _id } = ctx.request.body
      try {
        const data =  await Dao.findOneAndUpdate({_id},{
          name, remark, url
        })
        ctx.body = {stats:1,msg:'更新成功'}
      } catch (error) {
        ctx.body = {stats:0,msg:'更新失败'}
      }
  },



  get: async (ctx, next)=>{
    const _id  = ctx.params._id 
    ctx.body  = await Dao.findOne({_id})
  },


  list: async (ctx, next)=>{
    // const page  = ctx.params.page || 1
    // const limit = 2
    // const skip  = (page-1)*limit
    ctx.body   = await Dao.find({})
  },
  

}
