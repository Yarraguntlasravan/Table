 import React from "react";
import '../Table.css';

class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users:[],
            thead:[]
        }
    }
    componentDidMount(){
        let api = fetch("https://jsonplaceholder.typicode.com/users")
        console.log(api);
        api.then(x=>x.json()).then((y)=>{
            this.setState({users:y})
            this.setState({thead:Object.keys(y[0]).slice(0,4)})
        }
        )
        
    }
    render(){
        return(
            <>
            <table border={1}>
            {this.state.thead.map((z)=>{
                return(
                    <>
                        <th>{z}</th>
                    </>
                )
            })}

            {this.state.users.map((x)=>{
                   return(
                    <>
                        <tr><td>{x.id}</td> <td>{x.name}</td> <td>{x.username}</td> <td>{x.email}</td> </tr>
                        
                    </>
                   )
               })}
                    </table> 

            </>
        )
    }

} 
export default Table