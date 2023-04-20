import React,{Component} from "react"
class Mounting extends Component{
    constructor(props){
        super(props)
        this.state = {heading:'old heading'}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({heading:'brand new headin'})
            this.setState({money:2000})
        },2000)
    }

    state={
        money:10,
    }
    static getDerivedStateFromProps(props,state){
        return{
            money:1000,
        }
    }

    render(){
        return(
            <div>
                <header>
                    <h1>{this.state.heading}</h1>
                    <p>You have {this.state.money}</p>
                </header>
            </div>
        )
    }
}

export default Mounting;