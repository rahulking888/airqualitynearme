import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const siteUrl = "https://airqualitynearme.org";

  const storiesDir = path.join(process.cwd(), "lib/web-stories");

  const files = fs
    .readdirSync(storiesDir)
    .filter((file) => file.endsWith(".json"));

  const items = files
    .map((file) => {
      const filePath = path.join(storiesDir, file);
      const raw = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(raw);

      const slug = file.replace(".json", "");

      return `
        <item>
          <title>${data.title}</title>
          <link>${siteUrl}/web-stories/${slug}</link>
          <guid>${siteUrl}/web-stories/${slug}</guid>
          <pubDate>${new Date(data.publishDate).toUTCString()}</pubDate>
          <description><![CDATA[${data.description}]]></description>
        </item>
      `;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>AirQualityNearMe Web Stories</title>
      <link>${siteUrl}</link>
      <description>Latest air quality web stories and updates</description>
      <language>en-US</language>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
