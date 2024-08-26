/**
 * authorizeType 按钮类型 1查询 2新增 3修改 4删除 5其他
 * haveNext  是否有下级按钮 0无 1有 test
 */

function menuObject(index, authorityName, authorizeType, haveNextStr) {
  let haveNext = haveNextStr || "0";
  return {
    authorityCode: index,
    authorityName: authorityName,
    authorizeType,
    haveNext: haveNext,
  };
}

export default {
  list: [
    {
      desc: "活动管理-营销活动-优惠券使用统计",
      value: "/activity-mgr/marketing-activities/coupon-usage",
      menuList: [menuObject("1", "查询", "1"), menuObject("2", "下载", "5")],
    },
    {
      desc: "活动管理-营销活动-网点活动管理员信息管理",
      value: "/activity-mgr/marketing-activities/network-activities",
      menuList: [
        menuObject("1", "查询", "1"),
        menuObject("2", "新增", "2"),
        menuObject("3", "删除", "4"),
        menuObject("4", "修改", "3"),
      ],
    },
  ],
};
