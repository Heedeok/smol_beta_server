const api = require("../api/post");

module.exports = (router) => {
    
    //post 카드 만들기
    router.post('/create_post', api.create_post);

    //post카드 확인
    router.post('/get_post_data', api.get_post_data);
    

    return router;
};
