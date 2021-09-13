export default {
    'POST /api/userInfo':(req,res) =>{
        const user = req.body;
        if(user.username === 'QH' && user.password === 'abc2000513'){
            return res.json({
                code: 200,
                success_description: "登录成功",
                success: "true",
                data: {
                    username : "QH",
                    password : "abc2000513",
                    realName : "QH",
                    id: "1147824",
                    avatar: "https://video.codeseeding.com/image/default/AE03865608444CB389BA0334CD67F1AC-6-2.jpg",
                    addressList:["广东省广州市天河区棠下街道快乐星球","甘肃省兰州市七里河区银光路宝宝花园5-1"],
                    access_token: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal",
                    refresh_token: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal"
                }
            })
        }else if(user.username !== 'QH'){
            return res.json({
                code: 503,
                error_description: "账户不存在",
                success: "false",
            })
        }else if(user.username === 'QH' && user.password !== 'abc2000513'){
            return res.json({
                code: 503,
                error_description: "密码错误",
                success: "false",
            })
        }
    },
    'GET /api/carouseList':(req,res) =>{
        return res.json({
            code: 200,
            msg: "",
            success: "true",
            data: [
                {tittle: "8月来电好物季", url:"https://img13.360buyimg.com/pop/s1180x940_jfs/t1/204538/27/418/100695/6110eb81E40c33891/98a22a2cf9021e4e.jpg.webp"},
                {tittle: "联想拯救者手机", url:"https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100019677428/FocusFullshop/CkRqZnMvdDEvMTg5ODU0LzM3LzEyMzMzLzM4MDk2My82MGU2OTU3Y0VkMDE4NzRiNS8zYjJmMzgyYjA1YTY0NTZiLnBuZxIJNC10eV8wXzU1MAI47ot6Qh8KG-iBlOaDs-aLr-aVkeiAheS6jOS7o-aJi-acuhAAQhMKD-S8mOaDoOS6q-S4jeWBnBABQhAKDOeri-WNs-aKoui0rRACQgoKBui2heWAvBAHWPTRjM30Ag/cr/s/q.jpg"},
                {tittle: "PKPM安全计算软件", url:"https://img13.360buyimg.com/pop/s1180x940_jfs/t1/190794/40/15567/57641/6102697fEae09d1dc/276df898373421f5.jpg.webp"},
                {tittle: "小佩智能猫砂盆", url:"https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100014384286/FocusFullshop/CkRqZnMvdDEvMTg2MDIyLzM0LzEzMTk1LzI2MDE5OS82MGU2OTM1YkUxMzZlNmYzNi82ZjI2YTQxMWViOTY3YjQyLnBuZxIJMy10eV8wXzU0MAI47ot6QhMKD-Wwj-S9qeeMq-WOleaJgBAAQhAKDOa7oTE5OeWHjzEwMBABQhAKDOeri-WNs-aKoui0rRACQgoKBuWKm-iNkBAHWJ7Jycr0Ag/cr/s/q.jpg"},
                {tittle: "新品上新", url:"https://imgcps.jd.com/ling4/100018752514/5LiK5Lqs5pud6YCb5paw5ZOB/5paw5ZOB5LiK5paw/p-5bd8253082acdd181d02fa1b/a68daee4/cr/s/q.jpg"},
                {tittle: "大码女装风格馆", url:"https://imgcps.jd.com/ling4/10034506421901/5aSn56CB5aWz6KOF6aOO5qC86aaG/54OtOOavj-a7oTMwMOWHjzMw/p-5bd8253082acdd181d02fa3b/9b8d8401/cr/s/q.jpg"},
            ]
        })
    },
}
