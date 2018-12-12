package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;
import java.util.Map;

/**
 * 品牌接口
 */
public interface BrandService {
    /**
     * 查询所有品牌
     * @return
     */
    public List<TbBrand> findAll();

    /**
     * 分页查询
     * @param pageNum
     * @param pageSize
     * @return
     */
    public PageResult findPage(int pageNum, int pageSize);

    /**
     * 添加
     * @param tbBrand
     */
    public void add(TbBrand tbBrand);

    /**
     * 通过id查询单条记录
     * @param id
     * @return
     */
    public TbBrand findOne(Long id);

    /**
     * 修改
     * @param tbBrand
     */
    public void update(TbBrand tbBrand);
    /**
     * 删除
     */
    public void delete(Long[] ids);

    /**
     * 模糊查询 分页
     * @param tbBrand
     * @param pageNum
     * @param pageSize
     * @return
     */
    public PageResult findPage(TbBrand tbBrand,int pageNum, int pageSize);

    /**
     * 查询品牌下拉列表
     * @return
     */
    public List<Map> selectOptionList();

}
