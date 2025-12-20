// 远程配置选项
export const REMOTE_CONFIGS = [
  {
    label: "自用规则",
    options: [
      {
        label: "适用于机场节点 (与Github同步)",
        value: "https://cdn.jsdmirror.com/gh/cncherisher/aclclash@master/airport.ini"
      },
      {
        label: "适用于自建节点 (与Github同步)",
        value: "https://cdn.jsdmirror.com/gh/cncherisher/aclclash@master/own.ini"
      },
      {
        label: "适用于回国节点 (与Github同步)",
        value: "https://cdn.jsdmirror.com/gh/cncherisher/aclclash@master/backcn.ini"
      }
    ]
  },
  {
    label: "ACL4SSR",
    options: [
      {
        label: "ACL4SSR_Online 默认版 分组比较全 (与Github同步)",
        value: "https://cdn.jsdmirror.com/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online.ini"
      },
      {
        label: "ACL4SSR_Online_Mini 精简版 (与Github同步)",
        value: "https://cdn.jsdmirror.com/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Mini.ini"
      },
      {
        label: "ACL4SSR_Online_Full 全分组 重度用户使用 (与Github同步)",
        value: "https://cdn.jsdmirror.com/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Full.ini"
      }
    ]
  }
];
