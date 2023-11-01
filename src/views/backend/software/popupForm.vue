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
                    <FormItem :label="t('software.type')" type="radio" v-model="baTable.form.items!.type" prop="type" :data="{ content: { '1': t('software.type 1'), '2': t('software.type 2'), '3': t('software.type 3'), '4': t('software.type 4') } }" :placeholder="t('Please select field', { field: t('software.type') })" />
                    <FormItem :label="t('software.version_code')" type="number" prop="version_code" :input-attr="{ step: 1 }" v-model.number="baTable.form.items!.version_code" :placeholder="t('Please input field', { field: t('software.version_code') })" />
                    <FormItem :label="t('software.version_name')" type="string" v-model="baTable.form.items!.version_name" prop="version_name" :placeholder="t('Please input field', { field: t('software.version_name') })" />
                    <FormItem :label="t('software.file_url')" type="file" v-model="baTable.form.items!.file_url" prop="file_url" />
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
import { reactive, ref, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import FormItem from '/@/components/formItem/index.vue'
import type { FormInstance, FormItemRule } from 'element-plus'
import { buildValidatorData } from '/@/utils/validate'

const formRef = ref<FormInstance>()
const baTable = inject('baTable') as baTableClass

const { t } = useI18n()

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    type: [buildValidatorData({ name: 'required', title: t('software.type'), message: '请选择软件类别' })],
    version_code: [buildValidatorData({ name: 'required', title: t('software.version_code'), message: '请填写版本编码' }), buildValidatorData({ name: 'integer', title: t('software.version_code'), message: '请填写版本编码' })],
    version_name: [buildValidatorData({ name: 'required', title: t('software.version_name'), message: '请填写版本号' })],
    file_url: [buildValidatorData({ name: 'required', title: t('software.file_url'), message: '请上传软件包' })],
    create_time: [buildValidatorData({ name: 'date', title: t('software.create_time') })],
})
</script>

<style scoped lang="scss"></style>
