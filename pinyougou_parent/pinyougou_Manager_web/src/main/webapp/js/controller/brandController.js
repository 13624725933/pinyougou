app.controller('brandController',function ($scope,$controller,brandService) {
    //继承
    $controller('baseController',{$scope:$scope})

    //查询所有品牌
    $scope.findAll=function(){
        brandService.findAll().success(
            function(resp) {
                $scope.list=resp
            }
        );
    }

    //分页
    $scope.findPage=function (page,rows) {
        brandService.findPage(page,rows).success(
            function (response) {
                $scope.list=response.rows
                $scope.paginationConf.totalItems=response.total
            }
        )
    }

    //添加
    $scope.save=function () {
        var serviceObject;
        if ($scope.entity.id!=null){
            serviceObject=brandService.update($scope.entity)
        }else {
            serviceObject=brandService.add($scope.entity)
        }
        serviceObject.success(
            function (response) {
                if (response.success){
                    $scope.reloadList()
                }else {
                    alert(response.message)
                }
            }
        )
    }
    //查询单条记录
    $scope.findOne=function (id) {
        brandService.findOne(id).success(
            function (response) {
                $scope.entity=response
            }
        )
    }

    //批量删除
    $scope.delete=function () {
        brandService.delete($scope.selectIds).success(
            function (response) {
                if (response.success){
                    $scope.reloadList();
                    $scope.selectIds=[];
                }
            }
        )
    }
    //模糊查询
    $scope.searchEntity={}
    $scope.search=function (page,rows) {
        brandService.search(page,rows,$scope.searchEntity).success(
            function (response) {
                $scope.list=response.rows
                $scope.paginationConf.totalItems=response.total
            }
        )
    }

});