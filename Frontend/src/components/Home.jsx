import React, {useState, useEffect} from "react";
import Services from './../services';

export default function Home(){
    const[data, setData] = useState([{
        "id": "",
        "name": "",
        "address": "",
        "contactNumber": ""
    }]);

    useEffect(() => {
        fetchData();
    },[]);

    function fetchData(){
        Services.getAllStudent()
        .then(({data})=>{
            setData(data);
            console.log(data);
        }).catch(({response})=>{
            console.log(response);
        });
    }

    function deleteData(id){
        if(window.confirm("Confirm to delete data.")){
            Services.deleteStudent(id)
            .then(({data})=>{
                console.log(data);
                fetchData();
                alert("Successfully deleted.");
            }).catch(({response})=>{
                console.log(response);
            });
        }
    }

    function tableData(){
        return(
            data.map((dt, index) => 
                <tr className="hover:bg-slate-100" key={dt.id}>
                    <td className="p-4 border-solid border-2 border-slate-300 text-center">{index+1}</td>
                    <td className="p-4 border-solid border-2 border-slate-300">{dt.name}</td>
                    <td className="p-4 border-solid border-2 border-slate-300">{dt.address}</td>
                    <td className="p-4 border-solid border-2 border-slate-300 text-center">{dt.contactNumber}</td>
                    <td className="p-4 border-solid border-2 border-slate-300 text-center">
                        <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded drop-shadow-lg hover:drop-shadow-xl text-center" onClick={() =>{ window.location.replace(`/view/${dt.id}`); }}>
                            View
                        </button>&nbsp;&nbsp;&nbsp;
                        <button type="button" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-2 rounded drop-shadow-lg hover:drop-shadow-xl text-center" onClick={() =>{ window.location.replace(`/edit/${dt.id}`); }}>
                            Edit
                        </button>&nbsp;&nbsp;&nbsp;
                        <button type="button" className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded drop-shadow-lg hover:drop-shadow-xl text-center" onClick={() =>{ deleteData(dt.id); }}>
                            Delete
                        </button>
                    </td>
                </tr>
            )
        );
    }

    return(
        <div>
            <div className="min-h-[100vh] h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 py-[12.5vh]">
                <div className="min-h-[75vh] w-[75vw] bg-white mx-[12.5%] rounded-3xl p-8 drop-shadow-lg hover:drop-shadow-2xl">
                    <div className="flex flex-row justify-end gap-4">
                        <button type="button" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-2 rounded drop-shadow-lg hover:drop-shadow-xl text-center" onClick={() =>{ window.location.replace("/add"); }}>
                            Add
                        </button>
                        <button type="button" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-2 rounded drop-shadow-lg hover:drop-shadow-xl text-center" onClick={() =>{ window.location.replace("/"); }}>
                            Home
                        </button>
                    </div>

                    <div className="px-2 py-8 bg-scroll">
                        <table className="table-auto w-full">
                            <thead className="bg-slate-300 text-slate-800 border-solid border-2 border-slate-300">
                                <tr className="">
                                    <th className="p-4">#</th>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Address</th>
                                    <th className="p-4">Contact Number</th>
                                    <th className="p-4">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tableData() }                       
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}