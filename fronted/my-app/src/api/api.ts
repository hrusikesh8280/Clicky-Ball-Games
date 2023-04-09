import axios from "axios"
export interface userDataType{
        _id:string,
        username:string,
        score:number,
}
export interface userType{
    username:string,
    score:number
}

export const postUserData = async(user:userType)=>{
    let res = await axios.get(`https://yellow-frog-kit.cyclic.app`,{
        params:{
            username:user.username
        }
    })
    let userData:userDataType[] = res.data.data
    console.log(res)
    console.log(userData)

    if(userData?.length>0){
        let res = await axios.patch(`https://yellow-frog-kit.cyclic.app`,user)
        console.log("patch")
        console.log(res)
    }else{
        let res = await axios.post(`https://yellow-frog-kit.cyclic.app`,user)
        console.log("post")
        console.log(res)
    }
}


export const getUserData = async()=>{
    let res = await axios.get(`https://yellow-frog-kit.cyclic.app`)
    let userData:userDataType[] = res.data.data
    console.log(userData)
    return userData
}