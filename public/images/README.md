# Static Images

Drop image files here — they become publicly served at the same path.

## Folders

| Folder | Used by | Expected files |
| --- | --- | --- |
| `public/images/hosts/` | Hosts section | `minh.jpg`, `lezlie.jpg` |
| `public/images/factories/` | (optional) factory thumbnails | `an-cuong-wood.jpg`, etc. |

## Naming

- All lowercase, hyphen-separated.
- Formats: `.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif`.
- Recommended host photo size: square, 400×400+ (auto-cropped to a circle).

## How it's served

A file at `public/images/hosts/minh.jpg` is reachable at
`https://<your-domain>/images/hosts/minh.jpg`. No build step, no config.

## Host photo fallback

If `minh.jpg` or `lezlie.jpg` is missing, the hosts cards automatically fall
back to the MM / LT initials. Drop a file in and the photo appears on next
page load.
