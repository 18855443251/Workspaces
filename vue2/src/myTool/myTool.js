/*
 * @Author: your name
 * @Date: 2021-08-09 14:49:16
 * @LastEditTime: 2021-08-10 17:19:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\mixins\myTool.js
 */
(function (w) {
  w.myTool = {
    $: function (id) {
      return typeof id === "string" ? document.getElementById(id) : null
    },
    scroll: function () {
      if (window.pageYOffset) {
        return {
          top: window.pageYOffset,
          left: window.pageXOffset
        }
      } else if (document.compatMode === "CSS1Compat") {
        return {
          top: document.documentElement.scrollTop,
          left: document.documentElement.scrollLeft
        }
      } else {
        return {
          top: document.body.scrollTop,
          left: document.body.scrollLeft
        }
      }
      //   return {
      //     top: 0,
      //     left: 0
      //   }
    },
    client: function () {
      if (window.innerWidth) {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        }
      } else if (document.compatMode === "CSS1Compat") {
        return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        }
      } else {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }
      }
      //   return {
      //     top: 0,
      //     left: 0
      //   }
    }
  }
})(window)