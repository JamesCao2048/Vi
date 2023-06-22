<template>
  <div
    class="inline-block relative"
    draggable="true"
    @dragstart="dragStart"
  >
<div class="text-background" :style="{ fontFamily: formatData.name }">
    {{ formatData.name }}
   </div>
    <label class="mt-1 mb-3 text-xs w-full text-center select-none dark:text-gray-400 text-gray-600" v-show="showData.showName">{{ formatData.name }}</label>
    <span class="h-5 absolute bottom-1 right-2 text-xs text-gray-400" v-show="showData.showTime">{{ formatTime(formatData.time).str }}</span>
    <div
        class="absolute top-16 right-1 bg-blue-500 rounded-full w-6 h-6 opacity-0 hover:opacity-100 transition-opacity duration-150"
        @click="addTrack"
    >
      <ElIcon :size="16" color="#fff" class="cursor-pointer p-1 box-content">
        <Plus />
      </ElIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Plus } from '@element-plus/icons-vue';
  import type { ImageTractItem } from '@/stores/trackState';
  import { formatTime } from '@/utils/common';
  import { computed } from 'vue';
  import { formatTrackItemData } from '@/utils/storeUtil';
  import { useTrackState } from '@/stores/trackState';
  import { usePlayerState } from '@/stores/playerState';
  const props = defineProps({
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    type: {
      type: String,
      default: ''
    }
  });
  const formatData = computed(() => {
    let { time, frameCount } = props.data;
    if (props.type === 'video' && !time) {
      time = parseInt(`${frameCount / 30 * 1000}`);
    }
    return {
      ...props.data,
      time
    };
  });
  const showData = computed(() => {
    return {
      showName: ['effect', 'transition', 'filter'].includes(props.type),
      showTime: ['video'].includes(props.type)
    };
  });
  const store = useTrackState();
  const playStore = usePlayerState();
  function dragStart(event: DragEvent) {
    event.stopPropagation();
    const dragInfo = {
      type: props.type,
      ...formatData.value
    };
    store.dragData.dataInfo = JSON.stringify(dragInfo);
    store.dragData.dragType = props.type;
    store.dragData.dragPoint.x = event.offsetX;
    store.dragData.dragPoint.y = event.offsetY;
    store.selectTrackItem.line = -1;
    store.selectTrackItem.index = -1;
  }
  function addTrack(event: MouseEvent) {
    event.stopPropagation();
    const dragInfo = {
      type: props.type,
      ...formatData.value
    };
    store.addTrack(formatTrackItemData(dragInfo, playStore.playStartFrame));
  }
  function showGif(event: MouseEvent, imageSource: ImageTractItem['type']) {
    if (['image'].includes(props.type) && event.target) {
      (event.target as HTMLImageElement).src = imageSource;
    }
  }
</script>

<style>
@font-face {
  font-family: 'Always Good';
  src: url('/font/Always Good/Always Good.ttf');
}
@font-face {
  font-family: 'big-price';
  src: url('/font/big-price/BigPriceDemoRegularttf');
}
@font-face {
  font-family: 'chunkfive';
  src: url('/font/chunkfive/Chunk Five Print.otf');
}
@font-face {
  font-family: 'lato';
  src: url('/font/lato/Lato-Black.ttf');
}
@font-face {
  font-family: 'Lobster';
  src: url('/font/Lobster/Lobster_1.3.otf');
}
@font-face {
  font-family: 'oakland';
  src: url('/font/oakland/Oakland Free.ttf');
}
@font-face {
  font-family: 'pacifico';
  src: url('/font/pacifico/Pacifico.ttf');
}
@font-face {
  font-family: 'roboto';
  src: url('/font/roboto/Roboto-Regular.ttf');
}
@font-face {
  font-family: 'Sunlit Memories';
  src: url('/font/Sunlit Memories/Sunlit Memories.ttf');
}
.text-background{
  font-size: 16px;
  background-color: black;
  height: 50px;
  width: 130px;
  line-height: 50px;
  padding: 0 10px;
  text-align: center;
  border-radius: 5px;
}
</style>