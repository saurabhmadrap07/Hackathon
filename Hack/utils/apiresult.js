function apiSuccess(data){
    return {Status : "Success" , data: data}
}

function apiError(msg){
    return {Status : "Error" , message : msg}
}

module.exports = {
    apiSuccess,
    apiError,
}