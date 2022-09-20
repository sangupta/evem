/**
 * evem - EventTarget Emitter
 *
 * MIT License.
 * Copyright (c) 2022, Sandeep Gupta.
 *
 * Use of this source code is governed by a MIT style license
 * that can be found in LICENSE file in the code repository.
 */

/**
 * Internal EventTarget instance
 */
export const emitter = new EventTarget();

/**
 * Convenience function to add event handler.
 * 
 * @param name the event name
 * 
 * @param handler the event handler
 */
function on(name: string, handler: EventListenerOrEventListenerObject) {
    emitter.addEventListener(name, handler);
}

/**
 * Convenience function to add event handler that shall 
 * only fire once.
 * 
 * @param name the event name
 * 
 * @param handler the event handler
 */
function once(name: string, handler: EventListenerOrEventListenerObject) {
    emitter.addEventListener(name, handler, {
        once: true
    });
}

/**
 * Convenience function to remove event handler.
 * 
 * @param name the event name
 * 
 * @param handler the event handler
 */
function off(name: string, handler: EventListenerOrEventListenerObject) {
    emitter.removeEventListener(name, handler);
}

/**
 * Convenience function to dispatch/raise/emit a new event
 * with optional payload object.
 * 
 * @param name the event name
 * 
 * @param payload the optional payload to send along with event
 */
function emit(name: string, payload: object = {}) {
    const event = new CustomEvent(name, {
        detail: payload
    });
    emitter.dispatchEvent(event);
}

export const evem = {
    on: on,
    off: off,
    once: once,
    emit: emit
};
