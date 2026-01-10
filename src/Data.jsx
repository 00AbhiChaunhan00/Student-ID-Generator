import axios from "axios";
export const API=axios.create({
  baseURL:"https://68e4b3f38e116898997c7ef7.mockapi.io/StudentId/"
 
})
export const GetApi=()=>{
    return API.get("/Student")
}
export const DelApi=(id)=>{
    return API.delete(`/Student/${id}`)
}
export const PostApi=(post)=>{
    return API.post('Student/',post)
}
export const UpdateApi=(postss,id)=>{
    return API.put(`/Student/${id}`,postss)
}