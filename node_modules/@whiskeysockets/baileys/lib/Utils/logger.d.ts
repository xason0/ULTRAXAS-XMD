export interface ILogger {
    level: string;
    child(obj: Record<string, unknown>): ILogger;
    trace(obj: unknown, msg?: string): any;
    debug(obj: unknown, msg?: string): any;
    info(obj: unknown, msg?: string): any;
    warn(obj: unknown, msg?: string): any;
    error(obj: unknown, msg?: string): any;
}
declare const _default: import("pino").Logger<never, boolean>;
export default _default;
