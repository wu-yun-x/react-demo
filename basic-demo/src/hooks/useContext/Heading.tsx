import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';


// 定义 Heading 组件的 props 类型
type HeadingProps = {
    children: React.ReactNode; // 定义 children 属性的类型为 ReactNode
  };

  // 定义 LevelContext 的值类型
type LevelContextValue = 1 | 2 | 3 | 4 | 5 | 6;


export default function Heading({ children }:HeadingProps) {
  const level = useContext(LevelContext) as LevelContextValue; // 断言 level 的类型
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('未知的 level：' + level);
  }
}
