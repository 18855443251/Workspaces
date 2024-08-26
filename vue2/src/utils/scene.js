import Vue from 'vue'
import SceneOptions from 'scene'
const noop = function() {}
/**
 * Scene factory
 *
 * @param {Object} props
 * @return {Scene}
 */
const Scene = function({
  formData = {},
  submit = new Function,
  parentNode = document.body,
}) {
  let vm = Scene._instance

  if (!vm) {
    const SceneConstructor = Vue.extend(SceneOptions)
    vm = Scene._instance = new SceneConstructor({
      propsData: {
        formData,
        submit,
      },
    }).$mount()
  }

  if (!vm.$el.parentNode) {
    parentNode.appendChild(vm.$el)
  }
  vm.formData = formData
  vm.submit = submit
  // vm.visible = true
  // vm.fire()
  vm.show()

  return vm
}

// There is only one toast singleton
Scene._instance = null

/**
 * Hide toast
 */
Scene.hide = () => {
  const SceneConstructor = Vue.extend(SceneOptions)
  if (Scene._instance instanceof SceneConstructor && Scene._instance.visible) {
    Scene._instance.hide()
  }
}
/**
 * Show info toast
 * @param {string} content
 * @param {number=} [duration=3000]
 * @param {boolean=} [hasMask=false]
 * @param {node=} [parentNode=document.body]
 * @returns {Toast}
 */

Scene.submit = (
  formData = {},
  submit = noop, parentNode = document.body) => {
  return Scene({
    formData,
    submit,
    parentNode,
  })
}
Scene.component = SceneOptions

export default Scene
