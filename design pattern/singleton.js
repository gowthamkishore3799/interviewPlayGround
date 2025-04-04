var DatabaseConnect = /** @class */ (function () {
    function DatabaseConnect() {
    }
    DatabaseConnect.getIntance = function () {
        if (!this.instance) {
            this.instance = new DatabaseConnect();
        }
        return this.instance;
    };
    DatabaseConnect.prototype.connect = function () {
        return "1";
    };
    return DatabaseConnect;
}());
var obj = DatabaseConnect.getIntance();
obj.connect();
