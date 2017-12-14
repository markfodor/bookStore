import {ImageLinks} from './imagelinks.model';
import {IndustryIdentifiers} from './industryidentifiers.model';
import {Dimensions} from './dimensions.model';

export class VolumeInfo {
    constructor(public title: string,
                public subtitle: string,
                public authors: string[],
                public publisher: string,
                public publishedDate: string,
                public description: string,
                public industryIdentifiers: IndustryIdentifiers[],
                public pageCount: number,
                public dimensions: Dimensions,
                public printType: string,
                public mainCategory: string,
                public categories: string[],
                public averageRating: number,
                public ratingsCount: number,
                public contentVersion: string,
                public imageLinks: ImageLinks,
                public language: string,
                public previewLink: string,
                public infoLink: string,
                public canonicalVolumeLink: string) {
    }
}
