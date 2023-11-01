<template>
    <!-- 对话框表单 -->
    <!-- 建议使用 Prettier 格式化代码 -->
    <!-- el-form 内可以混用 el-form-item、FormItem、ba-input 等输入组件 -->
    <el-dialog
        class="ba-operate-dialog"
        @open="scanqrcode"
        :close-on-click-modal="false"
        :model-value="['Qrcode'].includes(baTable.form.operate!)"
        @close="baTable.toggleForm"
        width="25%"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ baTable.form.operate ? t(baTable.form.operate) : '' }}
            </div>
        </template>
        <el-scrollbar v-loading="baTable.form.loading" class="ba-table-form-scrollbar">
            <block v-if="id > 0">
                <div style="text-align: center;margin-top:10%;">
                    <qrcode-vue :value="id" :size="300" level="L" :margin="1" style="border: 5px solid #000 "></qrcode-vue>
                </div>
            </block>
        </el-scrollbar>
    </el-dialog>
</template>

<script setup lang="ts">
import {inject, onMounted, ref} from 'vue'
import { useI18n } from 'vue-i18n'
import QrcodeVue from 'qrcode.vue'
import type baTableClass from '/@/utils/baTable'

const baTable = inject('baTable') as baTableClass

const { t } = useI18n(),
    id = ref<string>(''),
    scanqrcode = ()=>{
    id.value = JSON.parse(JSON.stringify(baTable.form.operateIds)).shift().toString()
}

</script>

<style scoped lang="scss"></style>
