import { useState, useInsertionEffect } from "react";

// 模拟一个简单的 CSS-in-JS 库
const insertedStyles = new Set<string>();

function useCSS(rule: string, className: string) {
  useInsertionEffect(() => {
    // 检查样式是否已经插入，避免重复插入
    if (!insertedStyles.has(className)) {
      insertedStyles.add(className);

      // 创建 style 元素
      const styleElement = document.createElement("style");
      styleElement.textContent = `.${className} { ${rule} }`;

      // 插入到 head 中
      document.head.appendChild(styleElement);

      console.log(`样式已插入: .${className}`);

      // 返回清理函数
      return () => {
        insertedStyles.delete(className);
        document.head.removeChild(styleElement);
        console.log(`样式已移除: .${className}`);
      };
    }
  }, [rule, className]); // 依赖项：当 rule 或 className 变化时重新执行

  return className;
}

export default function InsertionEffectDemo() {
  const [isVisible, setIsVisible] = useState(true);
  const [color, setColor] = useState("red");
  const [size, setSize] = useState("16px");

  // 使用我们的 CSS-in-JS hook
  const dynamicClass = useCSS(
    `color: ${color}; font-size: ${size}; font-weight: bold; transition: all 0.3s ease;`,
    `dynamic-text-${color}-${size.replace("px", "")}`
  );

  const buttonClass = useCSS(
    "background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 5px;",
    "gradient-button"
  );

  const containerClass = useCSS(
    "padding: 20px; border: 2px solid #ccc; border-radius: 10px; margin: 20px; background: #f9f9f9;",
    "demo-container"
  );

  return (
    <div className={containerClass}>
      <h2>useInsertionEffect 演示</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>动态样式控制：</h3>

        <div>
          <label>颜色：</label>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="red">红色</option>
            <option value="blue">蓝色</option>
            <option value="green">绿色</option>
            <option value="purple">紫色</option>
          </select>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>字体大小：</label>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
          </select>
        </div>
      </div>

      {isVisible && (
        <div className={dynamicClass}>
          这是动态样式的文本！颜色：{color}，大小：{size}
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button
          className={buttonClass}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "隐藏文本" : "显示文本"}
        </button>

        <button
          className={buttonClass}
          onClick={() => {
            setColor(color === "red" ? "blue" : "red");
            setSize(size === "16px" ? "24px" : "16px");
          }}
        >
          快速切换样式
        </button>
      </div>

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        <p>
          <strong>useInsertionEffect 特点：</strong>
        </p>
        <ul>
          <li>在布局副作用触发之前插入样式</li>
          <li>专为 CSS-in-JS 库设计</li>
          <li>比 useEffect 和 useLayoutEffect 更早执行</li>
          <li>避免样式注入导致的性能问题</li>
        </ul>

        <p>
          <strong>查看控制台可以看到样式插入和移除的日志</strong>
        </p>
      </div>
    </div>
  );
}
