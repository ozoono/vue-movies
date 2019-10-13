import { shallowMount } from '@vue/test-utils'
import AppNavigation from '@/components/AppNavigation.vue'

describe('AppNavigation.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AppNavigation, {
      stubs: {
        'font-awesome-icon': true,
        'router-link': true
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('AppNavigation is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders a list of items', () => {
    expect(wrapper.find('ul').exists()).toBe(true)
  })
})