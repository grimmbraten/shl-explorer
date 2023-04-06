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

      return {
        awayTeamCode: game.away_team_code,
        awayTeamResult: game.away_team_result,
        gameCenterActive: game.game_center_active,
        gameCenterUrlDesktop: game.game_center_url_desktop,
        gameCenterUrlMobile: game.game_center_url_mobile,
        gameId: game.game_id,
        gameType: game.game_type,
        gameUuid: game.game_uuid,
        highlightsCoverageEnabled: game.highlights_coverage_enabled,
        homeTeamCode: game.home_team_code,
        homeTeamResult: game.home_team_result,
        liveCoverageEnabled: game.live_coverage_enabled,
        overtime: game.overtime,
        penaltyShots: game.penalty_shots,
        played: game.played,
        season: game.season,
        series: game.series,
        startDateTime: game.start_date_time,
        ticketUrl: game.ticket_url,
        venue: game.venue
      };
    }
  }
};
