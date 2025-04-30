import { nanoid } from "nanoid";
import { PrismaClient } from "../generated/prisma/index.js";
import { ErrorP, testPing, url } from "../types/env.d.js";
//aqui debemos procesar todos los datos y convertilos
//Ejemplo acortar la url, validar, etc
const prisma = new PrismaClient();

export const ping = async () => {
  const request_db: testPing[] = await prisma.$queryRawUnsafe(
    "SELECT 1 as result"
  );
  return request_db;
};

export const create_Url = async (url_full: string) => {
  try {
    const found = await prisma.uRLs.findMany({
      where: {
        url_full: url_full,
      },
    });
    if (found.length > 0) {
      throw new ErrorP("URL duplicada", 400);
    }
    const response_db = await prisma.uRLs.create({
      data: {
        url_full: url_full,
        url_short: nanoid(6),
      },
    });
    return response_db;
  } catch (error) {
    if (error instanceof ErrorP) throw error;
    throw new ErrorP("Error al crear URL", 500);
  }
};

export const found_Url = async (url_short: string) => {
  try {
    const url: url[] = await prisma.uRLs.findMany({
      where: {
        url_short: url_short,
      },
    });
    if (url.length <= 0) {
      throw new ErrorP("URL no existe", 400);
    }
    const url_full: string = url[0].url_full;
    await prisma.uRLs.update({
      where: {
        url_full: url_full,
      },
      data: {
        Use: {
          increment: 1,
        },
      },
    });
    return url_full;
  } catch (error) {
    if (error instanceof ErrorP) throw error;
    throw new ErrorP("Error al crear URL", 500);
  }
};
