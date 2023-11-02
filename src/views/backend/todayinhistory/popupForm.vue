<template>
    <!-- 对话框表单 -->
    <!-- 建议使用 Prettier 格式化代码 -->
    <!-- el-form 内可以混用 el-form-item、FormItem、ba-input 等输入组件 -->
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :model-value="['Add', 'Edit'].includes(baTable.form.operate!)"
        @opened="handleDialogClose"
        @close="baTable.toggleForm"
        width="50%"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ baTable.form.operate ? t(baTable.form.operate) : '' }}
            </div>
        </template>
        <el-scrollbar v-loading="baTable.form.loading" class="ba-table-form-scrollbar">
            <div
                class="ba-operate-form"
                :class="'ba-' + baTable.form.operate + '-form'"
                :style="'width: calc(100% - ' + baTable.form.labelWidth! / 2 + 'px)'"
            >
                <el-form
                    v-if="!baTable.form.loading"
                    ref="formRef"
                    @submit.prevent=""
                    @keyup.enter="baTable.onSubmit(formRef)"
                    :model="baTable.form.items"
                    label-position="right"
                    :label-width="baTable.form.labelWidth + 'px'"
                    :rules="rules"
                >
                    <el-form-item :label="t('选择年级')">
                        <div class="select-container">
                            <el-select
                                class="el-select"
                                v-model="selectedProvince"
                                clearable
                                placeholder="选择年级"
                                @change="handleProvinceChange"
                                filterable
                            >
                                <el-option
                                    v-for="province in provinces"
                                    :key="province.label"
                                    :label="province.label"
                                    :value="province.label"
                                />
                            </el-select>
                        </div>

                    </el-form-item>

                    <FormItem :label="t('todayinhistory.title')" type="string" v-model="baTable.form.items!.title" prop="title" :placeholder="t('Please input field', { field: t('todayinhistory.title') })" />
                    <FormItem :label="t('todayinhistory.content')" type="editor" v-model="baTable.form.items!.content" prop="content" @keyup.enter.stop="" @keyup.ctrl.enter="baTable.onSubmit(formRef)" :placeholder="t('Please input field', { field: t('todayinhistory.content') })" />
                    <FormItem :label="t('todayinhistory.picture')" type="image" v-model="baTable.form.items!.picture" prop="picture" />
                </el-form>
            </div>
        </el-scrollbar>
        <template #footer>
            <div :style="'width: calc(100% - ' + baTable.form.labelWidth! / 1.8 + 'px)'">
                <el-button @click="baTable.toggleForm()">{{ t('Cancel') }}</el-button>
                <el-button v-blur :loading="baTable.form.submitLoading" @click="baTable.onSubmit(formRef)" type="primary">
                    {{ baTable.form.operateIds && baTable.form.operateIds.length > 1 ? t('Save and edit next item') : t('Save') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import FormItem from '/@/components/formItem/index.vue'
import type { FormInstance, FormItemRule } from 'element-plus'
import { buildValidatorData } from '/@/utils/validate'
import createAxios, {getUrl} from "/@/utils/axios";


const selectedProvince =  ref([]);
const provinces = ref([]);

const formRef = ref<FormInstance>()
const baTable = inject('baTable') as baTableClass

const { t } = useI18n()

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    content: [buildValidatorData({ name: 'editorRequired', title: t('todayinhistory.content') })],
    update_time: [buildValidatorData({ name: 'date', title: t('todayinhistory.update_time') })],
    create_time: [buildValidatorData({ name: 'date', title: t('todayinhistory.create_time') })],
})

const loadProvinces = () => {
    // 向后台请求省份数据
    createAxios({
        url: getUrl() + '/admin/dev/schoolListBySchool',
        method: 'get',
    }).then((response) => {
        // 处理后台响应并将数据赋值给provinces
        provinces.value = response.data;
    }).catch((error) => {
        console.error('请求数据失败', error);
    });
};

const handleProvinceChange = () => {
    baTable.form.items!.selectedGrade = selectedProvince.value;
};


onMounted(() => {
    loadProvinces(); // 页面加载时加载省份数据
});

function handleDialogClose () {
    // 关闭弹窗时清空多选框的值
    selectedProvince.value = [];
   // selectedCity.value = [];
}


</script>

<style scoped lang="scss"></style>
