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

                    <FormItem :label="t('message.mes_important')" type="radio" v-model="baTable.form.items!.mes_important" prop="mes_important" :data="{ content: { '0': t('message.mes_important 0'), '1': t('message.mes_important 1') } }" :placeholder="t('Please select field', { field: t('message.mes_important') })" />


                    <FormItem :label="t('message.image_url')" type="images" v-model="baTable.form.items!.image_url" prop="image_url" @upload-success="callFormItemMethod" />

                    <FormItem :label="t('message.mes_content')" type="textarea" v-model="baTable.form.items!.mes_content" prop="mes_content" :input-attr="{ rows: 3 }" @keyup.enter.stop="" @keyup.ctrl.enter="baTable.onSubmit(formRef)" :placeholder="t('Please input field', { field: t('message.mes_content') })" />

                    <el-form-item :label="t('message.select')">
                        <div class="select-container">
                        <el-select
                            class="el-select"
                            v-model="selectedProvince"
                            clearable
                            placeholder="选择年级或者班级"
                            @change="handleProvinceChange"
                            multiple
                            filterable
                        >
                            <el-option
                                v-for="province in provinces"
                                :key="province.value"
                                :label="province.label"
                                :value="province.value"
                            />
                        </el-select>
                        </div>

                        <div class="select-container">
                        <el-select
                            class="el-select"
                            v-model="selectedCity"
                            clearable
                            placeholder="选择班级或者学生"
                            @change="handleCityChange"
                            multiple
                            filterable
                        >
                            <el-option
                                v-for="city in cities"
                                :key="city.value"
                                :label="city.label"
                                :value="city.value"
                            />
                        </el-select>
                        </div>
                    </el-form-item>

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

<style>
.select-container {
    margin-right: 40px; /* 设置右侧间距，根据需要调整 */
}


</style>


<script setup lang="ts">
import { reactive, ref, onMounted, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import FormItem from '/@/components/formItem/index.vue'

import type { FormInstance, FormItemRule } from 'element-plus'
import { buildValidatorData } from '/@/utils/validate'

const formRef = ref<FormInstance>()
const baTable = inject('baTable') as baTableClass

const { t } = useI18n()

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    update_time: [buildValidatorData({ name: 'date', title: t('message.update_time') })],
    create_time: [buildValidatorData({ name: 'date', title: t('message.create_time') })],
})


import createAxios, {getUrl} from "/@/utils/axios";

const selectedProvince =  ref([]);
const selectedCity = ref([]);
const provinces = ref([]);
const cities = ref([]);


const callFormItemMethod = () => {
    // 在这里调用 FormItem 组件的方法
    FormItem.onImageUpload(); // 替换为实际方法名
};



const loadProvinces = () => {
    // 向后台请求省份数据
      createAxios({
            url: getUrl() + '/admin/dev/list',
            method: 'get',
        }).then((response) => {
          // 处理后台响应并将数据赋值给provinces
          provinces.value = response.data;
      }).catch((error) => {
          console.error('请求数据失败', error);
      });
};

const loadCities = (province) => {
    // 向后台请求城市数据，根据选择的省份来获取相应的城市数据
    // 例如：axios.get(`/api/cities?province=${province}`)
    // 根据实际情况来处理后台响应并将数据赋值给cities

    createAxios({
        url: getUrl() + '/admin/dev/list',
        method: 'get',
        params: {
            key: province,
        },
    }).then((response) => {
        // 处理后台响应并将数据赋值给cities
        cities.value = response.data;
    }).catch((error) => {
        console.error('请求数据失败', error);
    });
};

const handleProvinceChange = () => {
    //selectedCity.value = null;
    loadCities(selectedProvince.value);
    baTable.form.items!.selectedProvince = selectedProvince.value;
};

const handleCityChange = () => {
    // 处理城市选择的逻辑
    baTable.form.items!.selectedCity = selectedCity.value;
};



onMounted(() => {
    loadProvinces(); // 页面加载时加载省份数据
});

// eslint-disable-next-line vue/no-export-in-script-setup
function handleDialogClose () {
    // 关闭弹窗时清空多选框的值
    selectedProvince.value = [];
    selectedCity.value = [];
}

</script>

<style scoped lang="scss"></style>
