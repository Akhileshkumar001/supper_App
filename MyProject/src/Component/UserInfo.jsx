import React from 'react'

function UserInfo() {
    const userData=JSON.parse(window.localStorage.getItem("userInfo"));
    const selectedmovies=JSON.parse(window.localStorage.getItem("selectedmovies"));
    console.log(selectedmovies);
    console.log(userData);
  return (
    <div style={{background:"#5736EA",width:"200px",height:"250px", color:"white"}}>
        <p>{userData.name}</p>
        <p>{userData.username}</p>
        <p>{userData.email}</p>
        <p>{userData.mobile}</p>
        {selectedmovies.map((movie)=>{
            return(
                <div
                key={movie}
                style={{background:"#9F94FF",width:"fit-content",padding:"6px",margin:"6px",borderRadius:"12px"}} 
                >
                    {movie}
                    </div>
            )
        })}
    </div>
  )
}

export default UserInfo