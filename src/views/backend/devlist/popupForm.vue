<template>
    <!-- 对话框表单 -->
    <!-- 建议使用 Prettier 格式化代码 -->
    <!-- el-form 内可以混用 el-form-item、FormItem、ba-input 等输入组件 -->
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :model-value="['Add', 'Edit'].includes(baTable.form.operate!)"
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
                        <FormItem :label="t('开始时间')" type="datetime"  v-model="baTable.form.items!.start_time" prop="start_time" />
                        <FormItem :label="t('结束时间')" type="datetime" v-model="baTable.form.items!.end_time" prop="end_time" />
                        <FormItem :label="t('班级')" type="string" v-model="baTable.form.items!.class_name" prop="class_name"  />
                        <FormItem :label="t('设备')" type="string" v-model="baTable.form.items!.device_id" prop="device_id" />
                        <FormItem :label="t('操作人')"  type="string" v-model="baTable.form.items!.operator" prop="operator"  />

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
import { reactive, onMounted, ref, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import FormItem from '/@/components/formItem/index.vue'
import type { FormInstance, FormItemRule } from 'element-plus'
import { buildValidatorData } from '/@/utils/validate'
import createAxios, {getUrl} from "/@/utils/axios";

const showFormItem = ref(false);


const formRef = ref<FormInstance>()
const baTable = inject('baTable') as baTableClass

const { t } = useI18n()

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    update_time: [buildValidatorData({ name: 'date', title: t('dev.update_time') })],
    create_time: [buildValidatorData({ name: 'date', title: t('dev.create_time') })],
})

const loadOperator = () => {
    createAxios({
        url: getUrl() + '/admin/index/name',
        method: 'get',
    }).then((response) => {
        // 处理后台响应并将数据赋值给cities
        baTable.form.items!.operator = response.msg;
    }).catch((error) => {
        console.error('请求数据失败', error);
    });
};


onMounted(() => {
    loadOperator()
})
</script>

<style scoped lang="scss"></style>
