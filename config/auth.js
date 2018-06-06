// Lưu trữ các thông tin để yêu cầu xác thực từ fb, tw, google bao gồm clientId, secretKey

module.exports = {
    'facebookAuth': {
        'clientID': '2250808518479638', //app ID
        'clientSecret': 'b4d3c960face525d57ebbffbc6e2e58b',  // App Secret
        'callbackURL': 'http://localhost:3333/auth/facebook/callback'
    }
}