import { Component } from "react";
class ClassComp extends Component
{
    constructor()
    {
        console.log("constructor called")
        super();
        this.state = {
            count:0
        }
    }
    componentDidMount ()
    {
        console.log("component did mount called")
    }
    shouldComponentUpdate ()
    {
        const res= confirm("do you really want to update")
        if (res)
            return true
        else
            return false
    }
    componentDidUpdate ()
    {
        console.log("  componentDidUpdate called")
    }
    render ()
    {
        console.log("render called")
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
                <button onClick={() => this.setState({ count: 0 })}>Reset</button>
            </div>
        )
    }
}
export default ClassComp