
import {useEffect, useState} from 'react';
import '../../App.css'

const RandomUser = () =>{
  
  const [user,setUser]=useState(null);
  const [loading, setLoading]=useState(true);

  useEffect(() => {
    //console.log('useEfect llama a una funcion cada vez que se renderiza un componente');
    fetch("https://api.randomuser.me/")
    .then(res => res.json())
    .then(data => {
      //console.log(data); para ver lo que viene de la API
      const userData={
        name    : data.results[0].name.first,
        email   : data.results[0].email,
        picture : data.results[0].picture.thumbnail,
      }
      console.log(userData);// para ver lo que filtramos de lo recibido
      setUser(userData);
      setLoading(false);
    });
  },[]);

  return(
    <>      
      {loading? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>)
      :true}
      {user ?(<div className="col-lg-4">
                <div className="text-center card-box">
                  <div className="member-card pt-2 pb-2">
                    <div className="thumb-lg member-thumb mx-auto">
                      <img
                        src={user.picture}
                        className="rounded-circle img-thumbnail"
                        alt="profile-image"
                      />


                    </div>
                    <div className="">
                      <h4>{user.name}</h4>
                      <p className="text-muted">{user.email}</p>            
                    </div>
                  </div>
                </div>
              </div>)
    : null}
    </>
  );
}

export default RandomUser

/*
al principio el usuario es null
entonces tiene que preguntar si existe 



            
*/