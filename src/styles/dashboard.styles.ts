import { css } from '@emotion/css';

// 主容器
export const container = () => css`
  min-height: 100vh;
  display: flex;
  background-color: #f8fafc;
`;

// 左侧边栏
// 修改侧边栏样式，确保退出按钮始终可见
export const sidebar = () => css`
  width: 320px;
  background: linear-gradient(to bottom, #1e293b, #334155);
  color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  position: fixed; /* 添加固定定位 */
  height: 100vh; /* 确保全屏高度 */
  left: 0;
  top: 0;
  z-index: 10;
`;

// 同时修改主内容区域，为固定侧边栏留出空间
export const mainContent = () => css`
  flex: 1;
  overflow-y: auto;
  margin-left: 320px; /* 为固定侧边栏留出空间 */
`;

export const sidebarHeader = () => css`
  padding: 2rem 1.5rem;
  border-bottom: 1px solid #475569;
`;

export const logo = () => css`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #60a5fa;
`;

export const userInfo = () => css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const avatar = () => css`
  width: 2.5rem;
  height: 2.5rem;
  background: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

export const userDetails = () => css`
  flex: 1;
`;

export const userName = () => css`
  font-weight: 600;
  font-size: 0.875rem;
`;

export const userEmail = () => css`
  font-size: 0.75rem;
  color: #94a3b8;
`;

// 导航区域
export const navigation = () => css`
  flex: 1;
  padding: 1rem 0;
`;

export const navItem = () => css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  color: #cbd5e1;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #475569;
    color: white;
  }
`;

export const navItemActive = () => css`
  background-color: #3b82f6 !important;
  color: white !important;
  border-right: 3px solid #60a5fa;
`;

export const navIcon = () => css`
  font-size: 1.25rem;
  width: 1.5rem;
  text-align: center;
`;

export const navContent = () => css`
  flex: 1;
`;

export const navTitle = () => css`
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const navDescription = () => css`
  font-size: 0.75rem;
  opacity: 0.8;
`;

export const sidebarFooter = () => css`
  padding: 1.5rem;
  border-top: 1px solid #475569;
`;

export const logoutButton = () => css`
  width: 100%;
  padding: 0.75rem;
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: #b91c1c;
  }
`;

export const contentArea = () => css`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const contentTitle = () => css`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
`;

// 概览页面样式
export const statsGrid = () => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const statCard = () => css`
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const statIcon = () => css`
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  background: #eff6ff;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const statInfo = () => css`
  flex: 1;
`;

export const statNumber = () => css`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
`;

export const statLabel = () => css`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const recentActivity = () => css`
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const sectionTitle = () => css`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const activityList = () => css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const activityItem = () => css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 0.5rem;
`;

export const activityIcon = () => css`
  font-size: 1.25rem;
`;

export const activityText = () => css`
  flex: 1;
  color: #374151;
`;

export const activityTime = () => css`
  color: #6b7280;
  font-size: 0.875rem;
`;

// 功能页面通用样式
export const featureContent = () => css`
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const uploadArea = () => css`
  text-align: center;
  padding: 3rem;
  border: 2px dashed #d1d5db;
  border-radius: 0.75rem;
  margin-bottom: 2rem;
`;

export const uploadIcon = () => css`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const uploadButton = () => css`
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  margin-top: 1rem;

  &:hover {
    background: #2563eb;
  }
`;

export const textArea = () => css`
  margin-bottom: 1.5rem;
`;

export const label = () => css`
  display: block;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const textarea = () => css`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-family: inherit;
  resize: vertical;
  margin-bottom: 1rem;

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export const input = () => css`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  margin-bottom: 1rem;

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export const submitButton = () => css`
  background: #10b981;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: #059669;
  }
`;

// 语法问答特定样式
export const qaContainer = () => css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const questionInput = () => css`
  /* 继承通用样式 */
`;

export const commonQuestions = () => css`
  /* 继承通用样式 */
`;

export const questionList = () => css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const questionItem = () => css`
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e2e8f0;
  }
`;

// 文本润色特定样式
export const polishContainer = () => css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

export const polishOptions = () => css`
  /* 继承通用样式 */
`;

export const optionList = () => css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const checkboxLabel = () => css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
