import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { authStore } from '../../stores';
import {
  ErrorToast,
  LoginForm,
  LoginIllustration,
} from '../../components/login';
import * as s from './style';

const LoginPage: React.FC = observer(() => {
  // 页面加载时初始化数据
  useEffect(() => {
    authStore.initializeFromStorage();
  }, []);

  return (
    <div className={s.container()}>
      <ErrorToast />
      <LoginIllustration />
      <LoginForm />
    </div>
  );
});

export default LoginPage;
