import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";


// upload a video

export const uploadvideoAPI=async(video)=>{
    return await commonAPI("post",`${server_url}/allvideos`,video)
}

// get all video

export const getuploadedvideosAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allvideos`,"")
}

// get a video

export const getvideoAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/allvideos/${id}`,"")
}

// delete a video

export const deletevideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allvideos/${id}`,{})
}

// add history

export const addHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

// get history

export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

// delete a video

export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}

//  add Category

export const addCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}

//  get Category

export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}
// delete category

export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

// update category

export const updatecategoryAPI = async(id,categorydetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categorydetails)
}