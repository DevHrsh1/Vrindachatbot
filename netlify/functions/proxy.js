const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const { message } = JSON.parse(event.body);

    // Call your Hugging Face API (or Gradio backend)
    const response = await fetch('https://devhrsh-project-mansik-santulan.hf.space/run/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [message] })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      }
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
