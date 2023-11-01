<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <!-- 自定义按钮请使用插槽，甚至公共搜索也可以使用具名插槽渲染，参见文档 -->
        <TableHeader
            :buttons="['refresh', 'add', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('software.quick Search Fields') })"
        ></TableHeader>

        <!-- 表格 -->
        <!-- 表格列有多种自定义渲染方式，比如自定义组件、具名插槽等，参见文档 -->
        <!-- 要使用 el-table 组件原有的属性，直接加在 Table 标签上即可 -->
        <Table ref="tableRef"></Table>

        <!-- 表单 -->
        <PopupForm />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import baTableClass from '/@/utils/baTable'

import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'

defineOptions({
    name: 'software',
})

const { t } = useI18n()
const tableRef = ref()


/**
 * baTable 内包含了表格的所有数据且数据具备响应性，然后通过 provide 注入给了后代组件
 */
const baTable = new baTableClass(new baTableApi('/admin/Software/'), {
  pk: 'id',
  column: [
    {label: t('software.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom'},
    {
      label: t('software.type'),
      prop: 'type',
      align: 'center',
      render: 'tag',
      operator: 'eq',
      sortable: false,
      replaceValue: {
        '1': t('software.type 1'),
        '2': t('software.type 2'),
        '3': t('software.type 3'),
        '4': t('software.type 4')
      }
    },
    {
      label: t('software.version_code'),
      prop: 'version_code',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      operator: 'LIKE',
      sortable: false
    },
    {
      label: t('software.version_name'),
      prop: 'version_name',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      operator: 'LIKE',
      sortable: false
    },
    {
      label: t('software.package_name'),
      prop: 'package_name',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      operator: 'LIKE',
      sortable: false
    },
    {
      label: t('software.file_url'),
      prop: 'file_url',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      operator: 'LIKE'
    },
    {
      label: t('software.create_time'),
      prop: 'create_time',
      align: 'center',
      render: 'datetime',
      operator: 'RANGE',
      sortable: 'custom',
      width: 160,
      timeFormat: 'yyyy-mm-dd hh:MM:ss'
    },
  ],
  dblClickNotEditColumn: [undefined, 'id', 'type', 'version_code', 'version_name', 'package_name', 'file_url', 'create_time'],
}, {
  defaultItems: {type: null, version_code: 0},
})

provide('baTable', baTable)

onMounted(() => {
    baTable.table.ref = tableRef.value
    baTable.mount()
    baTable.getIndex()?.then(() => {
        baTable.initSort()
        baTable.dragSort()
    })
})
</script>

<style scoped lang="scss"></style>
