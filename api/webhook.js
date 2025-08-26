export default async function handler(req, res) {
  if (req.method === 'POST') {
    const events = req.body.events;
    for (const event of events) {
      console.log('Received event:', event);
    }
    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
