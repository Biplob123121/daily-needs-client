import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-hot-toast';

function AllUser() {

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/api/users');
      const data = await res.json();
      return data;
    }
  })

  const handleMakeAdmin = id => {
    fetch(`http://localhost:4000/api/users/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        if (data.modified) {
          toast.success('Making admin successfully completed.');
          refetch()
        }
      })
  }

  return (
    <div>
      <h2 className='text-2xl text-center font-semibold p-4'>All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users?.map((user, i) => <tr key={user._id}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-primary btn-xs'>Make admin</button>
                  }
                </td>
                <td><button className='btn btn-warning btn-xs'>Delete</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUser