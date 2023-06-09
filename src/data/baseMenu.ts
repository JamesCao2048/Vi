interface MenuItem {
  title: string,
  key: string,
  active?: boolean,
  icon: string
}
const menuData: MenuItem[] = [
  {
    title: 'Video',
    key: 'video',
    icon: 'VideoIcon'
  },
  {
    title: 'Audio',
    key: 'audio',
    icon: 'AudioIcon'
  },
  {
    title: 'Text',
    key: 'text',
    icon: 'TextIcon'
  },
  {
    title: 'Image',
    key: 'image',
    icon: 'ImageIcon'
  }
  // {
  //   title: '特效',
  //   key: 'effect',
  //   icon: 'EffectsIcon'
  // },
  // {
  //   title: '过渡',
  //   key: 'transition',
  //   icon: 'TransitionIcon'
  // },
  // {
  //   title: '滤镜',
  //   key: 'filter',
  //   icon: 'FilterIcon'
  // }
];

export { menuData };
export type { MenuItem };