export async function GET() {
  const reviews = [
    "Amazing visuals and storytelling.",
    "The pacing was slow but overall enjoyable.",
    "Great performances by the cast.",
    "Some scenes felt unnecessary."
  ];

  return Response.json({ reviews });
}