// A page corresponds to a set of segments accesible using a deep URL
export class Page {
  // ID used for routing
  id: string;
  // Name of the page (for the menu)
  name: string;
  // Parent page (if any, for the menu)
  parent?: string;
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

// A PageLink has a page and the link to the previous and next ones
export class PageLink extends Page {
  next: string;
  previous: string;
}
