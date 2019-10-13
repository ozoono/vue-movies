import { shallowMount } from '@vue/test-utils'
import AppSearch from '@/components/AppSearch.vue'
import router from '@/router';

describe('AppSearch.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AppSearch, {
      stubs: {
        'font-awesome-icon': true
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('AppSearch is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('displays an empty input field', () => {
    expect(wrapper.find('input').element.placeholder).toBe('Search movie or TV show...')
    expect(wrapper.find('input').element.value).toBe('')
  })

  it('calls search method when press enter on input', () => {
    const stub = jest.fn();
    wrapper.setMethods({ search: stub });
    wrapper.find('input').trigger('keypress.enter')
    expect(stub).toBeCalled()
  })  
})