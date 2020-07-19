import React, { Component, useState, useEffect } from 'react'

export default class Page extends Component {
    state = {
        count: 1
    }
    componentDidUpdate() {
        console.log('更新了')
    }
    render() {
        console.log(this.setState)
        return (<button onClick={() => {
            this.setState({
                count: this.state.count + 1
            })
            this.setState({
                count: this.state.count + 10
            })
            console.log(this.state.count)
        }}>{this.state.count}</button>)
    }
}

// export default function Page() {
//     let [count, setCount] = useState(0);
//     useEffect(() => {
//         console.log('执行了')
//     }, [count])

//     return (
//         <button onClick={() => setCount(count)}>
//             {count}
//         </button>
//     )
// }