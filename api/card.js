const {Card} = require('./../models');

const CardApi = {
  all: {
  	async handler(request, h) {
      try {
        return await Card.find({}).where("state").ne("done_bucket").sort({ createdAt: 'desc' });
      } catch (err) {
        console.log(err)
      }
    }
  },
  update: {
    async handler(request, h) {
      try {
        return await Card.findOneAndUpdate({_id: request.params.id }, {state: request.payload.state}, {new: true})
      } catch(err) {
        console.error(err)
      }
    }
  },
  add: {
    async handler(request, h) {
      try {
        return await Card.create({
          title: request.payload.title,
          tags: request.payload.tags,
          app_name: request.payload.app_name,
          users: request.payload.users,
          state: 'todo'
        })
      } catch(err) {
        console.error(err);
      }
    }
  }
}

module.exports = CardApi;
