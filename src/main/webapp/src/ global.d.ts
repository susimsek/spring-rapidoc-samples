declare namespace JSX {
  interface IntrinsicElements {
    'rapi-doc': RapiDocAttributes;
  }

  interface RapiDocAttributes extends React.HTMLAttributes<HTMLElement> {
    'spec-url'?: string;
    theme?: string;
    'show-header'?: string;
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
    'show-info'?: string;
    'show-components'?: string;
    'allow-authentication'?: string;
    'show-method-in-nav-bar'?: string;
    'use-path-in-nav-bar'?: string;
    'default-schema-tab'?: string;
    'regular-font-size'?: string;
    'mono-font-size'?: string;
    'max-containers'?: string;
  }
}
