import Rx from 'rxjs/Rx';

class MsgService {

    constructor() {
        "ngInject";
        this.subjects = new Map();
    }

    subscribe(subscription ,handler) {
        if (!this.subjects.has(subscription)) {
            this.subjects.set(subscription ,new Rx.Subject())
        }
        return this.subjects.get(subscription).subscribe(handler);
    }

    unsubscribe(subscription) {
        console.log('unsubscribe success');
        let subject = this.subjects.get(subscription);
        subject.unsubscribe();
        this.subjects.delete(subject);
    }

    broadcast(subscription ,msg) {
        console.log('broadcast success');
        this.subjects.get(subscription).next(msg);
    }


}

export default MsgService;