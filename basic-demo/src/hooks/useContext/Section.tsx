import {useContext} from 'react'
import { SectionProps } from "./types";
import { LevelContext } from './LevelContext.js';

// 定义 Section 组件
const Section: React.FC<SectionProps> = ({ children }) => {
    const level = useContext(LevelContext);
    return (
    //   <div>
    //     {/* 这里可以根据 level 属性来渲染不同样式的内容 */}
    //     <p>Section level: {level}</p>
    //     {children}
    //   </div>
        <section className="section">
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
  };

  export default Section;