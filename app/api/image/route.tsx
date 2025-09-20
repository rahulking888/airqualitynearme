import { ImageResponse } from "next/og";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Indoor Air Quality";

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#f7f3ed",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 60,
          color: "#333",
          fontWeight: "bold",
          textAlign: "center",
          padding: "40px",
        }}
      >
        {title}
      </div>
    ),
    size
  );
}
