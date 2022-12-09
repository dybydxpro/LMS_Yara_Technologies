import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Services from './../services';

export default function Add(){
    const navigate = useNavigate();
    const [data, setData] = useState({
        "id": "",
        "name": "",
        "address": "",
        "contactNumber": ""
    });

    function handle(e){
        e.preventDefault();
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }
    function createData(){
        Services.postStudent(data)
        .then(({data})=>{
            console.log(data);
            navigate("/");
        }).catch(({response})=>{
            alert("Something went wrong!")
            console.log(response);
        });
    }

    return(
        <div>
            <div className="min-h-[100vh] h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 py-[12.5vh]">
                <div className="min-h-[75vh] w-[75vw] bg-white mx-[12.5%] rounded-3xl p-8 drop-shadow-lg hover:drop-shadow-2xl">
                    <div className="flex flex-row justify-end gap-4">
                        <button type="button" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-2 rounded drop-shadow-lg hover:drop-shadow-xl text-center" onClick={() =>{ window.location.replace("/"); }}>
                            Home
                        </button>
                    </div>

                    <div className="px-[15vw] py-8 bg-scroll">
                        <div className="mt-16">
                            <div className="grid grid-rows-1 grid-cols-6 mb-8">
                                <div className="col-span-2">
                                    <p className="font-sans text-lg font-medium">Teacher Name</p>
                                </div>
                                <div className="col-span-4">
                                    <input type="text" id="name" onChange={(e) => handle(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Smidth" required />
                                </div>
                            </div>
                            <div className="grid grid-rows-1 grid-cols-6 mb-8">
                                <div className="col-span-2">
                                    <p className="font-sans text-lg font-medium">Address</p>
                                </div>
                                <div className="col-span-4">
                                    <input type="text" id="address" onChange={(e) => handle(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Colombo" required />
                                </div>
                            </div>
                            <div className="grid grid-rows-1 grid-cols-6 mb-8">
                                <div className="col-span-2">
                                    <p className="font-sans text-lg font-medium">Contact Number</p>
                                </div>
                                <div className="col-span-4">
                                    <input type="text" id="contactNumber" onChange={(e) => handle(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="+94770004444" required />
                                </div>
                            </div>     
                            <div className="mb-8">
                                <div className="flex flex-row justify-end gap-4">
                                    <button type="button" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-2 rounded drop-shadow-lg hover:drop-shadow-xl text-center" onClick={() =>{ createData(); }}>
                                        Save
                                    </button>
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}