declare namespace NodeJS {
    export interface ProcessEnv {
      PORT: string;
      DB_URL: string;
    }
  }

type URL_request = {
  url_full: string;
}
type URL_request_redirect = {
  url_short: string;
}

type testPing = {
  result:number
}

type url = {
  url_full: string;
  id: number;
  url_short: string;
  Create_to: Date;
  Use: number;
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
