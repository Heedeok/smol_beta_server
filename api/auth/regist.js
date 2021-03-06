// models
const model = require('../../models');
const User = model.User;

// utils
const hash = require('../../util/hash');
const response = require('../../util/response');

module.exports = async (req, res) => {
    let {us_phone_number, us_password, us_name} = req.body;
    console.log(req.body);
    
    // default profile image
    let us_photo = "https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1"

    let hashed_us_password = await hash.hashing(us_password)
    .catch((err) => {
        console.log("[regist] 해싱 작업에서 오류 발생.", err);
        response(res, 500, "[regist] 해싱 작업에서 오류 발생.", err);
    })

    let user = await User.create({
        us_phone_number,
        us_password: hashed_us_password,
        us_name,
        us_photo
    })
    .catch((err) => {
        console.log("[regist] 데이터베이스 오류 발생.", err);
        response(res, 500, "[regist] 데이터베이스 오류 발생.", err);
    })
    
    response(res, 200, "[regist] 회원가입 성공.", user);
}