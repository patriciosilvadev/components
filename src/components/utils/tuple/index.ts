export default function tuple<T extends string|number,V extends T[]>(...v: V): Readonly<V> {
    return Object.freeze(v) as any
}