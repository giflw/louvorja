export function toString() {
  return "module @louvorja/shared";
}

export {
  Dispatcher,
  Event,
  Handler,
  DefaultHandler,
  HandlerLoader,
  DefaultHandlerLoader,
} from "./events";

export * as logging from "./_logging.js";
export * as modules from "./_modules.js";
export * from "./_platform.js";
export * as prefix from "./_prefix.js";
export * as specs from "./_specs.js";
export * as strings from "./_strings.js";
export * as theme from "./_theme.js";
export * from "./_config.js";