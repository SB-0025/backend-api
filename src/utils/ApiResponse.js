class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode <400 
        this.data = data
        this.success = true
        this.message = message
    }
}