import { authStore } from './authStore';

// 导出所有 stores
export { authStore };

// 创建 stores 的根对象，方便统一管理
export const stores = {
  authStore,
};

// 导出类型
export type { UserInfo, LoginFormData, FormErrors } from './authStore';

// 默认导出
export default stores;