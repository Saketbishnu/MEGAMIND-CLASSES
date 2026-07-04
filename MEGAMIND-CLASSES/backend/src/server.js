import { app } from './app.js';
import { env } from './config/env.js';
import { connectDatabase } from './database/connect.js';

async function startServer() {
  await connectDatabase();

  app.listen(env.PORT, () => {
    console.log(`MEGAMIND CLASSES API listening on port ${env.PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start MEGAMIND CLASSES API', error);
  process.exit(1);
});

