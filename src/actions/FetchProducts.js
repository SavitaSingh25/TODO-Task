import axios from 'axios'

const FetchProducts = async() =>  {
    try {
       const  data  = await axios.get('https://reqres.in/api/users?page=2')
        return data.data
    } catch (error) {
       console.log(error)
    }
}

export default FetchProducts;