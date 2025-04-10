import sql from "mssql";

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

let pool;

export async function getConnection() {
    console.log("DB Config:", {
        user: process.env.DB_USER,
        server: process.env.DB_SERVER,
        database: process.env.DB_NAME,
      });
      
  console.log("Connecting to MSSQL...");
  if (!pool) {
    pool = await sql.connect(config);
    console.log("Connected to MSSQL");
  }
  return pool;
}
