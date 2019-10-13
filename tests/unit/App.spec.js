import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import AppModal from '@/components/AppModal.vue'

describe('App.vue', () => {
  let wrapper;

  const $route = {
    fullPath: '/test/path'
  }

  const loadInitialData = jest.fn();

  beforeEach(() => {
    wrapper = shallowMount(App, { 
      methods: {
        loadInitialData
      },
      mocks: {
        $route
      },
      stubs: {
        'router-view': true
      } 
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should renders main element #app', () => {
    expect(wrapper.find("#app").exists()).toBe(true)
  }) 

  it('has a created hook', () => {
    expect(typeof App.created).toBe('function')
  })

  it('calls loadInitialData method when created', () => {
    expect(loadInitialData).toBeCalled()
  })

  it("calls toggleModal when custom event is emitted", () => {
    const toggleModal = jest.fn();
    wrapper.setData({ showModal: true })
    wrapper.setMethods({ toggleModal }); 
    wrapper.find(AppModal).vm.$emit('close-modal')
    expect(toggleModal).toBeCalled()  
  })
})