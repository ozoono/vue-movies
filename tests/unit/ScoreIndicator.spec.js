import { shallowMount } from '@vue/test-utils'
import ScoreIndicator from '@/components/ScoreIndicator.vue'

describe('ScoreIndicator.vue', () => {
  let wrapper;

  const animateCircle = jest.fn();

  beforeEach(() => {
    wrapper = shallowMount(ScoreIndicator, {
        methods: {
            animateCircle
        },
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('ScoreIndicator is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('calls animateCircle method when created', () => {
    expect(animateCircle).toBeCalled()
  })

  it('renders a svg element', () => {
    expect(wrapper.find('svg').exists()).toBe(true)
  })
  
  it('renders initial value', () => {
    wrapper.setData({valueInt: '0.', valueDec: '00'});
    expect(wrapper.find('.percent__int').text()).toBe('0.')
    expect(wrapper.find('.percent__dec').text()).toBe('00')
  })
})