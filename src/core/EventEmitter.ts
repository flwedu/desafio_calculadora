const EventEmitter = {

    events: new Map<string, Function[]>(),

    on(topic: string, fn: Function) {
        const presentFns = this.events.get(topic);

        if (this.events.has(topic)) {
            //@ts-ignore
            this.events.set(topic, [...presentFns, fn]);
        }
        return this.events.set(topic, [fn]);
    },

    emit(topic: string, data: any) {
        const listeners = this.events.get(topic);
        if (Array.isArray(listeners) && listeners.length) {
            listeners.forEach((event) => event(data));
        }
    }
};

export { EventEmitter }