module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('User', { 
        us_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        }, 
        us_phone_number: { 
            type: DataTypes.STRING(20), 
            allowNull: false
        }, 
        us_password: { 
            type: DataTypes.STRING(255), 
            allowNull: false
        },
        us_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        us_photo: {
            type: DataTypes.STRING(255)
        },
        us_jwt_token: {
            type: DataTypes.STRING(255)
        },
    },{ 
        timestamps:false, 
    }); 
}
