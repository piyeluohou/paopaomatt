import { makeAutoObservable } from 'mobx';

export interface UserInfo {
  username: string;
  nickname: string;
  avatar: string;
}

export interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface FormErrors {
  username: string;
  password: string;
  login: string;
}

class AuthStore {
  // 登录状态
  isLoggedIn = false;
  
  // 用户信息
  userInfo: UserInfo | null = null;
  
  // 表单数据
  loginForm: LoginFormData = {
    username: '',
    password: '',
    rememberMe: false,
  };
  
  // 表单错误
  errors: FormErrors = {
    username: '',
    password: '',
    login: '',
  };
  
  // UI 状态
  showPassword = false;
  showLoginError = false;
  loginError = '';
  
  constructor() {
    makeAutoObservable(this);
    this.initializeFromStorage();
  }
  
  // 从 localStorage 初始化数据
  initializeFromStorage = () => {
    if (typeof window === 'undefined') return;
    
    // 恢复保存的用户名
    const savedUsername = localStorage.getItem('savedUsername');
    if (savedUsername) {
      this.loginForm.username = savedUsername;
    }
    
    // 检查是否记住密码
    const rememberPassword = localStorage.getItem('rememberPassword') === 'true';
    if (rememberPassword) {
      this.loginForm.rememberMe = true;
      const savedPassword = localStorage.getItem('savedPassword');
      if (savedPassword) {
        this.loginForm.password = savedPassword;
      }
    }
    
    // 检查登录状态
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      const userInfoStr = localStorage.getItem('userInfo');
      if (userInfoStr) {
        try {
          this.userInfo = JSON.parse(userInfoStr);
          this.isLoggedIn = true;
        } catch (error) {
          console.error('Failed to parse user info from localStorage:', error);
          this.logout();
        }
      }
    }
  };
  
  // 更新表单字段
  updateLoginForm = (field: keyof LoginFormData, value: string | boolean) => {
    this.loginForm[field] = value as never;
    
    // 输入时清除错误提示
    if (field === 'username' || field === 'password') {
      if (this.showLoginError) {
        this.showLoginError = false;
      }
      if (this.errors[field as keyof FormErrors]) {
        this.errors[field as keyof FormErrors] = '';
      }
    }
    
    // 如果取消记住密码，立即清除保存的密码
    if (field === 'rememberMe' && !value) {
      localStorage.setItem('rememberPassword', 'false');
      localStorage.removeItem('savedPassword');
    }
  };
  
  // 设置错误信息
  setErrors = (errors: Partial<FormErrors>) => {
    this.errors = { ...this.errors, ...errors };
  };
  
  // 清除错误信息
  clearErrors = () => {
    this.errors = {
      username: '',
      password: '',
      login: '',
    };
  };
  
  // 切换密码显示
  togglePasswordVisibility = () => {
    this.showPassword = !this.showPassword;
  };
  
  // 显示登录错误
  setShowLoginError = (show: boolean) => {
    this.showLoginError = show;
  };

  // 清除登录错误
  clearLoginError = () => {
    this.showLoginError = false;
    this.loginError = '';
  };
  
  // 邮箱格式验证
  validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // 密码格式验证（必须包含数字和字母）
  validatePassword = (password: string): boolean => {
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    return hasNumber && hasLetter && password.length >= 6;
  };
  
  // 表单验证
  validateForm = (): boolean => {
    this.clearErrors();
    let hasError = false;
    const newErrors: Partial<FormErrors> = {};
    
    // 验证邮箱格式
    if (!this.validateEmail(this.loginForm.username)) {
      newErrors.username = '请输入有效的邮箱地址';
      hasError = true;
    }
    
    // 验证密码格式
    if (!this.validatePassword(this.loginForm.password)) {
      newErrors.password = '密码必须包含数字和字母，且长度不少于6位';
      hasError = true;
    }
    
    if (hasError) {
      this.setErrors(newErrors);
    }
    
    return !hasError;
  };
  
  // 登录方法
  login = async (): Promise<boolean> => {
    // 表单验证
    if (!this.validateForm()) {
      return false;
    }
    
    // 验证固定账号密码
    if (this.loginForm.username === 'paopao@qq.com' && this.loginForm.password === 'mate123') {
      // 设置用户信息
      this.userInfo = {
        username: this.loginForm.username,
        nickname: '泡泡', // 可以从后端获取
        avatar: '', // 可以从后端获取
      };
      
      this.isLoggedIn = true;
      
      // 保存登录信息到 localStorage
      this.saveToStorage();
      
      console.log('登录成功:', {
        username: this.loginForm.username,
        rememberMe: this.loginForm.rememberMe,
      });
      
      return true;
    } else {
      this.loginError = '账号或密码错误';
      this.showLoginError = true;
      return false;
    }
  };
  
  // 退出登录
  logout = () => {
    this.isLoggedIn = false;
    this.userInfo = null;
    
    // 清除登录状态，但保留记住密码的设置
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userInfo');
    
    // 不清除 savedUsername, rememberPassword, savedPassword
    // 这样用户下次登录时仍然可以看到保存的用户名和密码
  };
  
  // 保存到 localStorage
  saveToStorage = () => {
    if (typeof window === 'undefined') return;
    
    // 保存登录状态
    localStorage.setItem('isLoggedIn', this.isLoggedIn.toString());
    
    if (this.userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    }
    
    // 总是保存用户名
    localStorage.setItem('savedUsername', this.loginForm.username);
    
    // 根据记住密码选项决定是否保存密码
    if (this.loginForm.rememberMe) {
      localStorage.setItem('rememberPassword', 'true');
      localStorage.setItem('savedPassword', this.loginForm.password);
    } else {
      localStorage.setItem('rememberPassword', 'false');
      localStorage.removeItem('savedPassword');
    }
  };
}

export const authStore = new AuthStore();
export default authStore;