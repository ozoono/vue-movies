import { shallowMount } from '@vue/test-utils'
import ItemCard from '@/components/ItemCard.vue'

describe('ItemCard.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ItemCard, {
      stubs: {
        'font-awesome-icon': true
      },
      propsData: {
        type: 'movie',
        item: {
          title: 'Demo title',
          poster_path: 'image'
        }
      },
      computed: {
        imgPath: () => '/path/to/img/'
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('ItemCard is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders a li with class card', () => {
    expect(wrapper.findAll('li.card').length).toEqual(1)
  })

  it('renders a title', () => {
    expect(wrapper.find('span.card-title').text()).toBe('Demo title')
  })

  it('renders a img', () => {
    expect(wrapper.find('img').attributes('src')).toBe('/path/to/img/image')
  })

  it('calls viewDetail method when click on link', () => {
    const stub = jest.fn();
    wrapper.setMethods({ viewDetail: stub });
    wrapper.find('a').trigger('click.prevent')
    expect(stub).toBeCalled()
  })

})