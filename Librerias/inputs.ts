import { input, confirm, Separator, select, number } from '@inquirer/prompts';

type Choice<Value> = {
    value: Value;
    name?: string;
    description?: string;
    short?: string;
    disabled?: boolean | string;
};


// Estas son funciones

export const inputQuestion = async (question: string, predeterminado?: string): Promise<string> => { // export sirve para acceder a otras carpetas
    if (predeterminado != undefined) {
        return await input({ message: question, default: predeterminado, prefill: process.env.NODE_ENV == 'PRO' ? 'editable' : 'tab' })
    } else {
        return await input({ message: question })
    }
}

export const inputNumber = async (question: string, predeterminado?: number, step: number = 0.01): Promise<number | undefined> => {
    if (predeterminado != undefined){
        return await number({ message: question, default: predeterminado, step })
    } else {
        return await number({ message: question, step});
    }

}

export const menuOptions = async (options: (Separator | Choice <any>)[], question: string): Promise<number> => {
    return await select({ message: question, choices: options });

}

export const inputYesNo = async (question: string): Promise<boolean> => {
    return await confirm({ message: question });
}

export const showTitle = (title: string, character: string = '=', offset: number = 4): void => {

    const longitud: number = title.length + offset;


    console.log(character.repeat(longitud));
    console.log(`${character} ${title} ${character}`);
    console.log(character.repeat(longitud));
}
