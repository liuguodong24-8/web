<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <!-- 自定义按钮请使用插槽，甚至公共搜索也可以使用具名插槽渲染，参见文档 -->
        <TableHeader
            :buttons="['refresh', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('dev.quick Search Fields') })"
        >
            <template #refreshPrepend>

                    <el-popconfirm @confirm="onActions(1)"
                                   :confirm-button-text="t('锁定')"
                                   :cancel-button-text="t('取消')"
                                   confirmButtonType="danger"
                                   :title="t('是否锁定?')">
                        <template #reference>
                            <el-button type="danger">锁定</el-button>
                        </template>
                    </el-popconfirm>
                    <el-popconfirm @confirm="onActions(0)"
                                   :confirm-button-text="t('解锁')"
                                   :cancel-button-text="t('取消')"
                                   :title="t('是否解锁?')">
                        <template #reference>
                            <el-button type="success">启用</el-button>
                        </template>
                    </el-popconfirm>

                <!-- 刷新按钮前插槽内容 -->
                <!-- 一键锁定 -->
                <el-popconfirm @confirm="onAction(1)"
                               :confirm-button-text="t('dev.lock')"
                               :cancel-button-text="t('Cancel')"
                               confirmButtonType="danger"
                               :title="t('dev.Are you sure to lockAll?')">
                    <template #reference>
                        <el-button type="danger">{{ t('dev.lockAll') }}</el-button>
                    </template>
                </el-popconfirm>
                <!-- 一键解锁 -->
                <el-popconfirm @confirm="onAction(0)"
                               :confirm-button-text="t('dev.unlock')"
                               :cancel-button-text="t('Cancel')"
                               :title="t('dev.Are you sure to unlockAll?')">
                    <template #reference>
                        <el-button type="success">{{ t('dev.unlockAll') }}</el-button>
                    </template>
                </el-popconfirm>
                <el-button v-blur @click="openExternalLink" type="primary" icon="el-icon-AddLocation">实时位置</el-button>
            </template>
        </TableHeader>

        <!-- 表格 -->
        <!-- 表格列有多种自定义渲染方式，比如自定义组件、具名插槽等，参见文档 -->
        <!-- 要使用 el-table 组件原有的属性，直接加在 Table 标签上即可 -->
        <Table ref="tableRef"></Table>

        <!-- 表单 -->
        <PopupForm />
        <PopupFormUp />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import baTableClass from '/@/utils/baTable'
import { baTableApi } from '/@/api/common'
import { lockConfirm } from '/@/api/backend/sccd'
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n'
import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import { defaultOptButtons } from '/@/components/table'
import {useAdminInfo} from "/@/stores/adminInfo";
import PopupFormUp from "/@/views/backend/dev/popupFormUp.vue";
import createAxios, {getUrl} from "/@/utils/axios";

const adminInfo = useAdminInfo()
const openExternalLink = () => {
    const url = 'http://test.hellocrab.top?token='+adminInfo.getToken(); // 要打开的外部链接
    window.open(url, '_blank'); // 打开新窗口并加载链接
}


/**
 * t=1 一键锁定
 * t=2 一键解锁
 * @param t
 */
const onAction = (t:number)=>{

    // 获取选中的行数据
    const ids = baTable.getSelectionIds();

    console.log('点击');
    console.log(t);
}

/**
 * t=1 一键锁定
 * t=2 一键解锁
 * @param t
 */
const onActions = (t:number)=>{
    console.log('点击');
    console.log(t);
    const ids = baTable.getSelectionIds();

    // 向后台请求index
    createAxios({
        url: getUrl() + '/admin/dev/lockOrUnlock',
        method: 'post',
        params: {
            ids: ids,
            state:t,
        },
    }).then((response) => {
        console.log(response)
        ElMessage.success('操作成功');
    }).catch((error) => {
        console.error('请求数据失败', error);
        ElMessage.success('操作成功');
    });

}



defineOptions({
    name: 'dev',
})

const { t } = useI18n()
const tableRef = ref()
const optButtons: OptButton[] = defaultOptButtons(['edit','delete', 'update'])

/**
 * baTable 内包含了表格的所有数据且数据具备响应性，然后通过 provide 注入给了后代组件
 */
const baTable = new baTableClass(new baTableApi('/admin/Dev/'), {
    pk: 'id',
    column: [
        {type: 'selection', align: 'center', operator: false},
        {label: t('dev.user_avatar'), prop: 'user_avatar', align: 'center', render: 'image', operator: false},
        {
            label: t('dev.user_name'),
            prop: 'user_name',
            align: 'center',
            operatorPlaceholder: t('Fuzzy query'),
            operator: 'LIKE',
            sortable: false
        },
        {
            label: t('dev.period__phase_name'),
            prop: 'period.phase_name',
            align: 'center',
            operatorPlaceholder: t('Fuzzy query'),
            render: 'tags',
            operator: 'LIKE'
        },
        {
            label: t('dev.grade__grade_name'),
            prop: 'grade.grade_name',
            align: 'center',
            operatorPlaceholder: t('Fuzzy query'),
            render: 'tags',
            operator: 'LIKE'
        },
        {
            label: t('dev.class_name'),
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
            label: t('dev.school_name'),
            prop: 'school_name',
            align: 'center',
            operatorPlaceholder: t('Fuzzy query'),
            operator: 'LIKE',
            sortable: false
        },
        {
            label: t('dev.teacher_mobile'),
            prop: 'teacher_mobile',
            align: 'center',
            operatorPlaceholder: t('Fuzzy query'),
            operator: 'LIKE',
            sortable: false
        },
        {
            label: t('dev.teacher_name'),
            prop: 'teacher_name',
            align: 'center',
            operatorPlaceholder: t('Fuzzy query'),
            operator: 'LIKE',
            sortable: false
        },
        {
            label: t('dev.guardian_name'),
            prop: 'guardian_name',
            align: 'center',
            operatorPlaceholder: t('Fuzzy query'),
            operator: 'LIKE',
            sortable: false
        },
        {
            label: t('dev.guardian_mobile'),
            prop: 'guardian_mobile',
            align: 'center',
            operatorPlaceholder: t('Fuzzy query'),
            operator: 'LIKE',
            sortable: false
        },
        {
            label: t('dev.update_time'),
            prop: 'update_time',
            align: 'center',
            render: 'datetime',
            operator: 'RANGE',
            sortable: 'custom',
            width: 160,
            timeFormat: 'yyyy-mm-dd hh:MM:ss'
        },
        {label: t('Operate'), align: 'center', width: 100, render: 'buttons', buttons: optButtons, operator: false},
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
