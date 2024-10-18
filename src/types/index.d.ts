//' is a TypeScript declaration that tells the TypeScript compiler how to handle imports for .png and .jpg image files
//' TypeScript, by default, does not know how to process these non-code files (e.g., images, stylesheets). Without these declarations, it would throw an error saying it cannot find the module because it does not understand how to handle image files.
declare module '*.png'
declare module '*.jpg'
