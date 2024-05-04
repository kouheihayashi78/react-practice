
const todoState = () => {
    const tasks = [
        '日記',
        '学習記録つける',
        'react楽しい!'
    ]

    const clickTask = () => {
        console.log('クリックされました')
    }
    
    return(
        // <>は<React.Fragment>の省略形
        <>
            <h3 className='todo-title'>シンプルなtodoリスト(useState版)</h3>
            {tasks.map(task => {
                return (
                    // keyを指定することでReactは各要素を一意に識別する
                    <div className="todo-content" key={task}>
                        <button type="checkbox" onClick={clickTask}>完了</button>
                        <span>{task}</span>
                    </div>
                )
            })}
        </>
    )
}

export default todoState;