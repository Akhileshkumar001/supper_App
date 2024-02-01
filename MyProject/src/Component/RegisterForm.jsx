import React from 'react'
import { useState } from 'react'
import{ useNavigate} from 'react-router-dom'
import './RegisterForm.css'

function RegisterForm() {
    const [data,setData]=useState({
        name:'',
        email:"",
        username:"",
        mobile:"",
        registerbox: false,
    })
    const[error,setError]=useState({
        name:null,
        email:null,
        username:null,
        mobile:null,
        registerbox: null,
    });
    const navigate=useNavigate(); 
    const handleSubmit=()=>{
        let isError=false;
        if(data.name.trim().length === 0){
            setError((prev)=>{
                return {...prev, 
                    name:"Name is required"};
            }) ; 
            isError=true; 
        }else{
            setError((prev)=>{
                return{...prev,name:null}
            })
        }
        if(data.username.trim().length === 0){
            setError((prev)=>{
                return {...prev, 
                    username:"UserName is required"};
            }) ;  
            isError=true;
        }else{
            setError((prev)=>{
                return{...prev,username:null}
            })
        }
        if(data.email.trim().length === 0){
            setError((prev)=>{
                return {...prev, 
                    email:"Emai is required"};
            }) ;  
            isError=true; 
        }else{
            setError((prev)=>{
                return{...prev,email:null}
            })
        }
        if(data.mobile.trim().length === 0){
            setError((prev)=>{
                return {...prev, 
                    mobile:"Mobile is required"};
            }) ; 
            isError=true;  
        }else{
            setError((prev)=>{
                return{...prev,mobile:null}
            })
        }
        if(data.registerbox === false){
            setError((prev)=>{
                return {...prev, 
                    registerbox:"checked is required"};
            }) ; 
            isError=true;   
        }else{
            setError((prev)=>{
                return{...prev,registerbox:null}
            })
        }
        if(isError){
            return
        }else{
            window.localStorage.setItem("userInfo",JSON.stringify(data))
            navigate('/info')
        }
    }
   
  return (
    <div>
    <div className='split right' 
    // style={{
    //     display: "flex",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     flexDirection:"column",
    //     gap:"1px",
    // }}
    >
        <h3 style={{color:'rgba(114,219,115,1)'}}>Supper App</h3>
       <input type='text'
        placeholder='name' 
        value={data.name} 
        onChange={(e)=>{setData((prev)=>{
            return{...prev,name:e.target.value}
        }) }
        }/>
        <p style={{color:"red"}}>{error.name}</p>
        <br/>
       <input type='text'
        placeholder='username'
        vlaue={data.username}
         onChange={(e)=>setData((prev)=>{
            return{
                ...prev,
                username:e.target.value,
            } 
        })}/>
         <p>{error.username}</p>
        <br/>
       <input type='text'
        placeholder='email' 
        vlaue={data.email}
        onChange={(e)=>{setData((prev)=>{
            return {...prev,email:e.target.value}
        })}}/>
         <p>{error.email}</p>
        <br/>
       <input type='text'
        placeholder='mobile' 
        vlaue={data.mobile}
        onChange={(e)=>{setData((prev)=>{
            return{...prev,mobile:e.target.value}
        })}}/>
         <p>{error.mobile}</p>
       <br/>
       <lebal htmlFor="registerbox">
        <input 
        checked={data.registerbox}
         id='registerbox' 
         type='checkbox' 
         name='registerbox'
         onChange={(e)=>{setData((prev)=>{
            return{...prev,registerbox:e.target.checked}
         })}}/>
        <span>Share my register data with superapp</span>
        </lebal>
        <p>{error.registerbox}</p>
        <button onClick={handleSubmit}>Sign Up</button> 
    </div>
    <div className='split left'>
            <img src='https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=900&t=st=1706630718~exp=1706631318~hmac=6427fbe706a7830a7ebedb89c76cf31f65defe135bbd9c34a422cb13af869d28'></img>
    </div>
    </div>
  )
}

export default RegisterForm