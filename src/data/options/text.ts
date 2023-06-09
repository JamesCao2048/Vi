import { mappingFormItem } from '@/utils/formItemUtils';
// 元素属性配置
export const Options = {
    attributes: [
        mappingFormItem('Tabs', {
            children: [
                mappingFormItem('TabPane', {
                    name: 'properties',
                    children: [
                        mappingFormItem('Collapse', {
                            children: [
                                mappingFormItem('CollapsePane', {
                                    name: 'position',
                                    children: [
                                        mappingFormItem('Flex', { attr: { col: 2 }, name: 'position', children: [
                                                mappingFormItem('Number', { attr: {
                                                        controlsPosition: 'right'
                                                    }, name: 'x', mappingKey: 'left', defaultValue: 0 }),
                                                mappingFormItem('Number', { attr: {
                                                        controlsPosition: 'right'
                                                    }, name: 'y', mappingKey: 'top', defaultValue: 0 })
                                            ] }),
                                        mappingFormItem('Slider', { attr: {
                                                min: 1,
                                                max: 200,
                                                step: 1
                                            }, name: 'scaler', mappingKey: 'scale', defaultValue: 100, label: '%' })
                                    ]
                                })
                            ]
                        }),
                        mappingFormItem('Collapse', {
                            children: [
                                mappingFormItem('CollapsePane', {
                                    name: 'text',
                                    children: [
                                        mappingFormItem('Number', { attr: {
                                                controlsPosition: 'right'
                                            }, name: 'fontsize', mappingKey: 'fontSize', defaultValue: 40 }),
                                        mappingFormItem('TextArea', { attr: {
                                                autosize: {
                                                    minRows: 1,
                                                    maxRows: 4
                                                },
                                                placeholder: 'please input'
                                            }, name: 'content', mappingKey: 'text', defaultValue: 'placeholder' }),
                                        mappingFormItem('Color', { name: 'color', mappingKey: 'color', defaultValue: '#fff' })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                mappingFormItem('TabPane', {
                    name: '动画',
                    children: []
                })
            ]
        })
    ]
};