// function tplReplace(template, templateObject) {
//   return template().replace(/\{\{(.*?)\}\}/g, (...args) => {
//     return templateObject[args[1].trim()];
//   });
// }
// export { tplReplace };
function tplReplace(template, templateObj) {
  return template().replace(/\{\{(.*?)\}\}/g, (...args) => {
    return templateObj[args[1].trim()]
  })
}
function scrollToTop() {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 0)
}
function setPageData(data, count) {
  const len = data.length
  let pageData = []
  let index = 0
  while (index < len) {
    pageData.push(data.slice(index, (index += count)))
  }
  return pageData
}
function checkToBottom(callback) {
  // console.log(_getScrollTop());
  // console.log(_getClientHeight());
  // console.log(_getScrollHeight());
  // let flag = true
  if (_getScrollTop() + _getClientHeight() >= _getScrollHeight() - 50) {
    callback()
  }
}
function getParentNode(target) {
  while ((target = target.parentNode)) {
    if (target.className.split(' ')[0] == 'news-item') {
      return target
    }
  }
}

function getUrlValue(key) {
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
  // console.log(window.location.search);
  const res = window.location.search.substr(1).match(reg)
  return res !== null ? decodeURIComponent(res[2]) : null
}
//ScrollTop 滚动条滚动的距离
function _getScrollTop() {
  var scrollTop = 0,
    bodyScrollTop = 0,
    documentScrollTop = 0
  if (document.body) {
    bodyScrollTop = document.body.scrollTop
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop
  }
  scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop
  return scrollTop
}

//文档实际内容真正的高度  包括只有移动滚动条才可以看到的内容
function _getScrollHeight() {
  var scrollHeight = 0,
    bodyScrollHeight = 0,
    documentScrollHeight = 0
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  scrollHeight = bodyScrollHeight - documentScrollHeight > 100 ? bodyScrollHeight : documentScrollHeight
  return scrollHeight
}

//窗口可视化范围的高度
function _getClientHeight() {
  var windowHeight = 0
  if (document.compatMode == 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }
  return windowHeight
}

function checkImgShow() {
  return _getScrollTop() + _getClientHeight()
}
export { getUrlValue, getParentNode, tplReplace, scrollToTop, setPageData, checkToBottom, checkImgShow }
