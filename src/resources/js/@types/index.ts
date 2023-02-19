// REST API スキーマ定義
export * from './api/schemas';
// domain 定義
export * from './domains';

// typescript 4.5 の Awaited自作
export type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T
