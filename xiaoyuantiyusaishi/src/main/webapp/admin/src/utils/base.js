const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuantiyusaishi/",
            name: "xiaoyuantiyusaishi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuantiyusaishi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园体育赛事管理系统"
        } 
    }
}
export default base
