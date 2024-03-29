import { Subject } from "rxjs";

export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id: 2,
          name: 'télé',
          status: 'allumer'
        },
        {
          id: 3,
          name: 'ordinateur',
          status: 'éteint'
        }
    ];

    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
    }


    getAppareilById(id:number){
        const appareil = this.appareils.find(
            (appareilObject) => {
                return  appareilObject.id === id;
            }
        )
        return appareil;
    }

    switchOnAll() {
        for(let appareil of this.appareils){
            appareil.status = 'allumer'
        }
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for(let appareil of this.appareils){
            appareil.status = 'éteint'
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumer';
        this.emitAppareilSubject();
    }


    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject();
    }

}