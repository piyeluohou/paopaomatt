import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { authStore } from '../../stores';
import * as s from '../../pages/login/style';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = observer(({ className = '' }) => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await authStore.login();
    if (success) {
      router.push('/dashboard');
    }
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    authStore.updateLoginForm('rememberMe', checked);

    // 如果取消记住密码，立即清除保存的密码
    if (!checked) {
      localStorage.setItem('rememberPassword', 'false');
      localStorage.removeItem('savedPassword');
    }
  };

  return (
    <div className={`${s.rightSection()} ${className}`}>
      <div className={s.formContainer()}>
        <h2 className={s.formTitle()}>欢迎使用泡泡学习系统</h2>
        <form className={s.form()} onSubmit={handleSubmit}>
          <div className={s.fieldContainer()}>
            <label className={s.label()}>账户</label>
            <input
              className={s.input()}
              type='email'
              value={authStore.loginForm.username}
              onChange={(e) =>
                authStore.updateLoginForm('username', e.target.value)
              }
              placeholder='请输入邮箱地址'
              required
            />
            {authStore.errors.username && (
              <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                {authStore.errors.username}
              </div>
            )}
          </div>

          <div className={s.fieldContainer()}>
            <label className={s.label()}>密码</label>
            <input
              className={s.input()}
              type={authStore.showPassword ? 'text' : 'password'}
              value={authStore.loginForm.password}
              onChange={(e) =>
                authStore.updateLoginForm('password', e.target.value)
              }
              placeholder='请输入密码（应包含数字和字母）'
              required
            />
            {authStore.errors.password && (
              <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                {authStore.errors.password}
              </div>
            )}
            <div style={{ marginTop: '8px' }}>
              <input
                type='checkbox'
                id='showPassword'
                checked={authStore.showPassword}
                onChange={() => authStore.togglePasswordVisibility()}
                style={{ marginRight: '8px' }}
              />
              <label
                htmlFor='showPassword'
                style={{ fontSize: '14px', color: '#666' }}
              >
                显示密码
              </label>
            </div>
          </div>

          <div className={s.checkboxContainer()}>
            <input
              className={s.checkbox()}
              type='checkbox'
              id='remember'
              checked={authStore.loginForm.rememberMe}
              onChange={handleRememberMeChange}
            />
            <label className={s.checkboxLabel()} htmlFor='remember'>
              记住密码
            </label>
          </div>

          <button className={s.submitButton()} type='submit'>
            登录
          </button>

          <div className={s.forgotPasswordContainer()}>
            <a className={s.forgotPasswordLink()} href='#'>
              忘记密码？
            </a>
          </div>
        </form>
      </div>
    </div>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
