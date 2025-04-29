declare namespace NodeJS {
    export interface ProcessEnv {
      PORT: string;
      DB_URL: string;
    }
  }

type URL_request = {
  url_full: string;
}

type testPing = {
  result:number
}


export class ErrorP extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    // Esta línea es importante para mantener el prototipo correcto
    Object.setPrototypeOf(this, ErrorP.prototype);
  }
}
