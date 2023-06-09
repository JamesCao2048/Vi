import { mappingFormItem } from '@/utils/formItemUtils';
// 元素属性配置
export const Options = {
    attributes: [
        mappingFormItem('Tabs', {
            children: [
                mappingFormItem('TabPane', {
                    name: 'Properties',
                    children: [
                        mappingFormItem('Collapse', {
                            children: [mappingFormItem('Boolean', { name: 'Mute', mappingKey: 'silent', defaultValue: false })]
                        })
                    ]
                })
                // mappingFormItem('TabPane', {
                //     name: '动画',
                //     children: []
                // })
            ]
        })
    ]
};