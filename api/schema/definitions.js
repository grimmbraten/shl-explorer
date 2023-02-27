export const typeDefs = `#graphql
  
  type Game {
    away_team_code: String
    away_team_result: Int
    game_center_active: Boolean
    game_center_url_desktop: String
    game_center_url_mobile: String
    game_id: Int
    game_type: String
    game_uuid: String
    highlights_coverage_enabled: Boolean
    home_team_code: String
    home_team_result: Int
    live_coverage_enabled: Boolean
    overtime: Boolean
    penalty_shots: Boolean
    played: Boolean
    season: String
    series: String
    start_date_time: String
    ticket_url: String
    venue: String
  }

  
  type Query {
    nextGame(team: String!, season: String): Game
  }
`;
