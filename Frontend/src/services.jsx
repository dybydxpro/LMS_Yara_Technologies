import httpCommon from "./http";

class Services{
    getAllStudent(){
        return httpCommon.get("/Teacher");
    }

    getStudentById(id){
        return httpCommon.get(`/Teacher/${id}`);
    }

    postStudent(data){
        return httpCommon.post("/Teacher", data);
    }

    putStudent(data){
        return httpCommon.put("/Teacher", data);
    }

    deleteStudent(id){
        return httpCommon.delete(`/Teacher/${id}`);
    }
}

export default new Services();