import React,{useContext} from 'react';
import UserContext from '../context/user/UserContext'

function Profile(props) {

    const {selectedUser} = useContext(UserContext)
    return (
        <>
            {console.log(selectedUser)}
            {selectedUser ? 
            (<div className="card card-body text-center">
                <img src={selectedUser.avatar} alt="" className="card-img-top rounded-circle m-auto img-fluid" width="180"/>
                <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
                <h3>Email: {selectedUser.email}</h3>
            </div>)
            :<h1>No hay usuario seleccionado</h1>}
        </>
    );
}

export default Profile;