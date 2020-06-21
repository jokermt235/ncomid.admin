import axios from 'axios';

export default class Instance{ 
    constructor(){
        this.root = "http://89.223.29.71:3000/api/v1/";
        this.instance = axios.create({
            baseURL: 'http://89.223.29.71:3000/api/v1/',
            timeout: 30000,
            headers: {'x-access-token': localStorage.token}
        });
    }
    getJSON(module, data, callback){
        let url = this.root + module;
        axios({
            method: 'post',
            url,
            data,
        }).then((responce)=>{
            callback(responce);
        });
    }
    verifyToken(_success, _error){
        this.instance.post("auth/check").then(
        (response)=>{
            _success(response);
        }).catch(function (error) {
            _error(error);
        });
    }
    save(module, data, _success, _error){
        this.instance.post(module,data).then((response)=>{
            _success(response);
        }).catch((error)=>{
            _error(error);
            //location.reload();
        });
    }
    all(module, data, _success, _error){
        this.instance.get(module,data).then((response)=>{
            _success(response);
        }).catch((error)=>{
            _error(error);
        })
    }
    delete(module, data,_success, _error){
        this.instance.delete(module + "/" + data.id + "/" + data.image).then((response)=>{
            _success(response);
        }).catch((error)=>{
            _error(error);
        })
    }
}
