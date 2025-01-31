import customForm from "../../components/custom-form"




export default class LoginContainer {
    constructor(onNavigate, isLoggingIn = true) {
        super(onNavigate)
        this.isLoggingIn = isLoggingIn
        this.onInit()
    }

    onInit() {
        if(this.isLoggingIn){

            this.fields = [
                {
                    id: 'email',
                    inputType: 'email',
                    placeholder: 'Email',
                    iconClassName: 'fa-envelope"'
                },{
                    id: 'password',
                    inputType: 'password',
                    placeholder: 'Mot de passe',
                    iconClassName: 'fa-lock"'
                }
            ]

            this.buttons = [
                {
                    id: 'login-button',
                    className: 'is-success',
                    content: 'Se connecter'
                }
            ]

            this.form = {
                id: 'login-form'
            }
        }

        const loginMain = document.getElementById('login-main')
        loginMain.innerHTML += customForm(this.fields, this.form, this.buttons)
    }
}