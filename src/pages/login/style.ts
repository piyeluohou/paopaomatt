import { css } from '@emotion/css';

// 登录页面样式定义
export const container = () => css`
  min-height: 100vh;
  display: flex;
`;

// 左侧内容区域样式
export const leftSection = () => css`
  flex: 1;
  background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const leftContent = () => css`
  max-width: 28rem;
  text-align: center;
`;

export const title = () => css`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const subtitle = () => css`
  color: #4b5563;
  margin-bottom: 2rem;
`;

// 插图区域样式
export const illustrationContainer = () => css`
  position: relative;
  width: 20rem;
  height: 16rem;
  margin: 0 auto;
`;

export const illustrationWrapper = () => css`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const characterContainer = () => css`
  position: relative;
`;

export const desk = () => css`
  width: 8rem;
  height: 4rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
  position: relative;
`;

export const chartElement1 = () => css`
  position: absolute;
  top: -2rem;
  right: -1rem;
  width: 4rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const chartCircle = () => css`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(to right, #60a5fa, #34d399);
`;

export const chartElement2 = () => css`
  position: absolute;
  top: -1.5rem;
  left: -2rem;
  width: 3rem;
  height: 2rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const chartBars = () => css`
  display: flex;
  gap: 0.25rem;
`;

export const chartBar1 = () => css`
  width: 0.25rem;
  height: 1rem;
  background-color: #60a5fa;
  border-radius: 0.125rem;
`;

export const chartBar2 = () => css`
  width: 0.25rem;
  height: 1.5rem;
  background-color: #34d399;
  border-radius: 0.125rem;
`;

export const chartBar3 = () => css`
  width: 0.25rem;
  height: 0.75rem;
  background-color: #fbbf24;
  border-radius: 0.125rem;
`;

export const chartElement3 = () => css`
  position: absolute;
  bottom: -1rem;
  right: 2rem;
  width: 2.5rem;
  height: 1.5rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const chartGreenBar1 = () => css`
  width: 0.25rem;
  height: 0.5rem;
  background-color: #34d399;
  border-radius: 0.125rem;
`;

export const chartGreenBar2 = () => css`
  width: 0.25rem;
  height: 0.75rem;
  background-color: #34d399;
  border-radius: 0.125rem;
`;

export const chartGreenBar3 = () => css`
  width: 0.25rem;
  height: 1rem;
  background-color: #34d399;
  border-radius: 0.125rem;
`;

export const character = () => css`
  position: relative;
  z-index: 10;
`;

export const head = () => css`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to bottom, #fef3c7, #fde68a);
  border-radius: 50%;
  margin: 0 auto 0.5rem;
  position: relative;
`;

export const hair = () => css`
  width: 2rem;
  height: 1.5rem;
  background-color: #1f2937;
  border-radius: 50% 50% 0 0;
  position: absolute;
  top: 0.25rem;
  left: 0.5rem;
`;

export const body = () => css`
  width: 4rem;
  height: 5rem;
  background: linear-gradient(to bottom, #3b82f6, #2563eb);
  border-radius: 1rem 1rem 0 0;
  margin: 0 auto;
  position: relative;
`;

export const leftArm = () => css`
  position: absolute;
  left: -0.75rem;
  top: 1rem;
  width: 1.5rem;
  height: 3rem;
  background-color: #3b82f6;
  border-radius: 50%;
  transform: rotate(-12deg);
`;

export const rightArm = () => css`
  position: absolute;
  right: -0.75rem;
  top: 1rem;
  width: 1.5rem;
  height: 3rem;
  background-color: #3b82f6;
  border-radius: 50%;
  transform: rotate(12deg);
`;

export const laptop = () => css`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2.5rem;
  height: 1.5rem;
  background-color: #d1d5db;
  border-radius: 0.125rem;
`;

export const laptopScreen = () => css`
  width: 2rem;
  height: 1rem;
  background-color: #1f2937;
  border-radius: 0.125rem;
  margin: 0.25rem auto 0;
`;

export const legs = () => css`
  width: 3rem;
  height: 4rem;
  background-color: #1f2937;
  margin: 0 auto;
  border-radius: 0 0 0.5rem 0.5rem;
`;

export const plant = () => css`
  position: absolute;
  bottom: 0;
  right: 1rem;
  width: 2rem;
  height: 3rem;
`;

export const pot = () => css`
  width: 1.5rem;
  height: 2rem;
  background-color: #fed7aa;
  border-radius: 50% 50% 0 0;
  margin: 0 auto;
`;

export const leaf1 = () => css`
  width: 2rem;
  height: 1rem;
  background-color: #22c55e;
  border-radius: 50%;
  margin: -0.5rem auto 0;
`;

export const leaf2 = () => css`
  width: 1.5rem;
  height: 0.75rem;
  background-color: #16a34a;
  border-radius: 50%;
  margin: -0.25rem auto 0;
`;

// 右侧登录表单样式
export const rightSection = () => css`
  width: 24rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

export const formContainer = () => css`
  max-width: 20rem;
  margin: 0 auto;
  width: 100%;
`;

export const formTitle = () => css`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
`;

export const form = () => css`
  & > * + * {
    margin-top: 1.5rem;
  }
`;

export const fieldContainer = () => css``;

export const label = () => css`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const input = () => css`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  transition: all 0.2s;

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-color: transparent;
  }
`;

export const checkboxContainer = () => css`
  display: flex;
  align-items: center;
`;

export const checkbox = () => css`
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export const checkboxLabel = () => css`
  margin-left: 0.5rem;
  display: block;
  font-size: 0.875rem;
  color: #374151;
`;

export const submitButton = () => css`
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export const forgotPasswordContainer = () => css`
  text-align: center;
`;

export const forgotPasswordLink = () => css`
  font-size: 0.875rem;
  color: #dc2626;
  text-decoration: none;

  &:hover {
    color: #991b1b;
  }
`;
