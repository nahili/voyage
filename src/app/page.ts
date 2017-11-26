// A page corresponds to a set of segments accesible using a deep URL
export class Page {
  // ID used for routing
  id: string;
  // List of segments
  segments: Array<Segment>;
}

// Type of a segment
export enum SegmentType {
  // Plain text
  Text,
  // Plain image
  Image,
  // An image and then Text
  ImageText,
  // Text and then an Image
  TextImage,
  // A gallery of images
  Gallery
}

// A segment is part of a page, that contains a layout with text, images, etc
export class Segment {
  // Type of the segment
  type: SegmentType;
  // Height of the element
  height: string;
  // Width of the element
  width: string;
  // URL or ID of the image to show
  image: string;
  // Width (CSS) of the image
  imageWidth: string;
  // Text
  text: string;

  // Create a segment of this type, of a text type by default
  constructor ( type: SegmentType = SegmentType.Text) {
    this.type = type;
  }
}
