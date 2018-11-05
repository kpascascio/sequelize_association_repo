module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        name: DataTypes.STRING
    });

    User.associate = model => {
        User.belongsToMany(model.project, {through: 'UserProject', foreignKey: 'userId'})
    };

    return User;
}