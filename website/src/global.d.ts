/// <reference types="next" />
/// <reference types="next/image-types/global" />

// Global CSS module type declarations
declare module '*.css' {
  const styles: { readonly [key: string]: string };
  export default styles;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const styles: { readonly [key: string]: string };
  export default styles;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.sass' {
  const styles: { readonly [key: string]: string };
  export default styles;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
