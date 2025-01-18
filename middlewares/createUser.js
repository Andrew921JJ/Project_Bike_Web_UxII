var User = require("../models/user.js").User;

module.exports = async function (req, res, next) {
  res.locals.user = null;

  try {
    var user = await User.findById(req.session.user_id);

    if (user) {
      // Проверяем, найден ли пользователь
      res.locals.user = user; // Если найден, присваиваем его
    }
  } catch (error) {
    console.error("Ошибка при поиске пользователя:", error);
    // Можно добавить обработку ошибки, если требуется
  }

  next();
};
