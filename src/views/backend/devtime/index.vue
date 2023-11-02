<template>

    <el-scrollbar class="ba-table-form-scrollbar">
        <div class="ba-operate-form ba-add-form" :style="'width: 50%'">
        <el-form ref="form" :model="formData" :rules="formRules" label-position="right" :label-width="160">

            <el-form-item label="开始时间" prop="start_time">
                <el-date-picker
                    v-model="formData.start_time"
                    type="datetime"
                    placeholder="选择开始时间"
                ></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间" prop="end_time">
                <el-date-picker
                    v-model="formData.end_time"
                    type="datetime"
                    placeholder="选择结束时间"
                ></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
        </div>
    </el-scrollbar>
</template>

<script>
import {ElForm, ElFormItem, ElButton} from 'element-plus';
import { ElMessage } from 'element-plus';
import createAxios, {getUrl} from "/@/utils/axios";
export default {
    components: {
        ElForm,
        ElFormItem,
        ElButton,
    },
    data() {
        return {
            formData: {
               /* name: '',
                age: null,
                email: '',*/
            },
            formRules: {
               /* name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
                age: [
                    { required: true, message: '请输入年龄', trigger: 'blur' },
                    { type: 'number', message: '年龄必须为数字值', trigger: 'blur' },
                    { min: 1, max: 150, message: '年龄必须在1到150之间', trigger: 'blur' },
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type: 'email', message: '请输入有效的邮箱地址', trigger: ['blur', 'change'] },
                ],*/
            },
        };
    },
    methods: {
        submitForm() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    // 表单验证通过，提交数据到后端接口
                    // 在这里编写发送请求的逻辑
                    // 你可以使用 Axios、Fetch API 或其他方式发送 POST 请求
                    // 以下示例使用 Axios 发送 POST 请求
                    const postData = {
                        start_time: this.formData.start_time,
                        end_time: this.formData.end_time,
                    };

                    // 假设你有一个保存数据的后端接口 URL
                    const apiUrl = '/admin/DevTime/edit';

                    // 使用 Axios 发送 POST 请求
                    // 你需要安装 Axios 并导入它
                    // import axios from 'axios';
                    // 然后发送 POST 请求
                    createAxios({
                        url: getUrl() + apiUrl,
                        method: 'post',
                        params: postData
                    }).then((response) => {
                            // 请求成功处理
                            console.log('请求成功', response);
                            ElMessage.success('操作成功');
                        })
                        .catch((error) => {
                            // 请求失败处理
                            console.error('请求失败', error);
                            ElMessage.error(error);
                        });
                } else {
                    // 表单验证不通过
                    return false;
                }
            });
        },
    },
};
</script>
