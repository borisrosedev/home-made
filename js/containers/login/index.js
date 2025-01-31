import customForm from "../../components/custom-form/index.js"
import BaseContainer from "../../models/BaseContainer.js"




export default class LoginContainer extends BaseContainer {
    userInputs = {}
    
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
                    textContent: 'Se connecter',
                    type: 'submit'
                }
            ]

            this.form = {
                id: 'login-form'
            }
        }

        const loginMain = document.getElementById('login-main')
        loginMain.innerHTML += customForm(this.fields, this.form, this.buttons)


        document.addEventListener('submit', (event) => {
            event.preventDefault()
            if(event.target.matches('#login-form')){
                console.log('submitted', this.userInputs)
                event.target.reset()
            }
        })

        document.addEventListener('input', (event) => {
            if(event.target.matches('#email')){
                this.onInput(event, "email")
            } else if (event.target.matches('#password')){
                this.onInput(event, "password")
            } else {
                console.log('click event')
            }
        })
    }

    onInput(event, name){
        this.userInputs[name] = event.target.value
        console.log('this.userInputs', this.userInputs)
    }


}