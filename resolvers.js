const Market = require("./models/Market");

module.exports = {
  Query: {
    getMarkets: async (root, args, ctx) => {
      const markets = await Market.find({}).exec();
      return markets;
    }
  },
  Mutation: {
    addMarket: async (root, args, ctx) => {
      const newMarket = await new Market({
        ...args.input
      }).save();
      return newMarket;
    },
    editCards: async (root, args, ctx) => {
      const editedMarket = await Market.findByIdAndUpdate(
        args.input._id,
        {
          cards: args.input.cards
        },
        { new: true }
      ).exec();
      return editedMarket;
    }
  }
};
