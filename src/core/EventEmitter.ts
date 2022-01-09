export const EventEmitter = {
    events: new Map<string, Function[]>(),

    on: (topic: string, fn: Function) => {
        let presentFns = EventEmitter.events.get(topic);

        if (EventEmitter.events.has(topic)) {
            //@ts-ignore
            EventEmitter.events.set(topic, [...presentFns, fn]);
        }
        return EventEmitter.events.set(topic, [fn]);
    },

    emit: (topic: string, data: any) => {
        const listeners = EventEmitter.events.get(topic);
        if (Array.isArray(listeners) && listeners.length) {
            listeners.forEach((event) => event(data));
        }
    },
};