import React, { useState } from 'react'

import Input from "@components/Input/input"
import Button from "@components/Button/button"

export default function registerFacility(props) {
    if(!props.visible) return null

    const [formData, setFormData] = useState(
        {
            facilityName: ""
        }
        )

    function handleChange(){
        console.log("ONchagegg")
    }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
        <div className="bg-white p-2 rounded-md w-130 flex flex-col justify-center gap-5">
            <div class="flex flex-col mx-auto ">
            <label className="mb-3">Email</label>
                <Input
                type="text"
                placeholder="John Doe Hospital"
                className="px-4 py-4 bg-gray outline-none  w-128 rounded-md"
                name="facilityName"
                onChange={handleChange}
                value={formData.facilityName}
                
                />
            </div>
            <div className="flex gap-5 ">
                <Button 
                    onClick={props.onClose}
                    className="hidden text-primary tracking-wide leading-loose lg:flex items-center text-sm font-normal px-6 py-1 border border-primary rounded-sm lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300" >
                        Cancel</Button>

                <Button className="hidden text-white  bg-primary tracking-wide leading-loose lg:flex items-center text-sm font-normal px-6 py-1 border border-primary rounded-sm lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300"  >Proceed</Button>
            </div>
        </div>
    </div>
  )
}
