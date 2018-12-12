//服务层
app.service("brandService",function ($http) {
    //查询所有品牌
    this.findAll=function () {
        return $http.get("../brand/findAll.do")
    }
    //分页查询
    this.findPage=function (page,rows) {
        return $http.get("../brand/findPage.do?page="+page+"&rows="+rows)
    }
    //添加操作
    this.add=function (entity) {
        return $http.post("../brand/add.do",entity)
    }
    //更新操作
    this.update=function (entity) {
        return $http.post("../brand/update.do",entity)
    }
    //查询单条记录
    this.findOne=function (id) {
        return $http.get("../brand/findOne.do?id="+id)
    }
    //批量删除
    this.delete=function (ids) {
        return $http.get("../brand/delete.do?ids="+ids)
    }
    //模糊查询
    this.search=function (page,rows,searchEntity) {
        return $http.post("../brand/search.do?page="+page+"&rows="+rows,searchEntity)
    }
    this.selectOptionList=function () {
        return $http.get("../brand/selectOptionList.do")
    }

})