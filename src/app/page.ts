// A page corresponds to a set of segments accesible using a deep URL
export class Page {
  // ID used for routing
  id: string;
  // List of segments
  segments?: Array<Segment>;
}

// A segment is part of a page, that contains a layout with text, images, etc
export class Segment {
  // Height of the element
  height?: string;
  // Width of the element
  width?: string;
  // URL or ID of the image to show
  image?: string;
  // Width (CSS) of the image
  imageWidth?: string;
  // True if the picture is on the right
  imageRight?: boolean;
  // Text
  text?: string;
}
