module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    is_active: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

  // force: true will drop the table if it already exists
  // User.sync({ force: true }).then(() => {
  //   // Table created
  //   return User.create({
  //     id: 0,
  //     name: 'my name',
  //     is_active: true,
  //   });
  // });

  return User;
}
