export default {
    isAndroid() {
        return navigator.userAgent.includes('Android') || navigator.userAgent.includes('Adr')
    },
    isIOs() {
        return navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    },
    /**
    * 调用原生SDK能力
    *
    * @param params 参数
    * @param callback 回调函数
    * @param name 接口名
    */
    callNative(params, callback = () => { }, name = 'callNative') {
        console.log(params)
        const dsBridge = require('dsbridge')
        dsBridge.call(name, params, callback)
    },
    /**
   * 获取GPS信息
   *
   * @param {function} callback 回调函数
   */
    getLocation(callback) {
        const params = {
            dataType: 'GetLocation',
            continue: '0',
        }
        this.callNative(params, callback)
    },
    /**
     * 关闭当前H5页面
     *
     * @param {function} callback 回调函数
     */
    closeWeb(callback = () => { }) {
        const param = {
            dataType: "CloseWeb",
        };
        this.callNative(param, callback);
    },
    // 打开新 H5 容器
    newWeb(url, extend = {}, callback = () => { }) {
        let params = {
            dataType: 'NewWeb',
            url: url,
            isTitlebar: '0',
        }
        params = Object.assign(params, extend)
        this.callNative(params, callback)
    },
    // 打开第三方应用
    newApp(url, extend = {}, callback = () => { }) {
        let params = {}
        let scheme = 'workassis4yxshn'
        let str = url.substring(url.lastIndexOf(":"));
        let subUrl = str.substring(3, str.length)
        if (this.isAndroid()) {
            params = {
                dataType: 'OpenApp',
                appCode: '1000',
                scheme: scheme,
                url: subUrl,
            }
        } else if (this.isIOs()) {
            params = {
                dataType: 'OpenApp',
                appCode: '1000',
                url: url,
            }
        }

        params = Object.assign(params, extend)
        this.callNative(params, callback)
    },
};
