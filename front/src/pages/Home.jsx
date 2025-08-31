import React from 'react';
import CreateUser from '../component/createUser';
import ViewUser from '../component/viewUser';


const Home = () => {
      return (
            <div>
                  <h2 className='mb-10'>Craete Users </h2>


                  <div>
                        <CreateUser />
                  </div>
                  <div>
                        <ViewUser />
                  </div>
            </div>
      );
}

export default Home;
