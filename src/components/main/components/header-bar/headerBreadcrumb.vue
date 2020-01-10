<template>
  <div class="custom-bread-crumb">
    <Breadcrumb :style="{fontSize: `${fontSize}px`}">
      <BreadcrumbItem v-for="item in list" :to="item.menu_url" :key="`bread-crumb-${item.menu_name}`">
        {{ item.menu_name }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script>
  import { showTitle } from '@/libs/util'
  export default {
    name: 'customBreadCrumb',
    components: {},
    props: {
      list: {
        type: Array,
        default: () => []
      },
      fontSize: {
        type: Number,
        default: 14
      },
      showIcon: {
        type: Boolean,
        default: false
      }
    },
    mounted() {},
    methods: {
      showTitle (item) {
        return showTitle(item, this)
      },
      isCustomIcon (iconName) {
        return iconName.indexOf('_') === 0
      },
      getCustomIconName (iconName) {
        return iconName.slice(1)
      }
    }
  }
</script>
<style lang="less">
  .custom-bread-crumb{
  }
</style>
