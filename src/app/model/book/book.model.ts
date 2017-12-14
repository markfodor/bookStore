import {VolumeInfo} from './volumeinfo.model';

export class Book {
    constructor(public kind: string,
                public id: string,
                public etag: string,
                public selfLink: string,
                public volumeInfo: VolumeInfo) {
    }
}
