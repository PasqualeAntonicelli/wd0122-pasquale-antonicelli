var FirstUser = /** @class */ (function () {
    function FirstUser() {
        this.creditoDiPartenza = 10;
        this.costoPerSms = 0.10;
        this.smsInviati = 0;
        this.ricarica = 0;
        this.creditoAttuale = this.creditoDiPartenza;
    }
    FirstUser.prototype.getRicarica = function (a) {
        this.creditoAttuale = this.creditoAttuale + a;
        return this.creditoAttuale;
    };
    FirstUser.prototype.getInviaSms = function (a) {
        this.creditoAttuale = this.creditoAttuale - (this.costoPerSms * a);
        this.smsInviati = this.smsInviati + a;
        return this.creditoAttuale;
    };
    return FirstUser;
}());
