import React from 'react';

const ViewUser = () => {
      return (
            <div>
                  <h1>component view user</h1>

                  <table className='border min-w-full text-left gap-8'>
                        <thead>
                              <tr className='border p-3'>
                                    <th className='p-4'>
                                          Id
                                    </th>
                                    <th className='p-4'>
                                          First Name
                                    </th>
                                    <th className='p-4'>
                                          second name
                                    </th>
                                    <th className='p-4'>
                                          department
                                    </th>
                                    <th className='p-4'>
                                          Age
                                    </th>
                              </tr>

                        </thead>
                        <tbody>
                              <tr className='p-4'>
                                    <td className='p-4'>
                                          123
                                    </td>
                                    <td>
                                          hashara
                                    </td>
                                    <td>
                                          sankalapa
                                    </td>
                                    <td>
                                          fas
                                    </td>
                                    <td>
                                          22
                                    </td>
                                    <td className='flex gap-3 items-cente p-4 text-center align-middle justify-center'>
                                          <button className='p-2 border bg-yellow-300 rounded-lg'>
                                                Edit
                                          </button>
                                          <button className='p-2 border bg-red-500 rounded-lg'>
                                                delete
                                          </button>
                                    </td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      );
}

export default ViewUser;
