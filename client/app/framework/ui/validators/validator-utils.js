class ValidatorUtils {

    constructor() {
        this.messages = new Map();
        this.messages.set("required" , {"required" : "its Required !!!"});
    }

    addMessages(validatorName ,messages) {
        this.messages.set(validatorName ,messages);
    }

    getMessages(validatorName) {
        return this.messages.get(validatorName);
    }

}

export default ValidatorUtils;