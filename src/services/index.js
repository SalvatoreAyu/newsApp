import HTTP from '../libs/http'
import { setPageData } from '../libs/util'

class Service extends HTTP {
  getNewsList(type, count) {
    return new Promise((resolve, reject) => {
      this.ajax({
        url: '涉及到私人key,建议自己去聚合上申请一个账号用吧',
        type: 'POST',
        data: {
          key: '聚合申请账号有个key'
          type: type,
        },
        success(data) {
          if (data.resultcode == 112) {
            console.log(data)
            data = 'noMoney'
            resolve(data)
          } else {
            const pageData = setPageData(data.result.data, count)
            resolve(pageData)
          }
        },
        error(err) {
          reject(err)
        },
      })
    })
  }
}

export default new Service()
