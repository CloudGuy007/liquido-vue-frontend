import Vue from 'vue'
import LiquidoHome from 'src/controllers/LiquidoHome'

/* global expect */
describe('LiquidoHome.vue', () => {
  it('should render correct title', () => {
    const vm = new Vue({
      template: '<div><liquido-home></liquido-home></div>',
      components: { LiquidoHome }
    }).$mount()
    expect(vm.$el.querySelector('p.lead').textContent).to.contain('interactive, representative and direct democracy')
  })
})
