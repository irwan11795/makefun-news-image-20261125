# Wednesday Atlas — News 25

[![Wednesday Atlas — News 25](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![Rank](https://make.fun/badge/news-image-20261125/irwan11795/makefun-news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![Reward](https://make.fun/badge/news-image-20261125/irwan11795/makefun-news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

A one-page broadsheet front page that sums up the world's news of
**Wednesday 25 November 2026** in a single image: 36 dated stories, each in
its own box, each carrying its source.

- **Masthead:** "WEDNESDAY ATLAS", with a red date band naming the day and a
  date-check line confirming every story is from that Wednesday.
- **Four illustrated lead stories:** two tankers hit mines and burn in the
  Strait of Hormuz; the Kospi plunges 6.2% in a global AI sell-off; the
  Solomon Islands picks Australia as its security partner; Ukraine drones set
  two Russian refineries ablaze. The illustrations are flat vector drawings
  made for this page — no photographs.
- **A thin UTC timeline** under the leads, and **32 more stories** in a
  numbered grid (numbers in small red circles), from Shenzhou-24 docking at
  Tiangong to new US tariff proposals, each with a short attribution tag.

Every story on the page happened, or was first reported, on Wednesday
25 November 2026. Nothing from an earlier day is presented as that day's news.

## Run

```sh
node main.ts
```

The program copies `entry.png` (1024×1024, under 1 MiB) to
`$MAKEFUN_OUTPUT_DIR/entry.png`, defaulting to `/output/entry.png`. It uses
only the Node standard library and needs no network; two runs write identical
bytes.

## License

MIT — see [LICENSE](LICENSE).
