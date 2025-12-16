import { memo } from 'react'
import { Todo } from './utils'

const List = memo(function List({ items }: { items: Todo[] }) {
    console.log('[ARTIFICIALLY SLOW] Rendering <List /> with ' + items.length + ' items');
    const startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // 在 500 毫秒内不执行任何操作以模拟极慢的代码
    }
    return (
        <ul>
            {items.map(todo => (
                <li key={todo.id}>
                    {todo.completed ?
                        <s>{todo.text}</s> :
                        todo.text
                    }
                </li>
            ))}
        </ul>
    );
})

export default List;
