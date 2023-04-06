export const typeDefs = `#graphql
  type Game {
    awayTeamCode: String
    awayTeamResult: Int
    gameCenterActive: Boolean
    gameCenterUrlDesktop: String
    gameCenterUrlMobile: String
    gameId: Int
    gameType: String
    gameUuid: String
    highlightsCoverageEnabled: Boolean
    homeTeamCode: String
    homeTeamResult: Int
    liveCoverageEnabled: Boolean
    overtime: Boolean
    penaltyShots: Boolean
    played: Boolean
    season: String
    series: String
    startDateTime: String
    ticketUrl: String
    venue: String
  }

  type Query {
    nextGame(team: String!, season: String): Game
  }
`;
