module.exports = (sequelize, Sequelize) => {
  const Chat = sequelize.define('chat', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    room: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    user_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    original_content: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    edited_content: {
      allowNull: true,
      type: Sequelize.STRING,
    },
  });

  // force: true will drop the table if it already exists
  // Chat.sync({ force: true }).then(() => {
  //   // Table created
  //   return Chat.create({
  //     id: 0,
  //     room: 'hello',
  //     user_id: 3,
  //     original_content: 'moo',
  //   });
  // });

  return Chat;
}
