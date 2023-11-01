<template>
    <el-dialog
        class="ba-operate-dialog"
        @open="dialogSendlist"
        :close-on-click-modal="false"
        :model-value="['ReadyList'].includes(baTableSendlist.form.operate!)"
        @close="baTableSendlist.toggleForm"
    >
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <!-- 自定义按钮请使用插槽，甚至公共搜索也可以使用具名插槽渲染，参见文档 -->
        <TableHeader
            :buttons="['refresh', 'comSearch']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('messagesendlist.quick Search Fields') })"
        >
            <div class="slot-total">已读数量：<strong class="onready">{{ totalNum[1] }}</strong> 条&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未读数量：<strong class="noready">{{ totalNum[0] }}</strong> 条</div>
        </TableHeader>

        <!-- 表格 -->
        <!-- 表格列有多种自定义渲染方式，比如自定义组件、具名插槽等，参见文档 -->
        <!-- 要使用 el-table 组件原有的属性，直接加在 Table 标签上即可 -->
        <Table ref="tableRef"></Table>

    </div>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, provide, onMounted, inject } from 'vue'
import baTableClass from '/@/utils/baTable'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import {messagesendlistTotal} from "/@/api/backend/sccd";

defineOptions({
    name: 'messagesendlist',
})

const { t } = useI18n(),totalNum = ref<object>(['','']),
    baTableSendlist = inject('baTable') as baTableClass,
    id = ref<number>(0),
    dialogSendlist = ()=>{
        totalNum.value = ['查询中...','查询中...'];
        id.value = parseFloat(JSON.parse(JSON.stringify(baTableSendlist.form.operateIds)).shift())
        console.log('id.value');
        console.log(id.value);
        messagesendlistTotal(id.value).then(res => {
            console.log('messageTotal返回结果集')
            console.log(res)
            totalNum.value = res.data
        }).catch(err => {
            console.log(err)
        })
        //重置参数对象 filter
        baTable.table.filter = {message_id: id.value}
        //获取列表数据信息执行后初始化表格排序
        baTable.getIndex()?.then(() => {
            baTable.initSort()
            baTable.dragSort()
        })
    }
const tableRef = ref()


/**
 * baTable 内包含了表格的所有数据且数据具备响应性，然后通过 provide 注入给了后代组件
 */
const baTable = new baTableClass(new baTableApi('/admin/Messagesendlist/'), {
    pk: 'id',
    column: [
        {
            label: t('message.messagesendlist.id'),
            prop: 'id',
            align: 'center',
            width: 70,
            operator: 'RANGE',
            sortable: 'custom'
        },
        {
            label: t('message.mes_important'),
            prop: 'message.mes_important',
            align: 'center',
            render: 'tag',
            custom: {'0': 'info', '1': 'danger'},
            operator: 'eq',
            sortable: false,
            replaceValue: {'0': t('message.message__mes_important 0'), '1': t('message.message__mes_important 1')}
        },
        {
            label: t('message.messagesendlist.dev__user_name'),
            prop: 'dev.user_name',
            align: 'center',
            operatorPlaceholder: t('Fuzzy query'),
            operator: 'LIKE'
        },
        {
            label: t('message.messagesendlist.create_time'),
            prop: 'create_time',
            align: 'center',
            render: 'datetime',
            operator: 'RANGE',
            sortable: 'custom',
            width: 160,
            timeFormat: 'yyyy-mm-dd hh:MM:ss'
        },
        {
            label: t('message.messagesendlist.msg_status'),
            prop: 'msg_status',
            align: 'center',
            render: 'tag',
            custom: {'0': 'danger', '1': 'info'},
            operator: 'eq',
            sortable: false,
            replaceValue: {
                '0': t('message.messagesendlist.msg_status 0'),
                '1': t('message.messagesendlist.msg_status 1')
            }
        },
    ],
    dblClickNotEditColumn: [undefined],
}, {
    defaultItems: {msg_status: '0'},
})

provide('baTable', baTable)

onMounted(() => {
    baTable.mount()
})
</script>

<style scoped lang="scss">
.slot-total{
    margin-left:20px;
    .onready{
        color:var(--el-color-info);
    }
    .noready{
        color:var(--el-color-danger);
    }
}
</style>
