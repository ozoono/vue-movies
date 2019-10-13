import { shallowMount } from '@vue/test-utils'
import AppModal from '@/components/AppModal.vue'

describe('AppModal.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AppModal, {
      stubs: {
        'font-awesome-icon': true
      },      
      computed: {
        type: () => 'movie',
        itemInfo: () => {
          return {
            title: 'Demo title',
            poster_path: 'image',
            genres: [{
              name: 'A'
            }]  
          }
        },
        imgPath: () => '/path/to/img/'
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('Modal is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders a div with class item_content', () => {
    expect(wrapper.find('div.item_content').exists()).toBe(true)
  })

  it('renders a title', () => {
    expect(wrapper.find('h1').text()).toBe('Demo title')
  })

  it('renders a img', () => {
    expect(wrapper.find('img').attributes('src')).toBe('/path/to/img/image')
  })

  it('calls closeModal method when click on .overlay or .close_modal element', () => {
    const stub = jest.fn();
    wrapper.setMethods({ closeModal: stub });

    wrapper.find('.overlay').trigger('click')
    expect(stub).toBeCalled()

    wrapper.find('.close_modal').trigger('click')
    expect(stub).toBeCalled()
  })
})