import { query } from '../services/shl.js';

export const resolvers = {
  Query: {
    nextGame: async (_, { team, season }) => {
      const date = new Date();
      let currentYear = date.getFullYear();
      const selectedSeason = season ? season : date.getMonth() < 6 ? --currentYear : currentYear;

      const result = await query(`seasons/${selectedSeason}/games.json?teamIds%5B%5D=${team}`);

      const game = result.filter(game => !game.played).pop();

      if (!game) throw new Error('No game found');

      return game;
    }
  }
};
