import { ImageLike } from '../core/types';

type ImagePatternRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat'

export interface PatternObjectBase {
    // type is now unused, so make it optional
    type?: 'pattern'

    image: ImageLike | string

    x?: number
    y?: number
    rotation?: number
    scaleX?: number
    scaleY?: number
}

export interface ImagePatternObject extends PatternObjectBase {
    repeat?: ImagePatternRepeat
}

export interface InnerImagePatternObject extends ImagePatternObject {
    // Cached image. Which is created in the canvas painter.
    __image?: ImageLike
}

export interface SVGPatternObject extends PatternObjectBase {
    // id is now only used by SVG renderer
    id?: number
    /**
     * svg element can only be used in svg renderer currently.
     * svgWidth, svgHeight defines width and height used for pattern.
     */
    svgElement?: SVGElement
    svgWidth?: number
    svgHeight?: number
}

export type PatternObject = ImagePatternObject | SVGPatternObject

class Pattern {

    type: 'pattern'

    image: ImageLike | string
    /**
     * svg element can only be used in svg renderer currently.
     */
    svgElement: SVGElement

    repeat: CanvasPatternRepeat

    x: number
    y: number
    rotation: number
    scaleX: number
    scaleY: number

    constructor(image: ImageLike | string, repeat: CanvasPatternRepeat) {
        // Should do nothing more in this constructor. Because gradient can be
        // declard by `color: {image: ...}`, where this constructor will not be called.
        this.image = image;
        this.repeat = repeat;

        this.x = 0;
        this.y = 0;
        this.rotation = 0;
        this.scaleX = 1;
        this.scaleY = 1;
    }
}

export default Pattern;