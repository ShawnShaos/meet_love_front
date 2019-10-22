Component({
  properties: { //属性
    cover: { // 封面
      type: String,
      value: "http://img4.imgtn.bdimg.com/it/u=367915362,1629657424&fm=26&gp=0.jpg"
    },
    photoNum: { //照片数目
      type: Number,
      value: 1
    },
    avatar: {
      type: String,
      value: "http://mmbiz.qpic.cn/mmbiz_jpg/CwYc0p53dSNG2Elwa1AujluDWQgdfMup7l85rfOl4fnujQlCQLMu4WReACkQIFAO9aKlogEFIQMKz75KHepuibg/640?wx_fmt=jpeg"
    },
    name: {
      type: String,
      value: "昵称"
    },
    address: {
      type: String,
      value: "四川 成都"
    },
    school: {
      type: String,
      value: "电子科技大学 本科"
    },
    basicInfo: {
      type: String,
      value: "27岁 | 天蝎座 | 162cm | IT/互联网"
    }
  },
  options: {
    addGlobalClass: true,
  },
  data: {},
  attached() {},
  methods: {

  }
})