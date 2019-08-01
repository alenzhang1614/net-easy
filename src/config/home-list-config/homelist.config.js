const classfify = {
  title: "",
  enName: "classfify",
  data: [
    {
      toPage: "https://m.you.163.com/item/newItem",
      name: "新品首发",
      picUrl: "https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
    },
    {

      toPage: "https://m.you.163.com/item/list?categoryId=1005000&style=pd",
      name: "居家生活",
      picUrl: "https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
    },
    {
      toPage: "https://m.you.163.com/item/list?categoryId=1010000&style=pd",
      name: "服饰鞋包",
      picUrl: "https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png",
    },
    {
      topage: "https://m.you.163.com/item/list?categoryId=1005002&style=pd",
      name: "美食酒水",
      picUrl: "https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png",
    },
    {
      topage: "https://m.you.163.com/item/list?categoryId=1013001&style=pd",
      name: "个护清洁",
      picUrl: "https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",
    },
    {
      toPage: "https://m.you.163.com/item/list?categoryId=1011000&style=pd",
      name: "母婴亲子",
      picUrl: "https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"
    },
    {
      toPage: "https://m.you.163.com/item/list?categoryId=109243029&style=pd",
      name: "运动旅行",
      picUrl: "https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png",
    },
    {
      toPage: "https://m.you.163.com/item/list?categoryId=1043000&style=pd",
      name: "数码家电",
      picUrl: "https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
    },
    {
      toPage: "https://m.you.163.com/item/list?categoryId=1019000&style=pd",
      name: "全球特色",
      picUrl: "https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png",
    },
    {
      name: "超级会员",
      picUrl: "http://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif",
      topage: "https://m.you.163.com/supermc/index"
    }
  ]
}
const freshMan = {
  title: "新人专享礼",
  enName: "freshMan",
  data: [
  ]
}
const supplying = {
  title: "品牌供应商",
  enName: "supplying",
  toPage: "https://m.you.163.com/manufacturer/list",
  data: [
    {
      tagId: 1080000,
      materialName: "海外制造商",
      toPage: "https://m.you.163.com/item/manufacturer?tagId=1080000&page=1&size=100",
      picUrl: "https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1",
      materialType: "制造商",
      des: "9.9元起",
      iconText: "上新"
    },
    {
      tagId: 1026000,
      topage: "https://m.you.163.com/item/manufacturer?tagId=1026000&page=1&size=100",
      picUrl: "https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1",
      materialName: "CK制造商",
      materialType: " 制造商",
      des: "29.9元起"
    },
    {
      tagId: 1001037,
      topage: "https://m.you.163.com/item/manufacturer?tagId=1001037&page=1&size=100",
      picUrl: "https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1",
      materialName: "新秀丽制造商",
      materialType: " 制造商",
      des: "159元起"
    }, {
      tagId: 1038001,
      topage: "https://m.you.163.com/item/manufacturer?tagId=1038001&page=1&size=100",
      picUrl: "https://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1",
      materialName: "Nine West制造商",
      materialType: " 制造商",
      des: "0元起"
    }
  ]
}
const hotSell = {
  title: "类目热销榜",
  enName: "hotSell",
  data: [{
    toPage: "https://m.you.163.com/item/saleRank",
    title: "热销榜",
    picUrl: "https://yanxuan-item.nosdn.127.net/6713799270914421f403a1447c9713f4.png?imageView&quality=65&thumbnail=200x200"
  },
  {
    toPage: "https://m.you.163.com/item/praiseRank",
    title: "好评榜",
    picUrl: "https://yanxuan.nosdn.127.net/196b7864725e45510cf387d7950f9b5d.png?imageView&quality=65&thumbnail=200x200"
  },
  {
    toPage: "https://m.you.163.com/item/saleRank?categoryId=1005002",
    title: "美食酒水榜",
    picUrl: "https://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200"
  }, {
    title: "服饰鞋包榜",
    picUrl: "https://yanxuan-item.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&quality=65&thumbnail=200x200",
    toPage: "https://m.you.163.com/item/saleRank?categoryId=1010000",
  }, {
    title: "居家生活榜",
    picUrl: "https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200",
    toPage: "https://m.you.163.com/item/saleRank?categoryId=1005000",
  }, {
    title: "个护清洁榜",
    picUrl: "https://yanxuan.nosdn.127.net/7c230892d2958d2c6a777acd9d2d4f95.png?imageView&quality=65&thumbnail=200x200",
    toPage: "https://m.you.163.com/item/saleRank?categoryId=1013001",
  }, {
    title: "数码家电榜",
    picUrl: "https://yanxuan.nosdn.127.net/e94342dbe7894d337f617ea9f45a5917.png?imageView&quality=65&thumbnail=200x200",
    toPage: "https://m.you.163.com/item/saleRank?categoryId=1043000",
  }, {
    title: "运动旅行榜",
    picUrl: "https://yanxuan-item.nosdn.127.net/c27abf14fa51f922122d9c81d7e68bd8.png?imageView&quality=65&thumbnail=200x200",
    toPage: "https://m.you.163.com/item/saleRank?categoryId=109243029",
  }, {
    title: "母婴亲子榜",
    picUrl: "https://yanxuan.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?imageView&quality=65&thumbnail=200x200",
    toPage: "https://m.you.163.com/item/saleRank?categoryId=1011000",
  }, {
    title: "全局特色榜",
    picUrl: "https://yanxuan-item.nosdn.127.net/cbacc8b2a7bab6a559f293ea2b3d045c.png?imageView&quality=65&thumbnail=200x200",
    toPage: "https://m.you.163.com/item/saleRank?categoryId=1019000",
  },
  ]
}
const poplur = {
  title: "人气推荐",
  enName: "poplur",
  data: [

  ]
}
const flashSale = {
  title: "限时购",
  enName: "flashSale"
}
const newProduct = {
  title: "新品首发",
  enName: "newProduct"
}
const shopGuide = {
  title: "",
  enName: "shopGuide",
  data: [
  ]
}
export const homeList = [classfify, freshMan, supplying, hotSell, poplur, flashSale, newProduct, shopGuide]