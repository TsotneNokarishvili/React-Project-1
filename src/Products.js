import axios from "axios";
import { useEffect, useState } from "react";
    
    function Landing() {
            const [friends, setFriends] = useState([])
    
    useEffect (() =>{
        axios.get("https://reqres.in/api/users?page=1")
        .then(Response =>{
            setFriends(Response.data.data);

        })
        .catch(error => console.log(error))
    

    function removeFriend(itemId){
    const newUser = friends.filter(item => item.id !=itemId)
    setFriends(newUser)

}
return <div className = 'main'>
    
        {
            friends.map(item => (
                <li className="user-div" key={item.id}>
                    {item.first_name + ''+ item.last_name}
                    <img src={item.avatar}></img>
                    <div className="buttons">
                    <button onClick={()=> removeFriend (item)}>remove Friend</button>
                    <button  className = "gilaki" type="button" onClick="alert('you already sent friend request')">ADD FRIEND</button> 
                    </div>
                </li>
            ))
        }
    
</div>
export default Landing;