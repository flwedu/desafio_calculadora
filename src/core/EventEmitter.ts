export interface IEventEmitter {
    events: Map<string, Function[]>,
    on: Function,
    emit: Function
}

export const EventEmitter: IEventEmitter = {

    events: new Map<string, Function[]>(),

    on: (eventName: string, fn: Function) => {

        if (!EventEmitter.events.has(eventName)) {
            EventEmitter.events.set(eventName, Array.of());
        }

        EventEmitter.events.get(eventName)?.push(fn);
    },

    emit: (eventName: string, value: any) => {

        EventEmitter.events.get(eventName)?.forEach(fn => fn(value));
    }
}