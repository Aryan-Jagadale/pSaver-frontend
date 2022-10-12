//API NOTIfication Messages
export const API_NOTIFICATION_MESSSAGES = {
    loading:{
        title:"Loading...",
        message:"Data is being loaded.Please wait"
    },
    success:{
        title:"Success",
        message:"Data successfully loaded."
    },
    requestFailure:{
        title:"Error!",
        message:"An error occur while parsing request data",
    },
    responseFailure:{
        title:"Error!",
        message:"An error occur while fetching response from server. Please try again",
    },
    newtworkError:{
        title:"Error!",
        message:"Unable to connect to the server. Please check internet connectivity and try again.",
    }
}

// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/", method: "POST/GET/PUT/DELETE" }
export const SERVICE_URLS = {
    userLogin: { url: '/login', method: 'POST' },
    userSignup: { url: '/signup', method: 'POST' },
}


