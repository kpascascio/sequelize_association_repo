module.exports = (sequelize, DataTypes) => {
    const UserProjects = sequelize.define('UserProject', {
        status: DataTypes.STRING
    })
    return UserProjects;
}