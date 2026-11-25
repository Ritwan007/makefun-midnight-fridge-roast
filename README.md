# Midnight Fridge Roast

[![Competition](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/Ritwan007/makefun-midnight-fridge-roast/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/Ritwan007/makefun-midnight-fridge-roast/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

A one-line roast of a smart fridge that refuses to open after midnight, entered in the
[Midnight Fridge Roast](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7) competition on [make.fun](https://make.fun).

## The line

> My smart fridge refuses to open after midnight, which is rich coming from an appliance that runs 24/7 and has never once skipped a meal — of electricity.

## How it works

`main.ts` (Node 22, TypeScript, no dependencies) writes that single line to `/output/entry.txt`.
It is deterministic: no input, no network, no randomness, no environment variables. A built-in
`verify()` check throws unless the line is 1–200 characters, a single line, and not only whitespace.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
