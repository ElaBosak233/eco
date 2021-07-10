export function loadModules() {
    const context = import.meta.globEager("./*.ts") as any;

    const modules: any = {};

    Object.keys(context).forEach((key: string) => {
        if (key === "./index.ts") return;
        modules[key.replace(/(\.\/|\.ts)/g, '')] = context[key].default
    });

    return { context, modules }
}

export const { context, modules } = loadModules();