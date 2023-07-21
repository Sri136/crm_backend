module.exports = {
    DB_NAME: "crm_db",
    DB_URL:  process.env.MONGODB_URI || 
    `mongodb+srv://${process.env.USERNAME}:${[process.env.PASSWORD]}@cluster0.sklk4j9.mongodb.net/?retryWrites=true&w=majority`
}