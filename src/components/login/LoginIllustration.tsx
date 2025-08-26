import React from 'react';
import * as s from '../../pages/login/style';

interface LoginIllustrationProps {
  className?: string;
}

const LoginIllustration: React.FC<LoginIllustrationProps> = ({
  className = '',
}) => {
  return (
    <div className={`${s.leftSection()} ${className}`}>
      <div className={s.leftContent()}>
        <h1 className={s.title()}>泡泡学习系统</h1>
        <p className={s.subtitle()}>
          泡泡学习系统是一个基于 AI
          技术的在线学习平台，为用户提供个性化的学习体验。
        </p>

        {/* 插图区域 */}
        <div className={s.illustrationContainer()}>
          <div className={s.illustrationWrapper()}>
            {/* 人物插图 */}
            <div className={s.characterContainer()}>
              {/* 桌子 */}
              <div className={s.desk()}>
                {/* 图表元素 */}
                <div className={s.chartElement1()}>
                  <div className={s.chartCircle()} />
                </div>
                <div className={s.chartElement2()}>
                  <div className={s.chartBars()}>
                    <div className={s.chartBar1()} />
                    <div className={s.chartBar2()} />
                    <div className={s.chartBar3()} />
                  </div>
                </div>
                <div className={s.chartElement3()}>
                  <div className={s.chartBars()}>
                    <div className={s.chartGreenBar1()} />
                    <div className={s.chartGreenBar2()} />
                    <div className={s.chartGreenBar3()} />
                  </div>
                </div>
              </div>

              {/* 人物 */}
              <div className={s.character()}>
                {/* 头部 */}
                <div className={s.head()}>
                  <div className={s.hair()}></div>
                </div>
                {/* 身体 */}
                <div className={s.body()}>
                  {/* 手臂 */}
                  <div className={s.leftArm()}></div>
                  <div className={s.rightArm()}></div>
                  {/* 笔记本电脑 */}
                  <div className={s.laptop()}>
                    <div className={s.laptopScreen()}></div>
                  </div>
                </div>
                {/* 腿部 */}
                <div className={s.legs()}></div>
              </div>

              {/* 植物装饰 */}
              <div className={s.plant()}>
                <div className={s.pot()}></div>
                <div className={s.leaf1()}></div>
                <div className={s.leaf2()}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginIllustration.displayName = 'LoginIllustration';

export default LoginIllustration;
