
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model URLs
 * 
 */
export type URLs = $Result.DefaultSelection<Prisma.$URLsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more URLs
 * const uRLs = await prisma.uRLs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more URLs
   * const uRLs = await prisma.uRLs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.uRLs`: Exposes CRUD operations for the **URLs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more URLs
    * const uRLs = await prisma.uRLs.findMany()
    * ```
    */
  get uRLs(): Prisma.URLsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    URLs: 'URLs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "uRLs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      URLs: {
        payload: Prisma.$URLsPayload<ExtArgs>
        fields: Prisma.URLsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.URLsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URLsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.URLsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URLsPayload>
          }
          findFirst: {
            args: Prisma.URLsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URLsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.URLsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URLsPayload>
          }
          findMany: {
            args: Prisma.URLsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URLsPayload>[]
          }
          create: {
            args: Prisma.URLsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URLsPayload>
          }
          createMany: {
            args: Prisma.URLsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.URLsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URLsPayload>[]
          }
          delete: {
            args: Prisma.URLsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URLsPayload>
          }
          update: {
            args: Prisma.URLsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URLsPayload>
          }
          deleteMany: {
            args: Prisma.URLsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.URLsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.URLsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URLsPayload>[]
          }
          upsert: {
            args: Prisma.URLsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URLsPayload>
          }
          aggregate: {
            args: Prisma.URLsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateURLs>
          }
          groupBy: {
            args: Prisma.URLsGroupByArgs<ExtArgs>
            result: $Utils.Optional<URLsGroupByOutputType>[]
          }
          count: {
            args: Prisma.URLsCountArgs<ExtArgs>
            result: $Utils.Optional<URLsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    uRLs?: URLsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model URLs
   */

  export type AggregateURLs = {
    _count: URLsCountAggregateOutputType | null
    _avg: URLsAvgAggregateOutputType | null
    _sum: URLsSumAggregateOutputType | null
    _min: URLsMinAggregateOutputType | null
    _max: URLsMaxAggregateOutputType | null
  }

  export type URLsAvgAggregateOutputType = {
    id: number | null
    Use: number | null
  }

  export type URLsSumAggregateOutputType = {
    id: number | null
    Use: number | null
  }

  export type URLsMinAggregateOutputType = {
    id: number | null
    url_full: string | null
    url_short: string | null
    Create_to: Date | null
    Use: number | null
  }

  export type URLsMaxAggregateOutputType = {
    id: number | null
    url_full: string | null
    url_short: string | null
    Create_to: Date | null
    Use: number | null
  }

  export type URLsCountAggregateOutputType = {
    id: number
    url_full: number
    url_short: number
    Create_to: number
    Use: number
    _all: number
  }


  export type URLsAvgAggregateInputType = {
    id?: true
    Use?: true
  }

  export type URLsSumAggregateInputType = {
    id?: true
    Use?: true
  }

  export type URLsMinAggregateInputType = {
    id?: true
    url_full?: true
    url_short?: true
    Create_to?: true
    Use?: true
  }

  export type URLsMaxAggregateInputType = {
    id?: true
    url_full?: true
    url_short?: true
    Create_to?: true
    Use?: true
  }

  export type URLsCountAggregateInputType = {
    id?: true
    url_full?: true
    url_short?: true
    Create_to?: true
    Use?: true
    _all?: true
  }

  export type URLsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which URLs to aggregate.
     */
    where?: URLsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of URLs to fetch.
     */
    orderBy?: URLsOrderByWithRelationInput | URLsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: URLsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` URLs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` URLs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned URLs
    **/
    _count?: true | URLsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: URLsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: URLsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: URLsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: URLsMaxAggregateInputType
  }

  export type GetURLsAggregateType<T extends URLsAggregateArgs> = {
        [P in keyof T & keyof AggregateURLs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateURLs[P]>
      : GetScalarType<T[P], AggregateURLs[P]>
  }




  export type URLsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: URLsWhereInput
    orderBy?: URLsOrderByWithAggregationInput | URLsOrderByWithAggregationInput[]
    by: URLsScalarFieldEnum[] | URLsScalarFieldEnum
    having?: URLsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: URLsCountAggregateInputType | true
    _avg?: URLsAvgAggregateInputType
    _sum?: URLsSumAggregateInputType
    _min?: URLsMinAggregateInputType
    _max?: URLsMaxAggregateInputType
  }

  export type URLsGroupByOutputType = {
    id: number
    url_full: string
    url_short: string
    Create_to: Date
    Use: number
    _count: URLsCountAggregateOutputType | null
    _avg: URLsAvgAggregateOutputType | null
    _sum: URLsSumAggregateOutputType | null
    _min: URLsMinAggregateOutputType | null
    _max: URLsMaxAggregateOutputType | null
  }

  type GetURLsGroupByPayload<T extends URLsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<URLsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof URLsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], URLsGroupByOutputType[P]>
            : GetScalarType<T[P], URLsGroupByOutputType[P]>
        }
      >
    >


  export type URLsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_full?: boolean
    url_short?: boolean
    Create_to?: boolean
    Use?: boolean
  }, ExtArgs["result"]["uRLs"]>

  export type URLsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_full?: boolean
    url_short?: boolean
    Create_to?: boolean
    Use?: boolean
  }, ExtArgs["result"]["uRLs"]>

  export type URLsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_full?: boolean
    url_short?: boolean
    Create_to?: boolean
    Use?: boolean
  }, ExtArgs["result"]["uRLs"]>

  export type URLsSelectScalar = {
    id?: boolean
    url_full?: boolean
    url_short?: boolean
    Create_to?: boolean
    Use?: boolean
  }

  export type URLsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url_full" | "url_short" | "Create_to" | "Use", ExtArgs["result"]["uRLs"]>

  export type $URLsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "URLs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url_full: string
      url_short: string
      Create_to: Date
      Use: number
    }, ExtArgs["result"]["uRLs"]>
    composites: {}
  }

  type URLsGetPayload<S extends boolean | null | undefined | URLsDefaultArgs> = $Result.GetResult<Prisma.$URLsPayload, S>

  type URLsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<URLsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: URLsCountAggregateInputType | true
    }

  export interface URLsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['URLs'], meta: { name: 'URLs' } }
    /**
     * Find zero or one URLs that matches the filter.
     * @param {URLsFindUniqueArgs} args - Arguments to find a URLs
     * @example
     * // Get one URLs
     * const uRLs = await prisma.uRLs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends URLsFindUniqueArgs>(args: SelectSubset<T, URLsFindUniqueArgs<ExtArgs>>): Prisma__URLsClient<$Result.GetResult<Prisma.$URLsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one URLs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {URLsFindUniqueOrThrowArgs} args - Arguments to find a URLs
     * @example
     * // Get one URLs
     * const uRLs = await prisma.uRLs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends URLsFindUniqueOrThrowArgs>(args: SelectSubset<T, URLsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__URLsClient<$Result.GetResult<Prisma.$URLsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first URLs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URLsFindFirstArgs} args - Arguments to find a URLs
     * @example
     * // Get one URLs
     * const uRLs = await prisma.uRLs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends URLsFindFirstArgs>(args?: SelectSubset<T, URLsFindFirstArgs<ExtArgs>>): Prisma__URLsClient<$Result.GetResult<Prisma.$URLsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first URLs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URLsFindFirstOrThrowArgs} args - Arguments to find a URLs
     * @example
     * // Get one URLs
     * const uRLs = await prisma.uRLs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends URLsFindFirstOrThrowArgs>(args?: SelectSubset<T, URLsFindFirstOrThrowArgs<ExtArgs>>): Prisma__URLsClient<$Result.GetResult<Prisma.$URLsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more URLs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URLsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all URLs
     * const uRLs = await prisma.uRLs.findMany()
     * 
     * // Get first 10 URLs
     * const uRLs = await prisma.uRLs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uRLsWithIdOnly = await prisma.uRLs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends URLsFindManyArgs>(args?: SelectSubset<T, URLsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$URLsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a URLs.
     * @param {URLsCreateArgs} args - Arguments to create a URLs.
     * @example
     * // Create one URLs
     * const URLs = await prisma.uRLs.create({
     *   data: {
     *     // ... data to create a URLs
     *   }
     * })
     * 
     */
    create<T extends URLsCreateArgs>(args: SelectSubset<T, URLsCreateArgs<ExtArgs>>): Prisma__URLsClient<$Result.GetResult<Prisma.$URLsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many URLs.
     * @param {URLsCreateManyArgs} args - Arguments to create many URLs.
     * @example
     * // Create many URLs
     * const uRLs = await prisma.uRLs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends URLsCreateManyArgs>(args?: SelectSubset<T, URLsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many URLs and returns the data saved in the database.
     * @param {URLsCreateManyAndReturnArgs} args - Arguments to create many URLs.
     * @example
     * // Create many URLs
     * const uRLs = await prisma.uRLs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many URLs and only return the `id`
     * const uRLsWithIdOnly = await prisma.uRLs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends URLsCreateManyAndReturnArgs>(args?: SelectSubset<T, URLsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$URLsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a URLs.
     * @param {URLsDeleteArgs} args - Arguments to delete one URLs.
     * @example
     * // Delete one URLs
     * const URLs = await prisma.uRLs.delete({
     *   where: {
     *     // ... filter to delete one URLs
     *   }
     * })
     * 
     */
    delete<T extends URLsDeleteArgs>(args: SelectSubset<T, URLsDeleteArgs<ExtArgs>>): Prisma__URLsClient<$Result.GetResult<Prisma.$URLsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one URLs.
     * @param {URLsUpdateArgs} args - Arguments to update one URLs.
     * @example
     * // Update one URLs
     * const uRLs = await prisma.uRLs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends URLsUpdateArgs>(args: SelectSubset<T, URLsUpdateArgs<ExtArgs>>): Prisma__URLsClient<$Result.GetResult<Prisma.$URLsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more URLs.
     * @param {URLsDeleteManyArgs} args - Arguments to filter URLs to delete.
     * @example
     * // Delete a few URLs
     * const { count } = await prisma.uRLs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends URLsDeleteManyArgs>(args?: SelectSubset<T, URLsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more URLs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URLsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many URLs
     * const uRLs = await prisma.uRLs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends URLsUpdateManyArgs>(args: SelectSubset<T, URLsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more URLs and returns the data updated in the database.
     * @param {URLsUpdateManyAndReturnArgs} args - Arguments to update many URLs.
     * @example
     * // Update many URLs
     * const uRLs = await prisma.uRLs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more URLs and only return the `id`
     * const uRLsWithIdOnly = await prisma.uRLs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends URLsUpdateManyAndReturnArgs>(args: SelectSubset<T, URLsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$URLsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one URLs.
     * @param {URLsUpsertArgs} args - Arguments to update or create a URLs.
     * @example
     * // Update or create a URLs
     * const uRLs = await prisma.uRLs.upsert({
     *   create: {
     *     // ... data to create a URLs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the URLs we want to update
     *   }
     * })
     */
    upsert<T extends URLsUpsertArgs>(args: SelectSubset<T, URLsUpsertArgs<ExtArgs>>): Prisma__URLsClient<$Result.GetResult<Prisma.$URLsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of URLs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URLsCountArgs} args - Arguments to filter URLs to count.
     * @example
     * // Count the number of URLs
     * const count = await prisma.uRLs.count({
     *   where: {
     *     // ... the filter for the URLs we want to count
     *   }
     * })
    **/
    count<T extends URLsCountArgs>(
      args?: Subset<T, URLsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], URLsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a URLs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URLsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends URLsAggregateArgs>(args: Subset<T, URLsAggregateArgs>): Prisma.PrismaPromise<GetURLsAggregateType<T>>

    /**
     * Group by URLs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URLsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends URLsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: URLsGroupByArgs['orderBy'] }
        : { orderBy?: URLsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, URLsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetURLsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the URLs model
   */
  readonly fields: URLsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for URLs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__URLsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the URLs model
   */
  interface URLsFieldRefs {
    readonly id: FieldRef<"URLs", 'Int'>
    readonly url_full: FieldRef<"URLs", 'String'>
    readonly url_short: FieldRef<"URLs", 'String'>
    readonly Create_to: FieldRef<"URLs", 'DateTime'>
    readonly Use: FieldRef<"URLs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * URLs findUnique
   */
  export type URLsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
    /**
     * Filter, which URLs to fetch.
     */
    where: URLsWhereUniqueInput
  }

  /**
   * URLs findUniqueOrThrow
   */
  export type URLsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
    /**
     * Filter, which URLs to fetch.
     */
    where: URLsWhereUniqueInput
  }

  /**
   * URLs findFirst
   */
  export type URLsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
    /**
     * Filter, which URLs to fetch.
     */
    where?: URLsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of URLs to fetch.
     */
    orderBy?: URLsOrderByWithRelationInput | URLsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for URLs.
     */
    cursor?: URLsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` URLs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` URLs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of URLs.
     */
    distinct?: URLsScalarFieldEnum | URLsScalarFieldEnum[]
  }

  /**
   * URLs findFirstOrThrow
   */
  export type URLsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
    /**
     * Filter, which URLs to fetch.
     */
    where?: URLsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of URLs to fetch.
     */
    orderBy?: URLsOrderByWithRelationInput | URLsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for URLs.
     */
    cursor?: URLsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` URLs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` URLs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of URLs.
     */
    distinct?: URLsScalarFieldEnum | URLsScalarFieldEnum[]
  }

  /**
   * URLs findMany
   */
  export type URLsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
    /**
     * Filter, which URLs to fetch.
     */
    where?: URLsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of URLs to fetch.
     */
    orderBy?: URLsOrderByWithRelationInput | URLsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing URLs.
     */
    cursor?: URLsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` URLs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` URLs.
     */
    skip?: number
    distinct?: URLsScalarFieldEnum | URLsScalarFieldEnum[]
  }

  /**
   * URLs create
   */
  export type URLsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
    /**
     * The data needed to create a URLs.
     */
    data: XOR<URLsCreateInput, URLsUncheckedCreateInput>
  }

  /**
   * URLs createMany
   */
  export type URLsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many URLs.
     */
    data: URLsCreateManyInput | URLsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * URLs createManyAndReturn
   */
  export type URLsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
    /**
     * The data used to create many URLs.
     */
    data: URLsCreateManyInput | URLsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * URLs update
   */
  export type URLsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
    /**
     * The data needed to update a URLs.
     */
    data: XOR<URLsUpdateInput, URLsUncheckedUpdateInput>
    /**
     * Choose, which URLs to update.
     */
    where: URLsWhereUniqueInput
  }

  /**
   * URLs updateMany
   */
  export type URLsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update URLs.
     */
    data: XOR<URLsUpdateManyMutationInput, URLsUncheckedUpdateManyInput>
    /**
     * Filter which URLs to update
     */
    where?: URLsWhereInput
    /**
     * Limit how many URLs to update.
     */
    limit?: number
  }

  /**
   * URLs updateManyAndReturn
   */
  export type URLsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
    /**
     * The data used to update URLs.
     */
    data: XOR<URLsUpdateManyMutationInput, URLsUncheckedUpdateManyInput>
    /**
     * Filter which URLs to update
     */
    where?: URLsWhereInput
    /**
     * Limit how many URLs to update.
     */
    limit?: number
  }

  /**
   * URLs upsert
   */
  export type URLsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
    /**
     * The filter to search for the URLs to update in case it exists.
     */
    where: URLsWhereUniqueInput
    /**
     * In case the URLs found by the `where` argument doesn't exist, create a new URLs with this data.
     */
    create: XOR<URLsCreateInput, URLsUncheckedCreateInput>
    /**
     * In case the URLs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<URLsUpdateInput, URLsUncheckedUpdateInput>
  }

  /**
   * URLs delete
   */
  export type URLsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
    /**
     * Filter which URLs to delete.
     */
    where: URLsWhereUniqueInput
  }

  /**
   * URLs deleteMany
   */
  export type URLsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which URLs to delete
     */
    where?: URLsWhereInput
    /**
     * Limit how many URLs to delete.
     */
    limit?: number
  }

  /**
   * URLs without action
   */
  export type URLsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URLs
     */
    select?: URLsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the URLs
     */
    omit?: URLsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const URLsScalarFieldEnum: {
    id: 'id',
    url_full: 'url_full',
    url_short: 'url_short',
    Create_to: 'Create_to',
    Use: 'Use'
  };

  export type URLsScalarFieldEnum = (typeof URLsScalarFieldEnum)[keyof typeof URLsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type URLsWhereInput = {
    AND?: URLsWhereInput | URLsWhereInput[]
    OR?: URLsWhereInput[]
    NOT?: URLsWhereInput | URLsWhereInput[]
    id?: IntFilter<"URLs"> | number
    url_full?: StringFilter<"URLs"> | string
    url_short?: StringFilter<"URLs"> | string
    Create_to?: DateTimeFilter<"URLs"> | Date | string
    Use?: IntFilter<"URLs"> | number
  }

  export type URLsOrderByWithRelationInput = {
    id?: SortOrder
    url_full?: SortOrder
    url_short?: SortOrder
    Create_to?: SortOrder
    Use?: SortOrder
  }

  export type URLsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url_full?: string
    url_short?: string
    AND?: URLsWhereInput | URLsWhereInput[]
    OR?: URLsWhereInput[]
    NOT?: URLsWhereInput | URLsWhereInput[]
    Create_to?: DateTimeFilter<"URLs"> | Date | string
    Use?: IntFilter<"URLs"> | number
  }, "id" | "url_full" | "url_short">

  export type URLsOrderByWithAggregationInput = {
    id?: SortOrder
    url_full?: SortOrder
    url_short?: SortOrder
    Create_to?: SortOrder
    Use?: SortOrder
    _count?: URLsCountOrderByAggregateInput
    _avg?: URLsAvgOrderByAggregateInput
    _max?: URLsMaxOrderByAggregateInput
    _min?: URLsMinOrderByAggregateInput
    _sum?: URLsSumOrderByAggregateInput
  }

  export type URLsScalarWhereWithAggregatesInput = {
    AND?: URLsScalarWhereWithAggregatesInput | URLsScalarWhereWithAggregatesInput[]
    OR?: URLsScalarWhereWithAggregatesInput[]
    NOT?: URLsScalarWhereWithAggregatesInput | URLsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"URLs"> | number
    url_full?: StringWithAggregatesFilter<"URLs"> | string
    url_short?: StringWithAggregatesFilter<"URLs"> | string
    Create_to?: DateTimeWithAggregatesFilter<"URLs"> | Date | string
    Use?: IntWithAggregatesFilter<"URLs"> | number
  }

  export type URLsCreateInput = {
    url_full: string
    url_short: string
    Create_to?: Date | string
    Use?: number
  }

  export type URLsUncheckedCreateInput = {
    id?: number
    url_full: string
    url_short: string
    Create_to?: Date | string
    Use?: number
  }

  export type URLsUpdateInput = {
    url_full?: StringFieldUpdateOperationsInput | string
    url_short?: StringFieldUpdateOperationsInput | string
    Create_to?: DateTimeFieldUpdateOperationsInput | Date | string
    Use?: IntFieldUpdateOperationsInput | number
  }

  export type URLsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_full?: StringFieldUpdateOperationsInput | string
    url_short?: StringFieldUpdateOperationsInput | string
    Create_to?: DateTimeFieldUpdateOperationsInput | Date | string
    Use?: IntFieldUpdateOperationsInput | number
  }

  export type URLsCreateManyInput = {
    id?: number
    url_full: string
    url_short: string
    Create_to?: Date | string
    Use?: number
  }

  export type URLsUpdateManyMutationInput = {
    url_full?: StringFieldUpdateOperationsInput | string
    url_short?: StringFieldUpdateOperationsInput | string
    Create_to?: DateTimeFieldUpdateOperationsInput | Date | string
    Use?: IntFieldUpdateOperationsInput | number
  }

  export type URLsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_full?: StringFieldUpdateOperationsInput | string
    url_short?: StringFieldUpdateOperationsInput | string
    Create_to?: DateTimeFieldUpdateOperationsInput | Date | string
    Use?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type URLsCountOrderByAggregateInput = {
    id?: SortOrder
    url_full?: SortOrder
    url_short?: SortOrder
    Create_to?: SortOrder
    Use?: SortOrder
  }

  export type URLsAvgOrderByAggregateInput = {
    id?: SortOrder
    Use?: SortOrder
  }

  export type URLsMaxOrderByAggregateInput = {
    id?: SortOrder
    url_full?: SortOrder
    url_short?: SortOrder
    Create_to?: SortOrder
    Use?: SortOrder
  }

  export type URLsMinOrderByAggregateInput = {
    id?: SortOrder
    url_full?: SortOrder
    url_short?: SortOrder
    Create_to?: SortOrder
    Use?: SortOrder
  }

  export type URLsSumOrderByAggregateInput = {
    id?: SortOrder
    Use?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}