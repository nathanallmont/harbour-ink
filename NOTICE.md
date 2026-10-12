# Third-party notices

Harbour Ink itself is MIT licensed (see LICENSE). It does not include or bundle any of the following; they are things a project using it will load, and each keeps its own licence.

| Item | Used for | Licence | What it asks of you |
|---|---|---|---|
| Bebas Neue (Dharma Type) | Headings and labels (`--font-cap`) | SIL Open Font License 1.1 | Free to use and embed. If you ship the font files, ship the licence text with them. The fonts may not be sold on their own. |
| Manrope (Mikhail Sharanda) | Body text (`--font-body`) | SIL Open Font License 1.1 | As above. |
| JetBrains Mono (JetBrains) | Every number and mono caption (`--font-mono`) | SIL Open Font License 1.1 | As above. |
| Tailwind CSS | The components use its utility classes (`flex`, `px-4`, `h-px` and so on) | MIT | Keep its notice if you redistribute it. |
| React | The components are React function components | MIT | Keep its notice if you redistribute it. |

The fonts are normally loaded from Google Fonts (for example with `next/font/google`, see `src/fonts.js`), which needs no files from you.
