const model = require("../../models");
const Post = model.PostCard;
const User = model.User;

const response = require("../../util/response");

module.exports = async (req, res) => {
    
    let {us_id} = req.body;
    //console.log(req.body);
    
    let post = await Post.findAll({
        raw : true,
        where : { pc_us_id : us_id},
        // include : [{
        //     model : User,
        //     where : { us_id : us_id}
        
        // }]
    })
    .catch((err) => {
        console.log('[upload] 데이터 베이스 오류발생',err);
        response(res,500,'[upload] 데이터 베이스 오류발생',err);
    });
    
    response(res, 200, '[upload] Postcard 반환 성공',post);
    console.log(post);
    //console.log(post[0].dataValues.User.dataValues.us_phone_number);
    
};


