import pkg from "pg"
const { Pool } = pkg

const pool = new Pool({
    connectionString:process.env.DATABASE_URL
})

export async function storeEmbedding(userId,embedding,text){

    await pool.query(
        "INSERT INTO memory(user_id,embedding,content) VALUES($1,$2,$3)",
        [userId,embedding,text]
    )

}
