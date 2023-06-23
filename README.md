<!-- # CcClip

## 简介
Vue 3 + FFmpeg 实现纯前端音视频编辑 <br/>



## 功能
- 多轨道时间轴，支持帧缩放，时间缩放
- 支持多种类型轨道的添加删除
- 多功能轨道调节，支持音视频轨道内裁剪，支持轨道拖拽调整顺序、起止帧
- 可伸缩轨道列表，灵活调整轨道列表高度
- 可配置参数容器，轨道属性调节全部由配置文件生成
- ffmpeg 
  - 核心API封装管理
  - 调用队列封装，支持并发运行run
  - gif抽帧、视频抽帧、视频裁切、音视频分离、文件下载
  - 音频裁切、多音频合成、音频波形 

## reference
- https://trac.ffmpeg.org/wiki/Waveform  
- https://github.com/chuxiaoguo/vue-sketch-ruler 时间轴参考此工具库实现
- 
## 脚本说明

```sh
pnpm install
```

### 本地开发

```sh
npm run dev
```

### 生产构建

```sh
npm run build
```


### 代码检查

```sh
npm run lint
```

### 代码检查与修复

```sh
npm run lint-fix
```

## 常用命令
### 1. 获取视频时长信息、总帧数信息：
```shell
$ ffmpeg -hide_banner -i video_1.mp4  -f null - -->



run: 
```sh
pnpm install

pnpm run dev-ssl  

```
