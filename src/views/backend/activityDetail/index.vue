<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <!-- 自定义按钮请使用插槽，甚至公共搜索也可以使用具名插槽渲染，参见文档 -->
        <TableHeader
            :buttons="['refresh', 'add', 'comSearch']"
        ></TableHeader>

        <!-- 表格 -->
        <!-- 表格列有多种自定义渲染方式，比如自定义组件、具名插槽等，参见文档 -->
        <!-- 要使用 el-table 组件原有的属性，直接加在 Table 标签上即可 -->
        <Table ref="tableRef"></Table>

        <!-- 表单 -->
        <PopupForm />

        <!-- 弹窗看二维码 -->
        <ScanQrCode ref="popupQrcode" />

        <!-- 弹窗看扫码清单 -->
        <Activityscan />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import baTableClass from '/@/utils/baTable'
import { defaultOptButtons } from '/@/components/table'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import PopupForm from './popupForm.vue'
import ScanQrCode from './scanQrCode.vue'
import Activityscan from '../activityscan/index.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'

defineOptions({
    name: 'activity',
})

const { t } = useI18n()
const tableRef = ref()
// const optButtons: OptButton[] = defaultOptButtons(['edit'])
let optButtons: OptButton[] = defaultOptButtons(['edit'])


/**
 * baTable 内包含了表格的所有数据且数据具备响应性，然后通过 provide 注入给了后代组件
 */
const baTable = new baTableClass(new baTableApi('/admin/ActivityDetail/'), {
  pk: 'id',
  column: [
    {label: t('id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom'},
    {
      label: t('学生名字'),
      prop: 'user_name',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      operator: 'LIKE',
      sortable: false
    },
      {
          label: t('参加次数'),
          prop: 'count',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          operator: 'LIKE'
      },
      {
          label: t('学段名'),
          prop: 'period.phase_name',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          render: 'tags',
          operator: 'LIKE'
      },
      {
          label: t('年级名'),
          prop: 'grade.grade_name',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          render: 'tags',
          operator: 'LIKE'
      },
      {
          label: t('班级名'),
          prop: 'class_name',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          operator: 'LIKE',
          sortable: false
      },
      {
          label: t('dev.in_year'),
          prop: 'in_year',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          operator: 'LIKE',
          sortable: false
      },
      {
          label: t('学校名'),
          prop: 'school_name',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          operator: 'LIKE',
          sortable: false
      },
      {
          label: t('班主任手机号'),
          prop: 'teacher_mobile',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          operator: 'LIKE',
          sortable: false
      },
      {
          label: t('班主任'),
          prop: 'teacher_name',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          operator: 'LIKE',
          sortable: false
      },
      {
          label: t('监护人'),
          prop: 'guardian_name',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          operator: 'LIKE',
          sortable: false
      },
      {
          label: t('监护人手机'),
          prop: 'guardian_mobile',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          operator: 'LIKE',
          sortable: false
      },
      {
          label: "设备号",
          prop: 'device_id',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          operator: 'LIKE',
          sortable: false
      },
      {
          label: "mac地址",
          prop: 'mac_id',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          render: 'tags',
          operator: 'LIKE'
      },
      {
          label: "状态",
          prop: 'device_status',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          render: 'tags',
          operator: 'LIKE',
          replaceValue: {
              '0': "正常",
              '1': "遗失",
              '2': "损坏"
          }
      },
      {
          label: t('更新时间'),
          prop: 'update_time',
          align: 'center',
          render: 'datetime',
          operator: 'RANGE',
          sortable: 'custom',
          width: 160,
          timeFormat: 'yyyy-mm-dd hh:MM:ss'
      },
  ],
  dblClickNotEditColumn: [undefined],
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
