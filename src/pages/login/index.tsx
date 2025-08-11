'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import * as s from './style';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里添加登录逻辑
    console.log('登录信息:', { username, password, rememberMe });
  };

  return (
    <div className={s.container}>
      {/* 左侧内容区域 */}
      <div className={s.leftSection}>
        <div className={s.leftContent}>
          <h1 className={s.title}>
            轻松管理项目进程
          </h1>
          <p className={s.subtitle}>
            从目标制定到、协力推进、跟踪交付。
          </p>

          {/* 插图区域 */}
          <div className={s.illustrationContainer}>
            <div className={s.illustrationWrapper}>
              {/* 人物插图 */}
              <div className={s.characterContainer}>
                {/* 桌子 */}
                <div className={s.desk}>
                  {/* 图表元素 */}
                  <div className={s.chartElement1}>
                    <div className={s.chartCircle}></div>
                  </div>
                  <div className={s.chartElement2}>
                    <div className={s.chartBars}>
                      <div className={s.chartBar1}></div>
                      <div className={s.chartBar2}></div>
                      <div className={s.chartBar3}></div>
                    </div>
                  </div>
                  <div className={s.chartElement3}>
                    <div className={s.chartBars}>
                      <div className={s.chartGreenBar1}></div>
                      <div className={s.chartGreenBar2}></div>
                      <div className={s.chartGreenBar3}></div>
                    </div>
                  </div>
                </div>

                {/* 人物 */}
                <div className={s.character}>
                  {/* 头部 */}
                  <div className={s.head}>
                    <div className={s.hair}></div>
                  </div>
                  {/* 身体 */}
                  <div className={s.body}>
                    {/* 手臂 */}
                    <div className={s.leftArm}></div>
                    <div className={s.rightArm}></div>
                    {/* 笔记本电脑 */}
                    <div className={s.laptop}>
                      <div className={s.laptopScreen}></div>
                    </div>
                  </div>
                  {/* 腿部 */}
                  <div className={s.legs}></div>
                </div>

                {/* 植物装饰 */}
                <div className={s.plant}>
                  <div className={s.pot}></div>
                  <div className={s.leaf1}></div>
                  <div className={s.leaf2}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧登录表单 */}
      <div className={s.rightSection}>
        <div className={s.formContainer}>
          <h2 className={s.formTitle}>
            欢迎使用项目管理系统
          </h2>

          <form onSubmit={handleLogin} className={s.form}>
            <div className={s.fieldContainer}>
              <label className={s.label}>
                账户
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="请输入账户名"
                className={s.input}
                required
              />
            </div>

            <div className={s.fieldContainer}>
              <label className={s.label}>
                密码
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码"
                className={s.input}
                required
              />
            </div>

            <div className={s.checkboxContainer}>
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className={s.checkbox}
              />
              <label
                htmlFor="remember"
                className={s.checkboxLabel}
              >
                记住密码
              </label>
            </div>

            <button
              type="submit"
              className={s.submitButton}
            >
              登录
            </button>

            <div className={s.forgotPasswordContainer}>
              <a href="#" className={s.forgotPasswordLink}>
                忘记密码？
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
