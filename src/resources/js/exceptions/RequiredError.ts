export class RequiredError extends Error {
    constructor(message?: string) {
        super(message ?? '必須エラー');
    }
}
