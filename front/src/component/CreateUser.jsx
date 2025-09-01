import React, { useState } from 'react';

const createUser = ({ user }) => {

      const [submit, setSubmit] = useState({
            fname: "",
            department: '',
            age: ''

      });

      const handleChange = (e) => {
            setSubmit({ ...submit, [e.target.name]: e.target.value });
      }

      const handleSubmit = (e) => {
            e.priventDefault();

            setSubmit({ fname: '', department: '', age: '' });
      }

      return (
            <div>
                  <form action="" onSubmit={handleSubmit}>
                        <input type="text"
                              value={submit.fname}
                              name='fname'
                              onChange={handleChange}
                              placeholder='First Name'
                              required />

                        <input type="text"
                              name='department'
                              value={submit.department}
                              onChange={handleChange}
                              placeholder='department'
                              required />

                        <input type="text"
                              name='age'
                              value={submit.age}
                              onChange={handleChange}
                              placeholder='Age'
                              required />

                  </form>
            </div>
      );
}

export default createUser;
