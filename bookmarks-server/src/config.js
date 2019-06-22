module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || '910237e9-95fd-4ecf-b17b-4af6605a1f01',
  DB_URL: process.env.DB_URL || 'postgresql://dunder-mifflin:abc123@localhost/bookmarks',
}
