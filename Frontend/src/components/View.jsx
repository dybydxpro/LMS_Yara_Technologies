import React, {useState, useEffect} from "react";
import Services from './../services';

export default function View(){
    const [data, setData] = useState({
        "id": "",
        "name": "",
        "address": "",
        "contactNumber": ""
    });

    useEffect(() => {
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[2];

        fetchDataById(id);
    },[]);

    function fetchDataById(id){
        Services.getStudentById(id)
        .then(({data})=>{
            setData(data);
            console.log(data);
        }).catch(({response})=>{
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
                                    <input type="text" id="name" value={data.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" readOnly />
                                </div>
                            </div>
                            <div className="grid grid-rows-1 grid-cols-6 mb-8">
                                <div className="col-span-2">
                                    <p className="font-sans text-lg font-medium">Address</p>
                                </div>
                                <div className="col-span-4">
                                    <input type="text" id="address" value={data.address} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Smidth" readOnly />
                                </div>
                            </div>
                            <div className="grid grid-rows-1 grid-cols-6 mb-8">
                                <div className="col-span-2">
                                    <p className="font-sans text-lg font-medium">Contact Number</p>
                                </div>
                                <div className="col-span-4">
                                    <input type="text" id="contactNumber" value={data.contactNumber} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john@xmail.com" readOnly />
                                </div>
                            </div>                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}