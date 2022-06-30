import axios from "axios";
const getRestaurants = async ()=>{
    await axios.get('http://192.168.0.195:3000/restaurants')
}