declare namespace JSX {
  interface IntrinsicElements {
    'rapi-doc': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'spec-url'?: string;
      theme?: string;
      'show-header'?: boolean;
      'render-style'?: string;
      'primary-color'?: string;
      'secondary-color'?: string;
      'nav-bg-color'?: string;
      'nav-text-color'?: string;
      'nav-hover-bg-color'?: string;
      'nav-accent-color'?: string;
      'bg-color'?: string;
      'text-color'?: string;
      'font-family'?: string;
      'heading-text'?: string;
      'show-info'?: boolean;
      'show-components'?: boolean;
      'allow-authentication'?: boolean;
      'show-method-in-nav-bar'?: string;
      'use-path-in-nav-bar'?: boolean;
      'default-schema-tab'?: string;
      'regular-font-size'?: string;
      'mono-font-size'?: string;
      'max-containers'?: number;
      style?: React.CSSProperties;
    };
  }
}
