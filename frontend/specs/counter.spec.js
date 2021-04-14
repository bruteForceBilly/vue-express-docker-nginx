import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
    test('clicking button increments the counter value by 1', async () => {    
        const wrapper = mount(Counter)
      
        expect(wrapper.text()).toContain('counter: 0')

        await wrapper.find('button').trigger('click')

        expect(wrapper.text()).toContain('counter: 1')        
    })
})


