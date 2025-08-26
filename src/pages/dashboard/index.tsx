'use client';

import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { authStore } from '../../stores';
import * as s from './style';

// 功能模块类型定义
type FeatureType = 'essay-correction' | 'grammar-qa' | 'polishing' | 'overview';

interface Feature {
  id: FeatureType;
  name: string;
  description: string;
  icon: string;
}

// 功能列表配置
const features: Feature[] = [
  {
    id: 'overview',
    name: '概览',
    description: '查看使用统计和最近活动',
    icon: '📊',
  },
  {
    id: 'essay-correction',
    name: '作文批改',
    description: '智能英语作文批改和建议',
    icon: '📝',
  },
  {
    id: 'grammar-qa',
    name: '语法问答',
    description: '语法知识问答和解释',
    icon: '❓',
  },
  {
    id: 'polishing',
    name: '文本润色',
    description: '提升文本表达和流畅度',
    icon: '✨',
  },
];

// 在 DashboardPage 组件中添加退出登录处理函数
const DashboardPage = observer(() => {
  const [activeFeature, setActiveFeature] = useState<FeatureType>('overview');
  const [user] = useState({ name: 'PaoPao', email: 'paopao@qq.com' });

  // 添加退出登录处理函数
  const handleLogout = () => {
    authStore.logout();
    window.location.href = '/';
  };

  // 渲染右侧内容区域
  const renderContent = () => {
    switch (activeFeature) {
      case 'overview':
        return (
          <div className={s.contentArea()}>
            <h2 className={s.contentTitle()}>欢迎回来，{user.name}！</h2>
            <div className={s.statsGrid()}>
              <div className={s.statCard()}>
                <div className={s.statIcon()}>📝</div>
                <div className={s.statInfo()}>
                  <div className={s.statNumber()}>12</div>
                  <div className={s.statLabel()}>已批改作文</div>
                </div>
              </div>
              <div className={s.statCard()}>
                <div className={s.statIcon()}>❓</div>
                <div className={s.statInfo()}>
                  <div className={s.statNumber()}>28</div>
                  <div className={s.statLabel()}>语法问答</div>
                </div>
              </div>
              <div className={s.statCard()}>
                <div className={s.statIcon()}>✨</div>
                <div className={s.statInfo()}>
                  <div className={s.statNumber()}>8</div>
                  <div className={s.statLabel()}>文本润色</div>
                </div>
              </div>
            </div>
            <div className={s.recentActivity()}>
              <h3 className={s.sectionTitle()}>最近活动</h3>
              <div className={s.activityList()}>
                <div className={s.activityItem()}>
                  <span className={s.activityIcon()}>📝</span>
                  <span className={s.activityText()}>
                    批改了作文《My Dream Job》
                  </span>
                  <span className={s.activityTime()}>2小时前</span>
                </div>
                <div className={s.activityItem()}>
                  <span className={s.activityIcon()}>❓</span>
                  <span className={s.activityText()}>
                    询问了过去完成时的用法
                  </span>
                  <span className={s.activityTime()}>1天前</span>
                </div>
                <div className={s.activityItem()}>
                  <span className={s.activityIcon()}>✨</span>
                  <span className={s.activityText()}>润色了商务邮件</span>
                  <span className={s.activityTime()}>2天前</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'essay-correction':
        return (
          <div className={s.contentArea()}>
            <h2 className={s.contentTitle()}>英语作文批改</h2>
            <div className={s.featureContent()}>
              <div className={s.uploadArea()}>
                <div className={s.uploadIcon()}>📄</div>
                <h3>上传你的作文</h3>
                <p>支持 .txt, .doc, .docx 格式，或直接粘贴文本</p>
                <button className={s.uploadButton()}>选择文件</button>
              </div>
              <div className={s.textArea()}>
                <label className={s.label()}>或直接输入文本：</label>
                <textarea
                  className={s.textarea()}
                  placeholder='请输入你的英语作文内容...'
                  rows={10}
                />
                <button className={s.submitButton()}>开始批改</button>
              </div>
            </div>
          </div>
        );

      case 'grammar-qa':
        return (
          <div className={s.contentArea()}>
            <h2 className={s.contentTitle()}>语法问答</h2>
            <div className={s.featureContent()}>
              <div className={s.qaContainer()}>
                <div className={s.questionInput()}>
                  <label className={s.label()}>请输入你的语法问题：</label>
                  <input
                    className={s.input()}
                    type='text'
                    placeholder='例如：什么时候使用过去完成时？'
                  />
                  <button className={s.submitButton()}>提问</button>
                </div>
                <div className={s.commonQuestions()}>
                  <h3 className={s.sectionTitle()}>常见问题</h3>
                  <div className={s.questionList()}>
                    <div className={s.questionItem()}>
                      现在完成时和过去完成时的区别？
                    </div>
                    <div className={s.questionItem()}>
                      什么时候使用被动语态？
                    </div>
                    <div className={s.questionItem()}>
                      如何正确使用冠词 a, an, the？
                    </div>
                    <div className={s.questionItem()}>
                      虚拟语气的用法规则是什么？
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'polishing':
        return (
          <div className={s.contentArea()}>
            <h2 className={s.contentTitle()}>文本润色</h2>
            <div className={s.featureContent()}>
              <div className={s.polishContainer()}>
                <div className={s.textArea()}>
                  <label className={s.label()}>原始文本：</label>
                  <textarea
                    className={s.textarea()}
                    placeholder='请输入需要润色的英文文本...'
                    rows={8}
                  />
                </div>
                <div className={s.polishOptions()}>
                  <h3 className={s.sectionTitle()}>润色选项</h3>
                  <div className={s.optionList()}>
                    <label className={s.checkboxLabel()}>
                      <input type='checkbox' /> 提升词汇丰富度
                    </label>
                    <label className={s.checkboxLabel()}>
                      <input type='checkbox' /> 改善句式结构
                    </label>
                    <label className={s.checkboxLabel()}>
                      <input type='checkbox' /> 增强逻辑连贯性
                    </label>
                    <label className={s.checkboxLabel()}>
                      <input type='checkbox' /> 修正语法错误
                    </label>
                  </div>
                  <button className={s.submitButton()}>开始润色</button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>功能开发中...</div>;
    }
  };

  // 修改退出登录按钮，添加点击事件
  return (
    <div className={s.container()}>
      {/* 左侧功能选择栏 */}
      <div className={s.sidebar()}>
        <div className={s.sidebarHeader()}>
          <h1 className={s.logo()}>PaoPaoMatt</h1>
          <div className={s.userInfo()}>
            <div className={s.avatar()}>👤</div>
            <div className={s.userDetails()}>
              <div className={s.userName()}>{user.name}</div>
              <div className={s.userEmail()}>{user.email}</div>
            </div>
          </div>
        </div>

        <nav className={s.navigation()}>
          {features.map((feature) => (
            <button
              key={feature.id}
              className={`${s.navItem()} ${activeFeature === feature.id ? s.navItemActive() : ''}`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <span className={s.navIcon()}>{feature.icon}</span>
              <div className={s.navContent()}>
                <div className={s.navTitle()}>{feature.name}</div>
                <div className={s.navDescription()}>{feature.description}</div>
              </div>
            </button>
          ))}
        </nav>

        <div className={s.sidebarFooter()}>
          <button className={s.logoutButton()} onClick={handleLogout}>
            退出登录
          </button>
        </div>
      </div>
      
      {/* 右侧内容区域 */}
      <div className={s.mainContent()}>{renderContent()}</div>
    </div>
  );
});

export default DashboardPage;
