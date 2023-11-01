<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <!-- 自定义按钮请使用插槽，甚至公共搜索也可以使用具名插槽渲染，参见文档 -->
        <TableHeader
            :buttons="['refresh', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('sos.quick Search Fields') })"
        ></TableHeader>

        <!-- 表格 -->
        <!-- 表格列有多种自定义渲染方式，比如自定义组件、具名插槽等，参见文档 -->
        <!-- 要使用 el-table 组件原有的属性，直接加在 Table 标签上即可 -->
        <Table ref="tableRef"></Table>
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import { TableColumnCtx } from 'element-plus'
import baTableClass from '/@/utils/baTable'
import { defaultOptButtons } from '/@/components/table'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'

defineOptions({
    name: 'sos',
})

const { t } = useI18n()
const tableRef = ref()
const optButtons: OptButton[] = defaultOptButtons(['delete'])
const openExternalLink = ()=>{
    const url = 'https://www.example.com'; // 要打开的外部链接
    window.open(url, '_blank'); // 打开新窗口并加载链接
}
/**
 * baTable 内包含了表格的所有数据且数据具备响应性，然后通过 provide 注入给了后代组件
 */
// const baTable = new baTableClass(
//     new baTableApi('/admin/Sos/'),
//     {
//         pk: 'id',
//         column: [
//             { type: 'selection', align: 'center', operator: false },
//             { label: t('sos.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom' },
//             { label: t('sos.dev__user_name'), prop: 'dev.user_name', align: 'center', operatorPlaceholder: t('Fuzzy query'), render: 'tags', operator: 'LIKE' },
//             { label: t('sos.dev__guardian_name'), prop: 'dev.guardian_name', align: 'center', operatorPlaceholder: t('Fuzzy query'), render: 'tags', operator: 'LIKE' },
//             { label: t('sos.dev__guardian_mobile'), prop: 'dev.guardian_mobile', align: 'center', operatorPlaceholder: t('Fuzzy query'), render: 'tags', operator: 'LIKE' },
//             { label: t('sos.video_url'), prop: 'video_url', render: 'customTemplate', customTemplate: (row: TableRow, field: TableColumn, value: any, column: TableColumnCtx<TableRow>, index: number) => {
//                     return '<a class="el-tag el-tag--default el-tag--light m-10" href="' + value + '"target="_blank">点击查看视频</a>';
//                 }},
//             { label: t('sos.create_time'), prop: 'create_time', align: 'center', render: 'datetime', operator: 'RANGE', sortable: 'custom', width: 160, timeFormat: 'yyyy-mm-dd hh:MM:ss' },
//             { label: t('Operate'), align: 'center', width: 100, render: 'buttons', buttons: optButtons, operator: false },
//         ],
//         dblClickNotEditColumn: [undefined],
//     },
//     {
//         defaultItems: {},
//     }
// )
const baTable = new baTableClass(new baTableApi('/admin/Sos/'), {
  pk: 'id',
  column: [
    {label: t('sos.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom'},
    {
      label: t('sos.dev__user_name'),
      prop: 'dev.user_name',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      render: 'tags',
      operator: 'LIKE'
    },
    {
      label: t('sos.dev__guardian_name'),
      prop: 'dev.guardian_name',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      render: 'tags',
      operator: 'LIKE'
    },
    {
      label: t('sos.dev__guardian_mobile'),
      prop: 'dev.guardian_mobile',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      render: 'tags',
      operator: 'LIKE'
    },
    {label: t('sos.sos_addr'), prop: 'sos', render: 'url', target: '_blank'},
    {label: t('sos.video_url'), prop: 'video_url', render: 'url', target: '_blank'},
    {
      label: t('sos.create_time'),
      prop: 'create_time',
      align: 'center',
      render: 'datetime',
      operator: 'RANGE',
      sortable: 'custom',
      width: 160,
      timeFormat: 'yyyy-mm-dd hh:MM:ss'
    },
    {label: t('Operate'), align: 'center', width: 100, render: 'buttons', buttons: optButtons, operator: false},
  ],
  dblClickNotEditColumn: [undefined, 'id', 'dev.user_name', 'dev.guardian_name', 'dev.guardian_mobile', 'sos', 'video_url', 'create_time'],
}, {
  defaultItems: {},
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
