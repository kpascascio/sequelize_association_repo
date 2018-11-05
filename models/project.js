module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('project', {
        name: DataTypes.STRING
    });

    Project.associate = model => {
        Project.belongsToMany(model.user, {through: 'UserProject',  foreignKey: 'projectId'})
    };

    return Project;
}