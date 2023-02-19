/// <reference types="vite/client" />

//  .ts ファイルから .vue ファイルを import する際に、そのモジュールが Vue コンポーネントであることを TypeScript に伝える
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
