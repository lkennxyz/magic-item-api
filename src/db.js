const mongoose = require('mongoose');

async function dbConnect() {
  const username = process.env.DB_USER;
  const password = process.env.DB_PW;
  const url = process.env.DB_URL.replace('<username>', username).replace('<password>',password)
  try {
    await mongoose.connect( url,
      { useNewUrlParser: true, useFindAndModify: false });
    const db = mongoose.connection;
    db.on('error', () => console.error('DB Connection Error'));
    db.once('open', () => {
      console.log('Connected to DB');
    });
  } catch (err) {
    console.error(err);
  }
  
}

function dbClose() {
  const db = mongoose.connection;
  db.close();
}

module.exports = { dbConnect, dbClose };