import { Trein } from '../Trein/trein';
import { Station } from '../Station/station';
import { Inzet } from '../Inzet/inzet';

export class Game {

    constructor(
        private _id:number,
        private _trein: Trein,
        private _station: Station,
        private _inzetten : Inzet[]
    ) {}

    get id() : number {
        return this._id;
    }

    get trein() : Trein {
        return this._trein;
    }

    get station() : Station {
        return this._station;
    }

    get inzetten() : Inzet[] {
        return this._inzetten;
    }
}