import fs from 'fs.promises'; // Use fs.promises for async operations

export default async (req, res) => {
  const { name, age } = req.body;

  try {
    if (req.method === 'POST') {
      const vals = { name, age };
      await fs.writeFile('hello.txt', JSON.stringify(vals, null, 2), 'utf-8');
      res.status(200).send('File saved');
    } else {
      res.status(405).send('Method Not Allowed');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
