<template>
    <div class="default-main ba-table-box">
<!--        <el-tabs  type="border-card">
            <el-tab-pane class="config-tab-pane" :label="t('扫码打卡列表')">-->
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
<!--            </el-tab-pane>
            <el-tab-pane
                class="config-tab-pane config-tab-pane-add"
                :label="t('扫码打卡列表')"
            >
                    <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

                    &lt;!&ndash; 表格顶部菜单 &ndash;&gt;
                    &lt;!&ndash; 自定义按钮请使用插槽，甚至公共搜索也可以使用具名插槽渲染，参见文档 &ndash;&gt;

                    <TableHeader
                        :buttons="['comSearch', 'quickSearch', 'columnDisplay']"
                        :quick-search-placeholder="t('Quick search placeholder', { fields: '搜索字段' })"
                        @multiselect-search="handleMultiselectSearch"
                    >
                        <template #refreshPrepend>
                            &lt;!&ndash; 刷新按钮前插槽内容 &ndash;&gt;
                            &lt;!&ndash; 一键锁定 &ndash;&gt;
                            <div>
                                &lt;!&ndash; 多选搜索框 &ndash;&gt;
                                <div class="multiselect-search">
                                    <el-select style="margin-left: 20px" v-model="selectedFields"   @change="handleSchoolChange" clearable filterable>
                                        <el-option
                                            v-for="field in school"
                                            :key="field.value"
                                            :label="field.label"
                                            :value="field.value"
                                        ></el-option>
                                    </el-select>

                                    <el-select  style="margin-left: 20px" v-model="selectedGrade"  @change="handleGradeChange"  clearable filterable>
                                        <el-option
                                            v-for="field in grade"
                                            :key="field.value"
                                            :label="field.label"
                                            :value="field.value"
                                        ></el-option>
                                    </el-select>

                                    <el-select style="margin-left: 20px" v-model="selectedClass"   @change="handleClassChange" clearable filterable>
                                        <el-option
                                            v-for="field in classes"
                                            :key="field.value"
                                            :label="field.label"
                                            :value="field.value"
                                        ></el-option>
                                    </el-select>

                                    <el-select style="margin-left: 20px" v-model="selectedStudent" clearable filterable>
                                        <el-option
                                            v-for="field in students"
                                            :key="field.value"
                                            :label="field.label"
                                            :value="field.value"
                                        ></el-option>
                                    </el-select>

                                    <el-button @click="handleMultiselectSearch">查询</el-button>
                                </div>
                            </div>
                        </template>
                    </TableHeader>

                    &lt;!&ndash; 表格 &ndash;&gt;
                    &lt;!&ndash; 表格列有多种自定义渲染方式，比如自定义组件、具名插槽等，参见文档 &ndash;&gt;
                    &lt;!&ndash; 要使用 el-table 组件原有的属性，直接加在 Table 标签上即可 &ndash;&gt;
                    <Table ref="tableRef1"></Table>

                    &lt;!&ndash; 表单 &ndash;&gt;
&lt;!&ndash;                    <PopupForm />&ndash;&gt;

                    &lt;!&ndash; 弹窗看二维码 &ndash;&gt;
&lt;!&ndash;                    <ScanQrCode ref="popupQrcode" />&ndash;&gt;

                    &lt;!&ndash; 弹窗看扫码清单 &ndash;&gt;
                    <ActivityscanStudent />

            </el-tab-pane>-->
<!--
        </el-tabs>
-->

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
import ActivityscanStudent from '../activityscanstudent/index.vue'

import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import FormItem from "/@/components/formItem/index.vue";
import createAxios, {getUrl} from "/@/utils/axios";

defineOptions({
    name: 'activity',
})

const selectedFields = ref([]); // 选择的字段
const selectedGrade = ref([]); // 选择的字段
const selectedClass = ref([]); // 选择的字段
const selectedStudent = ref([]); // 选择的字段

const school = ref([]); // 选择的字段
const grade = ref([]); // 选择的字段
const classes = ref([]); // 选择的字段
const students = ref([]); // 选择的字段





const { t } = useI18n()
const tableRef = ref()
const tableRef1 = ref()
// const optButtons: OptButton[] = defaultOptButtons(['edit'])
let optButtons: OptButton[] = defaultOptButtons(['edit'])
// 自定义一个新的按钮
let newButton: OptButton[] = [
    {
        // 渲染方式:tipButton=带tip的按钮,confirmButton=带确认框的按钮,moveButton=移动按钮
        render: 'tipButton',
        // 按钮名称
        name: 'info',
        // 鼠标放置时的 title 提示
        title: '活动二维码',
        // 直接在按钮内显示的文字，title 有值时可为空
        text: '',
        // 按钮类型，请参考 element plus 的按钮类型
        type: 'primary',
        // 按钮 icon
        icon: 'fa fa-qrcode',
        class: 'table-row-info',
        // tipButton 禁用 tip
        disabledTip: false,
        // 自定义点击事件
        click: (row: TableRow, field: TableColumn) => {
            baTable.form.operate = 'Qrcode'
            console.log('row.id');console.log(row.id);
            baTable.toggleForm('Qrcode', [row.id])
        },
        // 按钮是否显示，请返回布尔值
        display: (row: TableRow, field: TableColumn) => {
            return true
        },
        // 按钮是否禁用，请返回布尔值
        disabled: (row: TableRow, field: TableColumn) => {
            return false
        },
        // 自定义el-button属性
        attr: {}
    },
    {
        // 渲染方式:tipButton=带tip的按钮,confirmButton=带确认框的按钮,moveButton=移动按钮
        render: 'tipButton',
        // 按钮名称
        name: 'ScanList',
        // 鼠标放置时的 title 提示
        title: '签到清单',
        // 直接在按钮内显示的文字，title 有值时可为空
        text: '',
        // 按钮类型，请参考 element plus 的按钮类型
        type: 'primary',
        // 按钮 icon
        icon: 'fa fa-search-plus',
        class: 'table-row-info',
        // tipButton 禁用 tip
        disabledTip: false,
        // 自定义点击事件
        click: (row: TableRow, field: TableColumn) => {
            baTable.form.operate = 'ScanList'
            console.log('row.id');console.log(row.id);
            baTable.toggleForm('ScanList', [row.id])
        },
        // 按钮是否显示，请返回布尔值
        display: (row: TableRow, field: TableColumn) => {
            return true
        },
        // 按钮是否禁用，请返回布尔值
        disabled: (row: TableRow, field: TableColumn) => {
            return false
        },
        // 自定义el-button属性
        attr: {}
    }
]

/**
 * baTable 内包含了表格的所有数据且数据具备响应性，然后通过 provide 注入给了后代组件
 */
const baTable = new baTableClass(new baTableApi('/admin/Activity/'), {
  pk: 'id',
  column: [
    {label: t('activity.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom'},
    {
      label: t('activity.act_name'),
      prop: 'act_name',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      operator: 'LIKE',
      sortable: false
    },
    {
      label: t('activity.act_cont'),
      prop: 'act_cont',
      align: 'center',
      operatorPlaceholder: t('Fuzzy query'),
      operator: 'LIKE'
    },
      {
          label: t('操作人'),
          prop: 'operator',
          align: 'center',
          operatorPlaceholder: t('Fuzzy query'),
          operator: 'LIKE'
      },
    {
      label: t('activity.update_time'),
      prop: 'update_time',
      align: 'center',
      render: 'datetime',
      operator: 'RANGE',
      sortable: 'custom',
      width: 160,
      timeFormat: 'yyyy-mm-dd hh:MM:ss'
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
    {
      label: t('Operate'),
      align: 'center',
      width: 120,
      render: 'buttons',
      buttons: newButton.concat(optButtons),
      operator: false
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

   // loadSchool()
})
</script>

<style scoped lang="scss"></style>
