import { toast } from 'react-toastify';

export const toastSuccess = (data) => {
    toast.success(data,
    {position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,}
    )
    return {
        type: 'TOAST_SUCCESS'
    }
}        

export const toastError = (error) => {
    toast.error(error,
    {position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,}
    )
    return {
        type: 'TOAST_ERROR'
    }
}        