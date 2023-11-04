<template>
    <el-dialog
        class="ba-operate-dialog"
        @open="dialogSendlist"
        :close-on-click-modal="false"
        :model-value="['ScanListStudent'].includes(baTableSendlist.form.operate!)"
        @close="baTableSendlist.toggleForm"
    >
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <!-- 自定义按钮请使用插槽，甚至公共搜索也可以使用具名插槽渲染，参见文档 -->
        <TableHeader
            :buttons="['refresh', 'comSearch']"
        >
            <div class="slot-total">已签到人数：<strong>{{signTotal}}</strong> 人</div>
        </TableHeader>

        <!-- 表格 -->
        <!-- 表格列有多种自定义渲染方式，比如自定义组件、具名插槽等，参见文档 -->
        <!-- 要使用 el-table 组件原有的属性，直接加在 Table 标签上即可 -->
        <Table ref="tableRef"></Table>
    </div>
    </el-dialog>
</template>

<script setup lang="ts">
import {ref, provide, inject, onMounted, nextTick} from 'vue'
import baTableClass from '/@/utils/baTable'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'

defineOptions({
    name: 'activityscanStudent',
})

const { t } = useI18n(),signTotal = ref<string>('统计中...'),
    baTableSendlist = inject('baTable') as baTableClass,
    id = ref<number>(0),
    dialogSendlist = ()=>{
        nextTick(()=>{
            let cur_id = parseFloat(JSON.parse(JSON.stringify(baTableSendlist.form.operateIds)).shift())
            id.value = cur_id
            console.log('id.value');
            console.log(id.value);
            console.log('cur_id');
            console.log(cur_id);
            console.log('还是原来的--也注释了初始化');
            //重置参数对象 filter
            baTable.table.filter = {dev_id: cur_id}

            //获取列表数据信息执行后初始化表格排序
            baTable.getIndex()?.then(() => {
                baTable.initSort()
                baTable.dragSort()
                signTotal.value = baTable.table.total?.toString()
            })
        })
    }
const tableRef = ref()

/**
 * baTable 内包含了表格的所有数据且数据具备响应性，然后通过 provide 注入给了后代组件
 */
const baTable = new baTableClass(new baTableApi('/admin/ActivityscanStudent/'), {
  pk: 'id',
  column: [
    {type: 'selection', align: 'center', operator: false},
    {label: t('activity.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom'},
    {
      label: t('activity.act_name'),
      prop: 'activity.act_name',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      render: 'tags',
      operator: 'LIKE'
    },
    {
      label: t('activity.dev__user_name'),
      prop: 'dev.user_name',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      render: 'tags',
      operator: 'LIKE'
    },
    {
      label: t('activity.create_time'),
      prop: 'create_time',
      align: 'center',
      render: 'datetime',
      operator: 'RANGE',
      sortable: 'custom',
      width: 160,
      timeFormat: 'yyyy-mm-dd hh:MM:ss'
    },
  ],
  dblClickNotEditColumn: [undefined]
}, {
  defaultItems: {},
})

provide('baTable', baTable)

onMounted(()=>{
    //初始化表格一次+
    console.log('放到 onMounted里面来');
    baTable.mount()
})
</script>

<style scoped lang="scss">
.slot-total{
    margin-left:20px;
    strong{
        color:var(--el-color-danger);
    }
}
</style>
