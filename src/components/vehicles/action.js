import * as source from './source'

export const getDatas = ()=>{
    return {
        type:"GET_DATA",
        payload:source.getData()
    }
}