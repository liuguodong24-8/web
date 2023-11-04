<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <!-- 自定义按钮请使用插槽，甚至公共搜索也可以使用具名插槽渲染，参见文档 :buttons="['refresh', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"-->
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

                        <el-select style="margin-left: 20px" v-model="selectedClass" clearable filterable>
                            <el-option
                                v-for="field in classes"
                                :key="field.value"
                                :label="field.label"
                                :value="field.value"
                            ></el-option>
                        </el-select>
<!--                        <el-input
                            v-model="searchText"
                            placeholder="Search..."
                        />-->
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
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import baTableClass from '/@/utils/baTable'
import { baTableApi } from '/@/api/common'
import { lockConfirm } from '/@/api/backend/sccd'
import { useI18n } from 'vue-i18n'
import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import { defaultOptButtons } from '/@/components/table'
import {useAdminInfo} from "/@/stores/adminInfo";
import createAxios, {getUrl} from "/@/utils/axios";

const selectedFields = ref([]); // 选择的字段
const selectedGrade = ref([]); // 选择的字段
const selectedClass = ref([]); // 选择的字段

const school = ref([]); // 选择的字段
const grade = ref([]); // 选择的字段
const classes = ref([]); // 选择的字段

const searchText =  ref(''); // 搜索文本


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
        url: getUrl() + '/admin/DevList/index',
        method: 'get',
        params: {
            school: selectedFields.value,
            grade: selectedGrade.value,
            class: selectedClass.value,
        },
    }).then((response) => {
        // 处理后台响应并将数据赋值table
        baTable.table.data =  response.data.list;
       // baTable = response.data;
    }).catch((error) => {
        console.error('请求数据失败', error);
    });

    // 发起搜索请求
  /*  yourApi.searchData(searchParams)
        .then((response) => {
            // 处理搜索结果
            const searchData = response.data;

            // 在前端进行渲染或更新表格数据
            // 例如，将 searchData 分配给你的表格数据
            yourTableData = searchData;
        })
        .catch((error) => {
            console.error('搜索失败', error);
        });*/
};


const loadSchool = () => {
    // 向后台请求省份数据
    createAxios({
        url: getUrl() + '/admin/DevList/schoolList',
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
        url: getUrl() + '/admin/DevList/schoolList',
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
        url: getUrl() + '/admin/DevList/schoolList',
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
    }).catch((error) => {
        console.error('请求数据失败', error);
    });

}

defineOptions({
    name: 'dev',
})

const { t } = useI18n()
const tableRef = ref()
const optButtons: OptButton[] = defaultOptButtons(['edit','delete'])

/**
 * baTable 内包含了表格的所有数据且数据具备响应性，然后通过 provide 注入给了后代组件
 */
const baTable = new baTableClass(new baTableApi('/admin/DevList/'), {
    pk: 'id',
    column: [
        {type: 'selection', align: 'center', operator: false},
        {label: t('头像'), prop: 'user_avatar', align: 'center', render: 'image', operator: false},
        {
            label: t('学生名'),
            prop: 'user_name',
            align: 'center',
            operatorPlaceholder: t('Fuzzy query'),
            operator: 'LIKE',
            sortable: false
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
            label: t('年份'),
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
    loadSchool()
})

</script>

<style scoped lang="scss"></style>
