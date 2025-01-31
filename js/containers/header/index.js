import BaseContainer from "../../models/BaseContainer.js"



export default class HeaderContainer  extends  BaseContainer {
    constructor(onNavigate){
        super(onNavigate)
        document.addEventListener('click', (event) => {
            if (event.target.matches('#header-login-button')) {
                this.onLoginClick()
            }
        });
        
    }

    onLoginClick(){
        console.log('clicked')
        this.onNavigate('#login')
    }
}