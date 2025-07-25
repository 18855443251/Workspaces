import Vue from "vue";

Vue.directive("loaddash", {
    inserted(el, binding) {
        // 获取禁用时长，默认2000ms
        const delay = binding.value || 5000;
        // 确保元素支持disabled属性，如果不支持则添加样式类
        const disableElement = () => {
            if ('disabled' in el) {
                el.disabled = true;
            } else {
                el.classList.add('loaddash-disabled');
                el.style.pointerEvents = 'none';
            }
        };

        const enableElement = () => {
            if ('disabled' in el) {
                el.disabled = false;
            } else {
                el.classList.remove('loaddash-disabled');
                el.style.pointerEvents = '';
            }
        };

        // 保存定时器引用，便于清理
        let timer = null;

        // 定义点击处理函数
        const clickHandler = () => {
            // 防止重复触发
            if (timer) return;

            disableElement();

            timer = setTimeout(() => {
                enableElement();
                timer = null;
            }, delay);
        };

        // 绑定事件监听器
        el.addEventListener('click', clickHandler);

        // 在元素上存储清理函数
        el._loaddash_cleanup = () => {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            el.removeEventListener('click', clickHandler);
        };
    },

    // Vue 2.x 中的解绑钩子
    unbind(el) {
        // 清理资源
        if (el._loaddash_cleanup) {
            el._loaddash_cleanup();
            delete el._loaddash_cleanup;
        }
    },
});