import React from 'react';

const CreateUser = () => {

      const [submit, setSubmit] = useState({
            fname: '',
            sname: '',
            age: '',
            department: ''

      })

      const onSubmit = () => {

      }



      return (
            <div>
                  <form action="" onSubmit='' className='flex flex-col gap-5 w-80'>
                        <input
                              type="text"
                              name='fname'
                              value=''
                              placeholder='fist Name '
                              className='border' />

                        <input
                              type="text"
                              name='sname'
                              value=''
                              placeholder='Second Name'
                              className='border' />

                        <input
                              type="number"
                              name='age'
                              value=''
                              placeholder='Age'
                              className='border' />

                        <select name="" id="" className='border'>
                              <option value="" name='fas'>FAS</option>
                              <option value="" name='fcbs'>FCBS</option>
                        </select>

                        <div className='flex justify-between'>
                              <button className='p-3 border bg-green-500 rounded-lg'>Submit</button>
                              <button className='p-3 border bg-red-500 rounded-lg'>Cancel</button>
                        </div>
                  </form>
            </div>
      );
}

export default CreateUser;
