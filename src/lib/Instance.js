import axios from 'axios';

export default class Instance{ 
    constructor(){
        this.root = process.env.VUE_APP_BASE_URL;
        this.instance = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL,
            timeout: 30000,
            headers: {'x-access-token': localStorage.token}
        });
    }
    setHeader(key, value){
        this.instance.defaults.headers[key] = value;
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
        });
    }
    update(module, data, _success, _error){
        this.instance.put(module,data).then((response)=>{
            _success(response);
        }).catch((error)=>{
            _error(error);
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
        if(data.image){
            this.instance.delete(module + "/" + data.id + "/" + data.image).then((response)=>{
                _success(response);
            }).catch((error)=>{
                _error(error);
            });
        }else{
            this.instance.delete(module + "/" + data.id).then((response)=>{
                _success(response);
            }).catch((error)=>{
                _error(error);
            });
        }
    }
}
