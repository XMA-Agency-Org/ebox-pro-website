import type { FC, PropsWithChildren } from "react";

declare module "lenis/react" {
  interface ReactLenisProps {
    root?: boolean;
  }

  const ReactLenis: FC<PropsWithChildren<ReactLenisProps>>;
  export default ReactLenis;
}
