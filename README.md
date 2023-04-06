# shl-explorer

```bash
curl --request POST \
  --url https://shl-explorer.vercel.app/graphql \
  --header 'Content-Type: application/json' \
  --header 'authorization: {REPLACE_ME}' \
  --data '{"query":"query ExampleQuery {\n  nextGame(team: \"FHC\") {\n    homeTeamCode\n\t\tawayTeamCode\n  }\n}\n","operationName":"ExampleQuery","variables":{}}'
```
