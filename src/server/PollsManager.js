import Axios from "axios";

const url = 'http://localhost:4000'

export const submitPoll = async (poll, option) =>{
    const headers = {"poll-api-key": "secret"}
    try {
        const result = await Axios.patch(url+`/api/poll/${poll}/vote/${option}`, {}, headers)

        return result
    } catch (error){
        if (error.response && error.response.status === 500) {
            console.log(error.response.data.message.message)
            alert(error.response.data.message.message)
        }else alert('Unable to create task.\nNo connection with the server!')
        return undefined
    }
}

export const getPolls = async (page) =>{
    try {
        const result = await Axios.get(url+`/api/polls?page=${page}`)
        return result.data
    } catch (error){
        alert('Unable to get tasks.\nNo connection with the server!')
        return []
    }
}
