// chứa thông tin kết nối tới database, MongoDB

module.exports = {
    'url': process.env.MONGODB_URL || "mongodb://localhost:27017/node-auth"
}