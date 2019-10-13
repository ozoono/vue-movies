import { shallowMount } from '@vue/test-utils'
import ItemListMore from '@/components/ItemListMore.vue'

describe('ItemListMore.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ItemListMore, {

    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('ItemListMore is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('shows a div.more-container if loadMore=true', () => {
    wrapper.setProps({loadMore: true});
    expect(wrapper.find('.more-container').isVisible()).toBe(true)
  })

  it('renders a link if not loading', () => {
    wrapper.setProps({loading: false});
    expect(wrapper.find('a').exists()).toBe(true)
  })

  it('calls viewMoreData method when link is clicked', () => {
    wrapper.setProps({loadMore: true, loading: false});
    const stub = jest.fn();
    wrapper.setMethods({ viewMoreData: stub });
    wrapper.find('a').trigger('click.prevent')
    expect(stub).toBeCalled()
  })
})