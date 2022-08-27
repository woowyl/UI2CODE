(function() {
    /**
     * 打分相关
     */
    
    window.SOCORED = 22248;  // 有打分的数据
    window.NOSCORED = 81485;  //没有打分的电影

    window.CHINA_SCORE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 31, 48, 60, 57, 63, 62, 71, 60, 58, 60, 78, 87, 95, 95, 84, 82, 77, 93, 70, 74, 59, 87, 99, 80, 97, 81, 78, 97, 87, 97, 90, 100, 87, 104, 101, 100, 108, 111, 98, 106, 90, 106, 97, 100, 111, 94, 87, 93, 68, 82, 73, 63, 76, 54, 56, 60, 53, 52, 40, 30, 25, 20, 22, 16, 10, 11, 6, 5, 6, 8, 4, 4, 3, 1, 0, 1, 1, 0];    //中国电影0-10分数据 以.1为分割
    window.FOREIGN_SCORE =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 7, 15, 20, 21, 31, 37, 37, 42, 57, 47, 64, 55, 77, 94, 112, 92, 91, 115, 136, 139, 142, 160, 154, 194, 193, 189, 190, 223, 273, 275, 327, 331, 382, 426, 425, 414, 405, 473, 482, 602, 603, 665, 627, 668, 610, 561, 441, 538, 526, 533, 504, 460, 423, 360, 322, 280, 180, 195, 186, 182, 171, 124, 122, 97, 105, 75, 56, 68, 25, 42, 21, 12, 2, 0, 0, 1];   //国外电影0-10分数据

    // [0]:0-1  [1]:1.1-2 [2]:2.1-3 [3]:3.1-4 [4]:4.1-5 
    // [5]:5.1-6 [6]:6.1-7 [7]:7.1-8 [8]:8.1-9 [9]:9.1-10
    window.COMEDY_INT_NUM = [0, 1, 172, 374, 504, 1123, 1667, 1110, 356, 39]  //喜剧按证书分割0-0.9   1-
    window.FICTION_INT_NUM = [0, 1, 142, 275, 296, 407, 507, 348, 139, 17]
    window.LOVE_INT_NUM = [0, 1, 134, 300, 386, 690, 953, 582, 104, 9]  //爱情分数分布
    window.HORROR_INT_NUM = [0, 0, 287, 682, 1118, 1501, 1413, 649, 165, 10]
    window.FIGHT_INT_NUM = [0, 0, 156, 336, 472, 652, 775, 471, 126, 4]
    window.CARTOON_INT_NUM = [0, 0, 39, 38, 78, 217, 457, 619, 405, 37]
    /**
     * 电影数量分析
     */
    
    window.NUM_YEAR_TOTAL = [10, 23, 1, 6, 43, 12, 7, 23, 9, 12, 9, 23, 11,7,16, 12]
    window.NUM_YEAR_TOTAL_AFTER = [9.482999999999999, 12.072, 10.704999999999998, 15.177, 21.546000000000003, 18.512999999999995, 14.424, 14.434, 13.094000000000001, 11.854, 13.308, 14.935, 13.131, 11.397, 11.519, 8.949]
   
    
    window.NUM_COUNTRY = [27740, 21051, 10819, 6467, 4855, 3991, 3209, 2857, 2523, 1930]
    
    /**
     * TOP20
     */
    window.SCORE_TOP_NAMES = ['陈奕迅DUO演唱会', '悲惨世界：25周年纪念演唱会', '雷曼兄弟三部曲 Nationa', '酷玩乐队：2014鬼故事演唱会', '汉密尔顿 Hamilton', '唐顿庄园：2015圣诞特别篇 ', '英国国家剧院50周年庆典Nat', '夏目友人帐 第六季 特别篇 铃', '夏目友人帐 第六季 特别篇 梦', '夏目友人帐 第五季 特别篇 一', '莫扎特！ Mozart! Da', '第十二夜Shakespeare', '安德烈·波切利米兰大教堂空场独', '黄子华栋笃笑之洗燥黃子華棟篤笑', '化学兄弟：不去想TheChem', '永不消逝的电波 高清放映 永不', '天使在美国第二部：重建 Nat', '娱乐圈血肉史2', '第五十一届超级碗 Super ', '摇滚莫扎特']
    window.SCORE_TOP_VALUES = [9.8, 9.6, 9.6, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.4, 9.4, 9.4, 9.4, 9.4, 9.4, 9.4]

    window.SCORE_NUM_TOP_NAMES =['流浪地球', '我不是药神', '盗梦空间', '哪吒之魔童降世', '疯狂动物城 Zootopia', '怦然心动', '星际穿越 Interstell', '让子弹飞', '摔跤吧！爸爸 Dangal', '少年的你', '寻梦环游记 Coco', '绿皮书 Green Book', '少年派的奇幻漂流LifeofP', '头号玩家 Ready Play', '你的名字。 君の名は。', '寄生虫 기생충', '看不见的客人 Contrati', '复仇者联盟4：终局之战 Ave', '釜山行 부산행', '无名之辈']
    window.SCORE_NUM_TOP_VALUES = [1564016.0, 1551579.0, 1528609.0, 1474279.0, 1357539.0, 1324842.0, 1215883.0, 1192784.0, 1167540.0, 1138530.0, 1138266.0, 1129289.0, 1058413.0, 1043732.0, 1026552.0, 1001972.0, 871774.0, 864996.0, 849297.0, 834317.0]
    window.SCORE_NUM_TOP_SCORE = [7.9, 9.0, 9.3, 8.5, 9.2, 9.1, 9.3, 8.8, 9.0, 8.3, 9.1, 8.9, 9.1, 8.7, 8.4, 8.7, 8.8, 8.5, 8.5, 8.1]

    window.COMMENT_TOP_NAMES = ['流浪地球', '哪吒之魔童降世', '我不是药神', '少年的你', '怦然心动', '寻梦环游记 Coco', '绿皮书 Green Book', '星际穿越 Interstell', '盗梦空间', '诛仙1 诛仙 Ⅰ', '寄生虫 기생충', '复仇者联盟4：终局之战 Ave', '头号玩家 Ready Play', '疯狂动物城 Zootopia', '战狼2', '你的名字。 君の名は。', '摔跤吧！爸爸 Dangal', '我和我的祖国', '少年派的奇幻漂流LifeofP', '海王 Aquaman']
    window.COMMENT_TOP_VALUES = [609852.0, 509635.0, 428267.0, 400571.0, 300296.0, 290695.0, 288396.0, 287771.0, 283805.0, 280225.0, 274819.0, 265972.0, 266031.0, 256621.0, 254218.0, 247847.0, 240925.0, 236155.0, 236199.0, 226955.0]
    window.COMMENT_TOP_SCORE = [7.9, 8.5, 9.0, 8.3, 9.1, 9.1, 8.9, 9.3, 9.3, 4.5, 8.7, 8.5, 8.7, 9.2, 7.1, 8.4, 9.0, 7.7, 9.1, 7.6]
})();