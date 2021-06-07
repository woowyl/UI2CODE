module.exports = class Polybool {
  constructor(dataList) {
    this.list = []
    this.domTree = undefined
    this.init(dataList)
  }

  init(dataList = []) {

    const getPolygon = ({ row_min, row_max, column_min, column_max}) => {
      return [
        [row_min, column_min],
        [row_min, column_max],
        [row_max, column_min],
        [row_max, column_max]
      ]
    }

    this.list = dataList.map((item) => {
      const polygon = getPolygon(item)
      return {
        ...item,
        polygon,
        contains: []
      }
    })
  }

  createDomTree() {
    for(let i = 0; i < this.list.length; i++) {
      const model = this.list[i]

      for(let j = 0; j < this.list.length; j++) {
        const model2 = this.list[j]

        if(model.id !== model2.id) {
          const isInclude = this.isIntersect(model, model2)
          if(isInclude) {
            model.contains.push(model2.id)
          }
        }
      }
    }
    console.log(this.list)
  }

  // 判断2个元素是否互相包含, 暂时考虑矩形
  isIntersect(model1, model2) {
    const flag1 = model1.polygon.every((point) => {
      const [x_point, y_point] = point
      return  (model2.row_min <= x_point && x_point <= model2.row_max)
        && (model2.column_min <= y_point && y_point <= model2.column_max)
    })

    const flag2 = model2.polygon.every((point) => {
      const [x_point, y_point] = point
      return (model1.row_min <= x_point && x_point <= model1.row_max)
        && (model1.column_min <= y_point && y_point <= model1.column_max)
    })
    return flag1 || flag2
  }
}