interface Ismartphone{
    creditoDiPartenza:number;
    costoPerSms:number;
    smsInviati:number;
    ricarica:number;
    getRicarica(a:number):number;
    getInviaSms(a:number):number;
}


class FirstUser implements Ismartphone{
    creditoDiPartenza: number = 10;
    costoPerSms: number = 0.10;
    smsInviati: number;
    ricarica: number;
    creditoAttuale:number;

    constructor(){
        this.smsInviati = 0
        this.ricarica = 0
        this.creditoAttuale =  this.creditoDiPartenza
    }


    getRicarica(a: number):number{
        this.creditoAttuale = this.creditoAttuale + a
        return this.creditoAttuale

    }

    getInviaSms(a: number):number{
        this.creditoAttuale = this.creditoAttuale - (this.costoPerSms*a)
        this.smsInviati = this.smsInviati + a
        return this.creditoAttuale
    }



}

