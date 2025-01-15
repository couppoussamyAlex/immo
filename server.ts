// server.ts (modified for client-side-only app)

import express from 'express';
import { join } from 'path';

const app = express();

// Serve static files from the dist folder
app.use(express.static(join(__dirname, 'dist/immo')));

// All other routes should serve the index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist/immo', 'index.html'));
});

const port = process.env['PORT'] || 4200;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
