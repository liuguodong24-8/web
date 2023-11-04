<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <!-- 自定义按钮请使用插槽，甚至公共搜索也可以使用具名插槽渲染，参见文档 -->

        <TableHeader
            :buttons="['delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: '搜索字段' })"
            @multiselect-search="handleMultiselectSearch"
        >
            <template #refreshPrepend>
                <!-- 刷新按钮前插槽内容 -->
                <!-- 一键锁定 -->
                <div>
                    <!-- ...其他 TableHeader 内容... -->
                    <!--                    <div style="margin-bottom: 20px">
                                        <el-popconfirm @confirm="onActions(1)"
                                                       :confirm-button-text="t('锁定')"
                                                       :cancel-button-text="t('取消')"
                                                       confirmButtonType="danger"
                                                       :title="t('是否锁定?')">
                                            <template #reference>
                                                <el-button type="danger">锁定</el-button>
                                            </template>
                                        </el-popconfirm>
                                        &lt;!&ndash; 一键解锁 &ndash;&gt;
                                        <el-popconfirm @confirm="onActions(0)"
                                                       :confirm-button-text="t('解锁')"
                                                       :cancel-button-text="t('取消')"
                                                       :title="t('是否解锁?')">
                                            <template #reference>
                                                <el-button type="success">启用</el-button>
                                            </template>
                                        </el-popconfirm>
                                            </div>-->
                    <!-- 多选搜索框 -->
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

        <!-- 表格 -->
        <!-- 表格列有多种自定义渲染方式，比如自定义组件、具名插槽等，参见文档 -->
        <!-- 要使用 el-table 组件原有的属性，直接加在 Table 标签上即可 -->
        <Table ref="tableRef"></Table>

        <!-- 表单 -->
        <PopupForm />

        <!-- 弹窗看二维码 -->
        <ScanQrCode ref="popupQrcode" />

        <!-- 弹窗看扫码清单 -->
        <ActivityscanStudent />
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
import ActivityscanStudent from '../activityscanstudent/index.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
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
// const optButtons: OptButton[] = defaultOptButtons(['edit'])
let optButtons: OptButton[] = defaultOptButtons(['edit'])

let newButton: OptButton[] = [
    {
        // 渲染方式:tipButton=带tip的按钮,confirmButton=带确认框的按钮,moveButton=移动按钮
        render: 'tipButton',
        // 按钮名称
        name: 'ScanListStudent',
        // 鼠标放置时的 title 提示
        title: '打卡记录',
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
            baTable.form.operate = 'ScanListStudent'
            console.log('row.id');console.log(row.id);
            baTable.toggleForm('ScanListStudent', [row.id])
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

const handleMultiselectSearch = () => {
    // 在这里执行多选搜索的逻辑，根据 selectedFields 和 searchText 进行搜索
    // 可以触发表格数据的筛选操作


    performSearch();
};

// 假设你有一个名为 performSearch 的搜索方法

const performSearch = () => {
    // 构建搜索参数，这取决于你的后端 API

    // 向后台请求index
    createAxios({
        url: getUrl() + '/admin/ActivityDetail/index',
        method: 'get',
        params: {
            school: selectedFields.value,
            grade: selectedGrade.value,
            class: selectedClass.value,
            student: selectedStudent.value,
        },
    }).then((response) => {
        // 处理后台响应并将数据赋值table
        baTable.table.data =  response.data.list;
        // baTable = response.data;
    }).catch((error) => {
        console.error('请求数据失败', error);
    });

};


const loadSchool = () => {
    // 向后台请求省份数据
    createAxios({
        url: getUrl() + '/admin/ActivityDetail/schoolList',
        method: 'get',
    }).then((response) => {
        // 处理后台响应并将数据赋值给provinces
        school.value = response.data;
    }).catch((error) => {
        console.error('请求数据失败', error);
    });
};

const loadGrade = (school) => {
    createAxios({
        url: getUrl() + '/admin/ActivityDetail/schoolList',
        method: 'get',
        params: {
            key: school,
        },
    }).then((response) => {
        // 处理后台响应并将数据赋值给cities
        grade.value = response.data;
    }).catch((error) => {
        console.error('请求数据失败', error);
    });
};

const loadClass = (grade) => {
    createAxios({
        url: getUrl() + '/admin/ActivityDetail/schoolList',
        method: 'get',
        params: {
            key: grade,
        },
    }).then((response) => {
        // 处理后台响应并将数据赋值给cities
        classes.value = response.data;
    }).catch((error) => {
        console.error('请求数据失败', error);
    });
};

const loadStudent = (classes) => {
    createAxios({
        url: getUrl() + '/admin/ActivityDetail/schoolList',
        method: 'get',
        params: {
            key: classes,
        },
    }).then((response) => {
        // 处理后台响应并将数据赋值给cities
        students.value = response.data;
    }).catch((error) => {
        console.error('请求数据失败', error);
    });
};




const handleSchoolChange = () => {
    //selectedCity.value = null;
    loadGrade(selectedFields.value);
    //baTable.form.items!.selectedProvince = selectedProvince.value;
};

const handleGradeChange = () => {
    // 处理城市选择的逻辑
    //baTable.form.items!.selectedCity = selectedCity.value;
    loadClass(selectedGrade.value)
};

const handleClassChange = () => {
    // 处理城市选择的逻辑
    //baTable.form.items!.selectedCity = selectedCity.value;
    loadStudent(selectedClass.value)
};



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
          operator: 'LIKE',
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
          label: t('学校名'),
          prop: 'school_name',
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
          label: t('更新时间'),
          prop: 'update_time',
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
      }
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
    loadSchool()
})
</script>

<style scoped lang="scss"></style>
