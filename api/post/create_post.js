const model = require("../../models");
const Post = model.PostCard;

const response = require("../../util/response");

module.exports = async (req, res) => {
    
    let {us_id, pc_photo, pc_content} = req.body;
    console.log(req.body);
    
    let pc_us_id = us_id;
    
    let post = await Post.create({
        pc_us_id,
        pc_photo,
        pc_content
    })
    .catch((err) => {
        console.log('[upload] 데이터 베이스 오류발생',err);
        response(res,500,'[upload] 데이터 베이스 오류발생',err);
    });
    
    response(res, 200, '[upload] Postcard 등록 성공',post);
    console.log(post);
    
};


