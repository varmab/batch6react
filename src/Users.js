import React, {Component} from 'react'

class Users extends Component{
    constructor(){
        super();

        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            fetch('https://jsonplaceholdersssss.typicode.com/users')
            .then((response)=>response.json())
            .then((users)=>{
                this.setState({
                    users,
                    loading:false
                })
            })
            .catch((err)=>{
                this.setState({
                    error:true
                })
                console.log(err)
            })
        },3000)

    }

    render(){
        if(this.state.error){
            return (
                <div>Sorry.. Failed to get data, Try again later</div>
            )
        }
        if(this.state.loading){
            return (
                <div>Loading..</div>
            )
        }
        return(
            <div>
                <h1>Users</h1>
                <ul>
                {
                    this.state.users.map((user)=>{
                        return <li key={user.id}>{user.name}</li>
                    })
                }
                </ul>
            </div>
        )
    }

}

export default Users;