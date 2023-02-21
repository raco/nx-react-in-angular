import { inject, Injectable, Injector } from '@angular/core';
import {
  PropsWithChildren,
  createContext,
  useContext,
  ComponentProps,
  createElement,
  ElementType,
} from 'react';
import { createRoot, Root } from 'react-dom/client';

const InjectorCtx = createContext<Injector | null>(null);

export function NgContext(props: PropsWithChildren<{ injector: Injector }>) {
  return createElement(InjectorCtx.Provider, {
    children: props.children,
    value: props.injector,
  });
}

export function useInjector(): Injector {
  const injector = useContext(InjectorCtx);

  if (!injector) {
    throw new Error('Missing NgContext');
  }

  return injector;
}

// ... THE CONTEXT CODE IS ABOVE ...

@Injectable({ providedIn: 'root' })
export class NgReact {
  injector = inject(Injector);

  createRoot(host: HTMLElement) {
    return createRoot(host);
  }

  render<Comp extends ElementType>(
    root: Root,
    Comp: Comp,
    compProps?: ComponentProps<Comp>
  ) {
    root.render(
      createElement(
        NgContext,
        {
          injector: this.injector,
        },
        createElement(Comp, compProps)
      )
    );
  }
}
