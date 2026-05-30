exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured' }) };
  }

  try {
    const body = JSON.parse(event.body);
    const systemPrompt = body.system || `Tu es YouWizMe, un oracle poétique...`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 1000,
        system: systemPrompt || `Tu es YouWizMe, un oracle poétique et bienveillant spécialisé dans l'analyse de compatibilité entre personnes à partir de leurs prénoms et personnalités.
Tu réponds UNIQUEMENT en JSON valide, sans markdown, sans backticks, sans texte avant ou après.
Le JSON doit avoir exactement cette structure :
{
  "score": <nombre entre 0 et 100>,
  "verdict": "<phrase courte et poétique de 6-10 mots>",
  "profil1": {
    "traits": ["<trait1>", "<trait2>", "<trait3>", "<trait4>"],
    "description": "<2-3 phrases sur la personnalité associée à ce prénom et aux infos fournies>"
  },
  "profil2": {
    "traits": ["<trait1>", "<trait2>", "<trait3>", "<trait4>"],
    "description": "<2-3 phrases sur la personnalité associée à ce prénom et aux infos fournies>"
  },
  "dimensions": {
    "emotionnel": <0-100>,
    "intellectuel": <0-100>,
    "valeurs": <0-100>,
    "communication": <0-100>,
    "complicite": <0-100>
  },
  "forces": "<2-3 phrases sur les forces de ce duo>",
  "vigilances": "<1-2 phrases sur les points de vigilance>",
  "partagés": ["<valeur commune 1>", "<valeur commune 2>", "<valeur commune 3>"],
  "apport1": ["<ce que personne 1 apporte>", "<apport 2>"],
  "apport2": ["<ce que personne 2 apporte>", "<apport 2>"],
  "summary": "<citation poétique de 2-3 phrases qui résume leur union, belle et mémorable>"
}`,
        messages: [{ role: 'user', content: body.prompt }]
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
