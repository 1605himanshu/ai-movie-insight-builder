import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeSentiment(reviews) {
  const prompt = `
Analyze the following movie reviews.
Return JSON with:
summary (string)
sentiment (Positive, Mixed, or Negative)

Reviews:
${reviews.join("\n")}
`;

  const res = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  const text = res.choices[0].message.content;
  return JSON.parse(text);
}