export default function config() {
  return {
    DB_URI: process.env?.DEFAULT_DATABSE ?? 'mongodb://localhost:27017',
    DB_NAME: process.env?.DEFAULT_DATABSE_NAME ?? 'messenger',
  };
}
