import React from 'react'
import ActionGroup from '../ActionGroup/ActionGroup'
export default function StaffCard({ user }) {
  return (
    <div className="border border-gray-300 bg-white text-black mt-5 rounded-lg relative group">
      <div className="absolute left-0 z-10 text-black opacity-0 group-hover:opacity-100">
        <ActionGroup showEye={false} />
      </div>
      <div className="flex justify-center">
        <div className="h-40 w-4/5 bg-blue-1 rounded-b-full relative transform -translate-y-0.5">
          <div className="flex justify-center absolute bottom-1/2 translate-y-1/2 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img src={"https://image-us.24h.com.vn/upload/1-2022/images/2022-03-16/baukrysie_275278910_3174792849424333_1380029197326773703_n-1647427653-670-width1440height1800.jpg"} className="w-full h-full object-cover" alt="avatar" />
            </div>

          </div>
        </div>
      </div>

     
      <p className="text-2xl font-medium text-center mb-5">
        {
          user?.nameAccount
        }
      </p>
      <div className="mt-2 px-5 mb-4">
        <p className="py-1">
          <span className="font-medium mr-2">
            Id no:
          </span>
           {
            user?.userId
           }
        </p>
        <p className="py-1">
          <span className="font-medium mr-2">
            Phone:
          </span>
          {
            user?.phone
          }
        </p>
        <p className="py-1">
          <span className="font-medium mr-2">
            Email:
          </span>
          {
            user?.email
          }
        </p>
      </div>

      <div className="w-full py-2 bg-blue-1 rounded-lg">
        <p className="font-medium text-lg text-center text-white">
          {
            user?.role
          }
        </p>
      </div>
    </div>
  )
}