const jwt = require('jsonwebtoken');

const TokenGeneration = (playload={}, secretKey, ExpTime='72h') => {
    return (
        jwt.sign(
            {playload}, 
            secretKey, 
            {expiresIn: ExpTime})
    )
}

module.exports = TokenGeneration;