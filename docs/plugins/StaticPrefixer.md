# Static Prefixer <img src="../res/dom-badge.png" height=25>

An alternative to [Prefixer](./Prefixer.md) which uses [inline-style-prefix-all](https://github.com/rofrischmann/inline-style-prefix-all) instead of  [inline-style-prefixer](https://github.com/rofrischmann/inline-style-prefixer) to prefix styles.

Instead of evaluating the `userAgent` and iterating [caniuse.com](caniuse.com) data, it just adds every needed vendor-prefix. The output styles are somehow bigger, but in return the bundle size itself will be much smaller.
