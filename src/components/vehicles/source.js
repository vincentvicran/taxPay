import {request} from '../../request'

export const getData = ()=>{
    return request.get("vehicles");
}