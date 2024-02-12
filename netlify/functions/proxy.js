const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Authorization': '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
',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt: event.body })
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: data.choices[0].text
  };
};
