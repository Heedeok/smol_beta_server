module.exports = (sequelize, DataTypes) => {
    
    let model = sequelize.define('PostCard', { 
        pc_us_id: { 
            type: DataTypes.INTEGER
        }, 
        pc_photo: {
            type: DataTypes.STRING(255)
        },
        pc_content: {
            type: DataTypes.TEXT
        },
    },{ 
        updatedAt: false,
        timestamps: true
    });
    
    model.removeAttribute('id');
    
    return model;
}
