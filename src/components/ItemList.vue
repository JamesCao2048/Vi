<template>
  <div
class="flex flex-col transition-all duration-200 overflow-x-hidden border-r dark:border-gray-600 border-gray-300"
    :class="collapse ? 'w-0' : 'w-80'"
>
    <div class="min-h-full w-80 flex flex-col overflow-hidden border-l dark:border-gray-600 border-gray-300">
      <div class="h-10 border-b dark:border-gray-600 border-gray-300">
        <span class="inline leading-10 pl-3 select-none">{{ title }}</span>
        <ElIcon :size="16" class="mr-3 mt-1 float-right cursor-pointer p-2 box-content" @click="switchCollapse">
          <Fold />
        </ElIcon>
      </div>
      <div class="overflow-auto flex-1 pb-10" v-loading="loading" element-loading-background="rgba(255,255,255,0.5)">
        <template v-for="(subData, index) of reallistData" :key="`${index}-${subData.type}`">
          <SubList :type="subData.type" :listData="subData" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Fold } from '@element-plus/icons-vue';
  import { computed, onMounted, ref, watch } from 'vue';
  import SubList from '@/components/SubList.vue';
  import { getData } from '@/api/mock';
  import { getSystemAssets, getAssetInfo, getAssets } from '@/api/assets';
  import { getProjectInfo } from '@/api/project';
  import { useRequest } from 'vue-hooks-plus';
  const props = defineProps({
    activeKey: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    defaultCollapse: {
      type: Boolean,
      default: false
    }
  });
  const emit = defineEmits({
    collapseChange(newCollapse: boolean) {
      return newCollapse !== null;
    }
  });
  function getassetType() {
    if (props.activeKey === 'audio') {
      return 1;
    } else if (props.activeKey === 'video') {
      return 2;
    } else {
      return 3;
    }
  }
  // const { data: listData, refresh } = useRequest(() => getData(props.activeKey));
  let systemAssets: any = ref([]);
  let sourceVideo: any = ref([]);
  let assets = ref([]);

  let loading = ref(false);
  function handleData(data: any) {
    let formatData = data.map((item: any) => {
      return {
        ...item,
        name: item.user_given_name,
        format: item.format,
        time: 3000,
        cover: props.activeKey === 'video' ? '/image/video/online.png' : '/image/audio/audio_0.png',
        source: `https://${item.s3_path}`,
        width: 1242,
        height: 652,
        fps: 25,
        frameCount: 342
      };
    });
    return formatData;
  }
  const fetchData = async() => {
    loading.value = true;
    let systemAssetsResponse: any = await getSystemAssets({ assetType: getassetType(), operationType: 1 });

    console.log('systemAssetsResponse', systemAssetsResponse);

    const projectInfo: any = await getProjectInfo({});
    const sourceasset: any = await getAssetInfo({ aid: projectInfo?.one_click_option.input_video_id });

    sourceVideo.value = handleData([sourceasset]);

    let assetsresponse: any = await getAssets({ assetType: getassetType() });
    assets.value = handleData(assetsresponse);

    systemAssets.value = handleData(systemAssetsResponse);
    console.log(sourceVideo, systemAssets);
    // setTimeout(()=>{
    //   loading.value = false
    // },1000)
    loading.value = false;

  // assets.value = assetsResponse.data;
  };
  onMounted(() => {
    fetchData();
  });

  const reallistData = computed(() => {
    if (props.activeKey === 'video') {
      return [
        {
          title: 'Source',
          type: props.activeKey,
          items: sourceVideo
        },
        {
          title: 'uploaded',
          type: props.activeKey,
          items: assets
        }, {
          title: 'system default',
          type: props.activeKey,
          items: systemAssets
        }];
    } else if (props.activeKey === 'audio') {
      return [
        {
          title: 'uploaded',
          type: props.activeKey,
          
          items: [{
            cover: '/image/audio/audio_0.png',
            time: 25000,
            format: 'mp3',
            name: 'test1',
            source: '/audio/audio_0.mp3'
          }]
        }, {
          title: 'system default',
          type: props.activeKey,
          items: systemAssets
        }];
    } else if (props.activeKey === 'text') {
      return [
        {
          title: 'system default',
          type: props.activeKey,
          items: [{
                    name: 'Always Good',
                    fontfamily: 'Always Good',
                    attr: { color: '#fff', fontSize: 40, left: 385.5, scale: 100, text: 'abc', top: 341 }
                  },
                  {
                    name: 'big-price',
                    fontfamily: 'big-price',
                    attr: { color: '#fff', fontSize: 40, left: 385.5, scale: 100, text: 'abc', top: 341 }
                  },
                  {
                    name: 'chunkfive',
                    fontfamily: 'chunkfive',
                    attr: { color: '#fff', fontSize: 40, left: 385.5, scale: 100, text: 'abc', top: 341 }
                  },
                  {
                    name: 'lato',
                    fontfamily: 'lato',
                    attr: { color: '#fff', fontSize: 40, left: 385.5, scale: 100, text: 'abc', top: 341 }
                  },
                  {
                    name: 'Lobster',
                    fontfamily: 'Lobster',
                    attr: { color: '#fff', fontSize: 40, left: 385.5, scale: 100, text: 'abc', top: 341 }
                  },
                  {
                    name: 'oakland',
                    fontfamily: 'oakland',
                    attr: { color: '#fff', fontSize: 40, left: 385.5, scale: 100, text: 'abc', top: 341 }
                  },
                  {
                    name: 'pacifico',
                    fontfamily: 'pacifico',
                    attr: { color: '#fff', fontSize: 40, left: 385.5, scale: 100, text: 'abc', top: 341 }
                  },
                  {
                    name: 'roboto',
                    fontfamily: 'roboto',
                    attr: { color: '#fff', fontSize: 40, left: 385.5, scale: 100, text: 'abc', top: 341 }
                  },
                  {
                    name: 'Sunlit Memories',
                    fontfamily: 'Sunlit Memories',
                    attr: { color: '#fff', fontSize: 40, left: 385.5, scale: 100, text: 'abc', top: 341 }
                  }]
        }];
    } else {
      return [
        {
          title: 'uploaded',
          type: props.activeKey,
          items: []
        }, {
          title: 'system default',
          type: props.activeKey,
          items: systemAssets
        }];
    }
  });
  watch(() => props.activeKey, () => {
    // refresh();
    fetchData();
  });

  const title = computed(() => props.title);
  const collapse = ref(props.defaultCollapse);
  function switchCollapse() {
    collapse.value = !collapse.value;
  }

  watch(collapse, newValue => {
    emit('collapseChange', newValue);
  });
  watch(() => props.defaultCollapse, newValue => {
    collapse.value = newValue;
  });
</script>