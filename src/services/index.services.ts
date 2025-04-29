import { nanoid } from "nanoid";
//aqui debemos procesar todos los datos y convertilos
//Ejemplo acortar la url, validar, etc

export function shortener(url:string):string {
    const shortId:string = nanoid(6)
    return shortId
}