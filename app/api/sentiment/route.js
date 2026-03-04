export async function POST(req) {
  try {
    const { reviews } = await req.json();

    // Simple fake sentiment logic for testing
    const text = reviews.join(" ").toLowerCase();

    let sentiment = "Mixed";
    let summary =
      "Audience reactions are mixed, with appreciation for visuals and performances but some criticism about pacing.";

    if (
      text.includes("great") ||
      text.includes("amazing") ||
      text.includes("love") ||
      text.includes("excellent")
    ) {
      sentiment = "Positive";
      summary =
        "Most viewers loved the movie, praising its storytelling, performances, and engaging action sequences.";
    }

    if (
      text.includes("bad") ||
      text.includes("boring") ||
      text.includes("terrible")
    ) {
      sentiment = "Negative";
      summary =
        "Several viewers expressed disappointment, mentioning pacing issues and lack of engaging storytelling.";
    }

    return Response.json({
      sentiment,
      summary,
    });
  } catch (err) {
    return Response.json(
      {
        sentiment: "Mixed",
        summary:
          "Audience reactions appear balanced, with both praise and criticism from viewers.",
      },
      { status: 200 }
    );
  }
}