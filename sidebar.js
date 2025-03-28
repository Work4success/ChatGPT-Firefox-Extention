document.getElementById("send").addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;
  const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your actual key

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  document.getElementById("response").textContent = data.choices[0].message.content;
});
