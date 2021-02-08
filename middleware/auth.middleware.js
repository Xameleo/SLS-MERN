const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {

    const token = req.headers.authorization.split(' ')[1] // парсим строку  и получаем с неё токен

    if (!token) {
      return res.status(401).json({ message: 'Нет 1111 авторизации' })
    }

    const decoded = jwt.verify(token, config.get('jwtSecret')) // декодируем веб токен и отправляем дальше по течению
    req.user = decoded
    next()

  } catch (e) {
    res.status(401).json({ message: 'Нет 2222 авторизации' })
  }
}
