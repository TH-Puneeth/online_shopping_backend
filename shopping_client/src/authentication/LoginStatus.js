class LoginStatus{
    constructor(){
        this._status=false;
    }
    getStatus(){
        return this._status;
    }
    setStatus(status){
        this._status = status;
    }
}

let LoginState = new LoginStatus();

export default LoginState; 