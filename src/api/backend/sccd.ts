import createAxios from '/@/utils/axios'

const lockConfirmUrl = '/admin/dev/push_lock'
const messagesendlistTotalUrl = '/admin/messagesendlist/total'
const activeTotalUrl = '/admin/activity/total'

/**
 * 锁定/解锁
 * @param data
 */
export function lockConfirm(data: object) {
    return createAxios(
        {
            url: lockConfirmUrl,
            method: 'post',
            data
        },
        {
            showSuccessMessage: true,
        }
    )
}
/**
 * 查询total-message
 * @param id
 */
export function messagesendlistTotal(id: number) {
    return createAxios(
        {
            url: messagesendlistTotalUrl,
            method: 'get',
            params: {
                id: id,
            },
        },
        {
            showSuccessMessage: true,
        }
    )
}

/**
 * 查询total-active
 * @param data
 */
export function activeTotal(data: object) {
    return createAxios(
        {
            url: activeTotalUrl,
            method: 'get',
            data
        },
        {
            showSuccessMessage: true,
        }
    )
}




