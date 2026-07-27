
/**
 * Client
 */

import * as runtime from '@prisma/client/runtime/library'
import * as process from 'node:process'
import * as path from 'node:path'
    import { fileURLToPath } from 'node:url'

    const __dirname = path.dirname(fileURLToPath(import.meta.url))


export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Crop
 * 
 */
export type Crop = runtime.Types.Result.DefaultSelection<Prisma.$CropPayload>
/**
 * Model Yield
 * 
 */
export type Yield = runtime.Types.Result.DefaultSelection<Prisma.$YieldPayload>



/**
 * Create the Client
 */
const config: runtime.GetPrismaClientConfig = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client"
    },
    "output": {
      "value": "C:\\Users\\KAREN\\OneDrive\\Desktop\\studio-workspace\\agri-homestead-next\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\KAREN\\OneDrive\\Desktop\\studio-workspace\\agri-homestead-next\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Crop {\n  id        Int      @id @default(autoincrement())\n  name      String\n  growth    String\n  createdAt DateTime @default(now())\n}\n\nmodel Yield {\n  id        Int      @id @default(autoincrement())\n  amount    Float\n  createdAt DateTime @default(now())\n}\n",
  "inlineSchemaHash": "209c9d29f8ee93ffdaaa83a0996feb3079aaf075d422780e086da691006819f1",
  "copyEngine": true,
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "dirname": ""
}
config.dirname = __dirname

config.runtimeDataModel = JSON.parse("{\"models\":{\"Crop\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"growth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Yield\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
config.engineWasm = undefined
config.compilerWasm = undefined



// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node")
path.join(process.cwd(), "generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma")
path.join(process.cwd(), "generated/prisma/schema.prisma")


interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Crops
   * const crops = await prisma.crop.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  new <
    ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  >(options?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>): PrismaClient<ClientOptions, U, ExtArgs>
}

/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Crops
 * const crops = await prisma.crop.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export interface PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): runtime.Types.Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): runtime.Types.Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): runtime.Types.Utils.JsPromise<R>


  $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.crop`: Exposes CRUD operations for the **Crop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crops
    * const crops = await prisma.crop.findMany()
    * ```
    */
  get crop(): Prisma.CropDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.yield`: Exposes CRUD operations for the **Yield** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Yields
    * const yields = await prisma.yield.findMany()
    * ```
    */
  get yield(): Prisma.YieldDelegate<ExtArgs, ClientOptions>;
}

export const PrismaClient = runtime.getPrismaClient(config) as unknown as PrismaClientConstructor

export namespace Prisma {
  export type DMMF = typeof runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Validator
   */
  export const validator = runtime.Public.validator

  /**
   * Prisma Errors
   */

  export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError

  export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError

  export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError

  export const PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export type PrismaClientInitializationError = runtime.PrismaClientInitializationError

  export const PrismaClientValidationError = runtime.PrismaClientValidationError
  export type PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export const sql = runtime.sqltag
  export const empty = runtime.empty
  export const join = runtime.join
  export const raw = runtime.raw
  export const Sql = runtime.Sql
  export type Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export const Decimal = runtime.Decimal
  export type Decimal = runtime.Decimal

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
  export type Extension = runtime.Types.Extensions.UserArgs
  export const getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>
  export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>
  export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>
  export type Exact<A, W> = runtime.Types.Public.Exact<A, W>

  export type PrismaVersion = {
    client: string
    engine: string
  }

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export const prismaVersion: PrismaVersion = {
    client: "6.6.0",
    engine: "f676762280b54cd07c770017ed3711ddde35f37a"
  }

  /**
   * Utility Types
   */


  export type JsonObject = runtime.JsonObject
  export type JsonArray = runtime.JsonArray
  export type JsonValue = runtime.JsonValue
  export type InputJsonObject = runtime.InputJsonObject
  export type InputJsonArray = runtime.InputJsonArray
  export type InputJsonValue = runtime.InputJsonValue

  export const NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull as (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull),
    JsonNull: runtime.objectEnumValues.classes.JsonNull as (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull),
    AnyNull: runtime.objectEnumValues.classes.AnyNull as (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull),
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull = runtime.objectEnumValues.instances.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull = runtime.objectEnumValues.instances.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull = runtime.objectEnumValues.instances.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

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
  export type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  export type Boolean = True | False

  export type True = 1

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


  export const ModelName = {
    Crop: 'Crop',
    Yield: 'Yield'
  } as const

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export interface TypeMapCb<ClientOptions = {}> extends runtime.Types.Utils.Fn<{extArgs: runtime.Types.Extensions.InternalArgs }, runtime.Types.Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "crop" | "yield"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Crop: {
        payload: Prisma.$CropPayload<ExtArgs>
        fields: Prisma.CropFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CropFindUniqueArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$CropPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CropFindUniqueOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$CropPayload>
          }
          findFirst: {
            args: Prisma.CropFindFirstArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$CropPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CropFindFirstOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$CropPayload>
          }
          findMany: {
            args: Prisma.CropFindManyArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          create: {
            args: Prisma.CropCreateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$CropPayload>
          }
          createMany: {
            args: Prisma.CropCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CropCreateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          delete: {
            args: Prisma.CropDeleteArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$CropPayload>
          }
          update: {
            args: Prisma.CropUpdateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$CropPayload>
          }
          deleteMany: {
            args: Prisma.CropDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CropUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CropUpdateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          upsert: {
            args: Prisma.CropUpsertArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$CropPayload>
          }
          aggregate: {
            args: Prisma.CropAggregateArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<AggregateCrop>
          }
          groupBy: {
            args: Prisma.CropGroupByArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<CropGroupByOutputType>[]
          }
          count: {
            args: Prisma.CropCountArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<CropCountAggregateOutputType> | number
          }
        }
      }
      Yield: {
        payload: Prisma.$YieldPayload<ExtArgs>
        fields: Prisma.YieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YieldFindUniqueArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$YieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YieldFindUniqueOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          findFirst: {
            args: Prisma.YieldFindFirstArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$YieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YieldFindFirstOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          findMany: {
            args: Prisma.YieldFindManyArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$YieldPayload>[]
          }
          create: {
            args: Prisma.YieldCreateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          createMany: {
            args: Prisma.YieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YieldCreateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$YieldPayload>[]
          }
          delete: {
            args: Prisma.YieldDeleteArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          update: {
            args: Prisma.YieldUpdateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          deleteMany: {
            args: Prisma.YieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YieldUpdateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$YieldPayload>[]
          }
          upsert: {
            args: Prisma.YieldUpsertArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$YieldPayload>
          }
          aggregate: {
            args: Prisma.YieldAggregateArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<AggregateYield>
          }
          groupBy: {
            args: Prisma.YieldGroupByArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<YieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.YieldCountArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<YieldCountAggregateOutputType> | number
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
  export const defineExtension = runtime.Extensions.defineExtension as unknown as runtime.Types.Extensions.ExtendsHook<"define", Prisma.TypeMapCb, runtime.Types.Extensions.DefaultArgs>
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
    crop?: CropOmit
    yield?: YieldOmit
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
    next: (params: MiddlewareParams) => runtime.Types.Utils.JsPromise<T>,
  ) => runtime.Types.Utils.JsPromise<T>

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
   * Model Crop
   */

  export type AggregateCrop = {
    _count: CropCountAggregateOutputType | null
    _avg: CropAvgAggregateOutputType | null
    _sum: CropSumAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  export type CropAvgAggregateOutputType = {
    id: number | null
  }

  export type CropSumAggregateOutputType = {
    id: number | null
  }

  export type CropMinAggregateOutputType = {
    id: number | null
    name: string | null
    growth: string | null
    createdAt: Date | null
  }

  export type CropMaxAggregateOutputType = {
    id: number | null
    name: string | null
    growth: string | null
    createdAt: Date | null
  }

  export type CropCountAggregateOutputType = {
    id: number
    name: number
    growth: number
    createdAt: number
    _all: number
  }


  export type CropAvgAggregateInputType = {
    id?: true
  }

  export type CropSumAggregateInputType = {
    id?: true
  }

  export type CropMinAggregateInputType = {
    id?: true
    name?: true
    growth?: true
    createdAt?: true
  }

  export type CropMaxAggregateInputType = {
    id?: true
    name?: true
    growth?: true
    createdAt?: true
  }

  export type CropCountAggregateInputType = {
    id?: true
    name?: true
    growth?: true
    createdAt?: true
    _all?: true
  }

  export type CropAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Crop to aggregate.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crops
    **/
    _count?: true | CropCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CropAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CropSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropMaxAggregateInputType
  }

  export type GetCropAggregateType<T extends CropAggregateArgs> = {
        [P in keyof T & keyof AggregateCrop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrop[P]>
      : GetScalarType<T[P], AggregateCrop[P]>
  }




  export type CropGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: CropWhereInput
    orderBy?: CropOrderByWithAggregationInput | CropOrderByWithAggregationInput[]
    by: CropScalarFieldEnum[] | CropScalarFieldEnum
    having?: CropScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropCountAggregateInputType | true
    _avg?: CropAvgAggregateInputType
    _sum?: CropSumAggregateInputType
    _min?: CropMinAggregateInputType
    _max?: CropMaxAggregateInputType
  }

  export type CropGroupByOutputType = {
    id: number
    name: string
    growth: string
    createdAt: Date
    _count: CropCountAggregateOutputType | null
    _avg: CropAvgAggregateOutputType | null
    _sum: CropSumAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  type GetCropGroupByPayload<T extends CropGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CropGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropGroupByOutputType[P]>
            : GetScalarType<T[P], CropGroupByOutputType[P]>
        }
      >
    >


  export type CropSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    growth?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["crop"]>

  export type CropSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    growth?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["crop"]>

  export type CropSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    growth?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["crop"]>

  export type CropSelectScalar = {
    id?: boolean
    name?: boolean
    growth?: boolean
    createdAt?: boolean
  }

  export type CropOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "growth" | "createdAt", ExtArgs["result"]["crop"]>

  export type $CropPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Crop"
    objects: {}
    scalars: runtime.Types.Extensions.GetPayloadResult<{
      id: number
      name: string
      growth: string
      createdAt: Date
    }, ExtArgs["result"]["crop"]>
    composites: {}
  }

  export type CropGetPayload<S extends boolean | null | undefined | CropDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CropPayload, S>

  export type CropCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
    Omit<CropFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CropCountAggregateInputType | true
    }

  export interface CropDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crop'], meta: { name: 'Crop' } }
    /**
     * Find zero or one Crop that matches the filter.
     * @param {CropFindUniqueArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropFindUniqueArgs>(args: SelectSubset<T, CropFindUniqueArgs<ExtArgs>>): Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CropFindUniqueOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropFindUniqueOrThrowArgs>(args: SelectSubset<T, CropFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropFindFirstArgs>(args?: SelectSubset<T, CropFindFirstArgs<ExtArgs>>): Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropFindFirstOrThrowArgs>(args?: SelectSubset<T, CropFindFirstOrThrowArgs<ExtArgs>>): Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crops
     * const crops = await prisma.crop.findMany()
     * 
     * // Get first 10 Crops
     * const crops = await prisma.crop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cropWithIdOnly = await prisma.crop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CropFindManyArgs>(args?: SelectSubset<T, CropFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crop.
     * @param {CropCreateArgs} args - Arguments to create a Crop.
     * @example
     * // Create one Crop
     * const Crop = await prisma.crop.create({
     *   data: {
     *     // ... data to create a Crop
     *   }
     * })
     * 
     */
    create<T extends CropCreateArgs>(args: SelectSubset<T, CropCreateArgs<ExtArgs>>): Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crops.
     * @param {CropCreateManyArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CropCreateManyArgs>(args?: SelectSubset<T, CropCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crops and returns the data saved in the database.
     * @param {CropCreateManyAndReturnArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crops and only return the `id`
     * const cropWithIdOnly = await prisma.crop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CropCreateManyAndReturnArgs>(args?: SelectSubset<T, CropCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crop.
     * @param {CropDeleteArgs} args - Arguments to delete one Crop.
     * @example
     * // Delete one Crop
     * const Crop = await prisma.crop.delete({
     *   where: {
     *     // ... filter to delete one Crop
     *   }
     * })
     * 
     */
    delete<T extends CropDeleteArgs>(args: SelectSubset<T, CropDeleteArgs<ExtArgs>>): Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crop.
     * @param {CropUpdateArgs} args - Arguments to update one Crop.
     * @example
     * // Update one Crop
     * const crop = await prisma.crop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CropUpdateArgs>(args: SelectSubset<T, CropUpdateArgs<ExtArgs>>): Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crops.
     * @param {CropDeleteManyArgs} args - Arguments to filter Crops to delete.
     * @example
     * // Delete a few Crops
     * const { count } = await prisma.crop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CropDeleteManyArgs>(args?: SelectSubset<T, CropDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crops
     * const crop = await prisma.crop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CropUpdateManyArgs>(args: SelectSubset<T, CropUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops and returns the data updated in the database.
     * @param {CropUpdateManyAndReturnArgs} args - Arguments to update many Crops.
     * @example
     * // Update many Crops
     * const crop = await prisma.crop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crops and only return the `id`
     * const cropWithIdOnly = await prisma.crop.updateManyAndReturn({
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
    updateManyAndReturn<T extends CropUpdateManyAndReturnArgs>(args: SelectSubset<T, CropUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crop.
     * @param {CropUpsertArgs} args - Arguments to update or create a Crop.
     * @example
     * // Update or create a Crop
     * const crop = await prisma.crop.upsert({
     *   create: {
     *     // ... data to create a Crop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crop we want to update
     *   }
     * })
     */
    upsert<T extends CropUpsertArgs>(args: SelectSubset<T, CropUpsertArgs<ExtArgs>>): Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropCountArgs} args - Arguments to filter Crops to count.
     * @example
     * // Count the number of Crops
     * const count = await prisma.crop.count({
     *   where: {
     *     // ... the filter for the Crops we want to count
     *   }
     * })
    **/
    count<T extends CropCountArgs>(
      args?: Subset<T, CropCountArgs>,
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CropAggregateArgs>(args: Subset<T, CropAggregateArgs>): Prisma.PrismaPromise<GetCropAggregateType<T>>

    /**
     * Group by Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropGroupByArgs} args - Group by arguments.
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
      T extends CropGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CropGroupByArgs['orderBy'] }
        : { orderBy?: CropGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crop model
   */
  readonly fields: CropFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CropClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
  }




  /**
   * Fields of the Crop model
   */
  export interface CropFieldRefs {
    readonly id: FieldRef<"Crop", 'Int'>
    readonly name: FieldRef<"Crop", 'String'>
    readonly growth: FieldRef<"Crop", 'String'>
    readonly createdAt: FieldRef<"Crop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Crop findUnique
   */
  export type CropFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop findUniqueOrThrow
   */
  export type CropFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop findFirst
   */
  export type CropFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop findFirstOrThrow
   */
  export type CropFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop findMany
   */
  export type CropFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Filter, which Crops to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop create
   */
  export type CropCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * The data needed to create a Crop.
     */
    data: XOR<CropCreateInput, CropUncheckedCreateInput>
  }

  /**
   * Crop createMany
   */
  export type CropCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crops.
     */
    data: CropCreateManyInput | CropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crop createManyAndReturn
   */
  export type CropCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * The data used to create many Crops.
     */
    data: CropCreateManyInput | CropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crop update
   */
  export type CropUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * The data needed to update a Crop.
     */
    data: XOR<CropUpdateInput, CropUncheckedUpdateInput>
    /**
     * Choose, which Crop to update.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop updateMany
   */
  export type CropUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Crops.
     */
    data: XOR<CropUpdateManyMutationInput, CropUncheckedUpdateManyInput>
    /**
     * Filter which Crops to update
     */
    where?: CropWhereInput
    /**
     * Limit how many Crops to update.
     */
    limit?: number
  }

  /**
   * Crop updateManyAndReturn
   */
  export type CropUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * The data used to update Crops.
     */
    data: XOR<CropUpdateManyMutationInput, CropUncheckedUpdateManyInput>
    /**
     * Filter which Crops to update
     */
    where?: CropWhereInput
    /**
     * Limit how many Crops to update.
     */
    limit?: number
  }

  /**
   * Crop upsert
   */
  export type CropUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * The filter to search for the Crop to update in case it exists.
     */
    where: CropWhereUniqueInput
    /**
     * In case the Crop found by the `where` argument doesn't exist, create a new Crop with this data.
     */
    create: XOR<CropCreateInput, CropUncheckedCreateInput>
    /**
     * In case the Crop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CropUpdateInput, CropUncheckedUpdateInput>
  }

  /**
   * Crop delete
   */
  export type CropDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
    /**
     * Filter which Crop to delete.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop deleteMany
   */
  export type CropDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Crops to delete
     */
    where?: CropWhereInput
    /**
     * Limit how many Crops to delete.
     */
    limit?: number
  }

  /**
   * Crop without action
   */
  export type CropDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crop
     */
    omit?: CropOmit<ExtArgs> | null
  }


  /**
   * Model Yield
   */

  export type AggregateYield = {
    _count: YieldCountAggregateOutputType | null
    _avg: YieldAvgAggregateOutputType | null
    _sum: YieldSumAggregateOutputType | null
    _min: YieldMinAggregateOutputType | null
    _max: YieldMaxAggregateOutputType | null
  }

  export type YieldAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type YieldSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type YieldMinAggregateOutputType = {
    id: number | null
    amount: number | null
    createdAt: Date | null
  }

  export type YieldMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    createdAt: Date | null
  }

  export type YieldCountAggregateOutputType = {
    id: number
    amount: number
    createdAt: number
    _all: number
  }


  export type YieldAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type YieldSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type YieldMinAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
  }

  export type YieldMaxAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
  }

  export type YieldCountAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type YieldAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Yield to aggregate.
     */
    where?: YieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yields to fetch.
     */
    orderBy?: YieldOrderByWithRelationInput | YieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Yields
    **/
    _count?: true | YieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YieldMaxAggregateInputType
  }

  export type GetYieldAggregateType<T extends YieldAggregateArgs> = {
        [P in keyof T & keyof AggregateYield]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYield[P]>
      : GetScalarType<T[P], AggregateYield[P]>
  }




  export type YieldGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: YieldWhereInput
    orderBy?: YieldOrderByWithAggregationInput | YieldOrderByWithAggregationInput[]
    by: YieldScalarFieldEnum[] | YieldScalarFieldEnum
    having?: YieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YieldCountAggregateInputType | true
    _avg?: YieldAvgAggregateInputType
    _sum?: YieldSumAggregateInputType
    _min?: YieldMinAggregateInputType
    _max?: YieldMaxAggregateInputType
  }

  export type YieldGroupByOutputType = {
    id: number
    amount: number
    createdAt: Date
    _count: YieldCountAggregateOutputType | null
    _avg: YieldAvgAggregateOutputType | null
    _sum: YieldSumAggregateOutputType | null
    _min: YieldMinAggregateOutputType | null
    _max: YieldMaxAggregateOutputType | null
  }

  type GetYieldGroupByPayload<T extends YieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YieldGroupByOutputType[P]>
            : GetScalarType<T[P], YieldGroupByOutputType[P]>
        }
      >
    >


  export type YieldSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["yield"]>

  export type YieldSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["yield"]>

  export type YieldSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["yield"]>

  export type YieldSelectScalar = {
    id?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type YieldOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "amount" | "createdAt", ExtArgs["result"]["yield"]>

  export type $YieldPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Yield"
    objects: {}
    scalars: runtime.Types.Extensions.GetPayloadResult<{
      id: number
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["yield"]>
    composites: {}
  }

  export type YieldGetPayload<S extends boolean | null | undefined | YieldDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$YieldPayload, S>

  export type YieldCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
    Omit<YieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YieldCountAggregateInputType | true
    }

  export interface YieldDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Yield'], meta: { name: 'Yield' } }
    /**
     * Find zero or one Yield that matches the filter.
     * @param {YieldFindUniqueArgs} args - Arguments to find a Yield
     * @example
     * // Get one Yield
     * const yield = await prisma.yield.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YieldFindUniqueArgs>(args: SelectSubset<T, YieldFindUniqueArgs<ExtArgs>>): Prisma__YieldClient<runtime.Types.Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Yield that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YieldFindUniqueOrThrowArgs} args - Arguments to find a Yield
     * @example
     * // Get one Yield
     * const yield = await prisma.yield.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YieldFindUniqueOrThrowArgs>(args: SelectSubset<T, YieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YieldClient<runtime.Types.Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yield that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldFindFirstArgs} args - Arguments to find a Yield
     * @example
     * // Get one Yield
     * const yield = await prisma.yield.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YieldFindFirstArgs>(args?: SelectSubset<T, YieldFindFirstArgs<ExtArgs>>): Prisma__YieldClient<runtime.Types.Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yield that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldFindFirstOrThrowArgs} args - Arguments to find a Yield
     * @example
     * // Get one Yield
     * const yield = await prisma.yield.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YieldFindFirstOrThrowArgs>(args?: SelectSubset<T, YieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__YieldClient<runtime.Types.Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Yields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Yields
     * const yields = await prisma.yield.findMany()
     * 
     * // Get first 10 Yields
     * const yields = await prisma.yield.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yieldWithIdOnly = await prisma.yield.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YieldFindManyArgs>(args?: SelectSubset<T, YieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Yield.
     * @param {YieldCreateArgs} args - Arguments to create a Yield.
     * @example
     * // Create one Yield
     * const Yield = await prisma.yield.create({
     *   data: {
     *     // ... data to create a Yield
     *   }
     * })
     * 
     */
    create<T extends YieldCreateArgs>(args: SelectSubset<T, YieldCreateArgs<ExtArgs>>): Prisma__YieldClient<runtime.Types.Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Yields.
     * @param {YieldCreateManyArgs} args - Arguments to create many Yields.
     * @example
     * // Create many Yields
     * const yield = await prisma.yield.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YieldCreateManyArgs>(args?: SelectSubset<T, YieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Yields and returns the data saved in the database.
     * @param {YieldCreateManyAndReturnArgs} args - Arguments to create many Yields.
     * @example
     * // Create many Yields
     * const yield = await prisma.yield.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Yields and only return the `id`
     * const yieldWithIdOnly = await prisma.yield.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YieldCreateManyAndReturnArgs>(args?: SelectSubset<T, YieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Yield.
     * @param {YieldDeleteArgs} args - Arguments to delete one Yield.
     * @example
     * // Delete one Yield
     * const Yield = await prisma.yield.delete({
     *   where: {
     *     // ... filter to delete one Yield
     *   }
     * })
     * 
     */
    delete<T extends YieldDeleteArgs>(args: SelectSubset<T, YieldDeleteArgs<ExtArgs>>): Prisma__YieldClient<runtime.Types.Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Yield.
     * @param {YieldUpdateArgs} args - Arguments to update one Yield.
     * @example
     * // Update one Yield
     * const yield = await prisma.yield.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YieldUpdateArgs>(args: SelectSubset<T, YieldUpdateArgs<ExtArgs>>): Prisma__YieldClient<runtime.Types.Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Yields.
     * @param {YieldDeleteManyArgs} args - Arguments to filter Yields to delete.
     * @example
     * // Delete a few Yields
     * const { count } = await prisma.yield.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YieldDeleteManyArgs>(args?: SelectSubset<T, YieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Yields
     * const yield = await prisma.yield.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YieldUpdateManyArgs>(args: SelectSubset<T, YieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yields and returns the data updated in the database.
     * @param {YieldUpdateManyAndReturnArgs} args - Arguments to update many Yields.
     * @example
     * // Update many Yields
     * const yield = await prisma.yield.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Yields and only return the `id`
     * const yieldWithIdOnly = await prisma.yield.updateManyAndReturn({
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
    updateManyAndReturn<T extends YieldUpdateManyAndReturnArgs>(args: SelectSubset<T, YieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Yield.
     * @param {YieldUpsertArgs} args - Arguments to update or create a Yield.
     * @example
     * // Update or create a Yield
     * const yield = await prisma.yield.upsert({
     *   create: {
     *     // ... data to create a Yield
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Yield we want to update
     *   }
     * })
     */
    upsert<T extends YieldUpsertArgs>(args: SelectSubset<T, YieldUpsertArgs<ExtArgs>>): Prisma__YieldClient<runtime.Types.Result.GetResult<Prisma.$YieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Yields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldCountArgs} args - Arguments to filter Yields to count.
     * @example
     * // Count the number of Yields
     * const count = await prisma.yield.count({
     *   where: {
     *     // ... the filter for the Yields we want to count
     *   }
     * })
    **/
    count<T extends YieldCountArgs>(
      args?: Subset<T, YieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Yield.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YieldAggregateArgs>(args: Subset<T, YieldAggregateArgs>): Prisma.PrismaPromise<GetYieldAggregateType<T>>

    /**
     * Group by Yield.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldGroupByArgs} args - Group by arguments.
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
      T extends YieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YieldGroupByArgs['orderBy'] }
        : { orderBy?: YieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Yield model
   */
  readonly fields: YieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Yield.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YieldClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
  }




  /**
   * Fields of the Yield model
   */
  export interface YieldFieldRefs {
    readonly id: FieldRef<"Yield", 'Int'>
    readonly amount: FieldRef<"Yield", 'Float'>
    readonly createdAt: FieldRef<"Yield", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Yield findUnique
   */
  export type YieldFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Filter, which Yield to fetch.
     */
    where: YieldWhereUniqueInput
  }

  /**
   * Yield findUniqueOrThrow
   */
  export type YieldFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Filter, which Yield to fetch.
     */
    where: YieldWhereUniqueInput
  }

  /**
   * Yield findFirst
   */
  export type YieldFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Filter, which Yield to fetch.
     */
    where?: YieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yields to fetch.
     */
    orderBy?: YieldOrderByWithRelationInput | YieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Yields.
     */
    cursor?: YieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Yields.
     */
    distinct?: YieldScalarFieldEnum | YieldScalarFieldEnum[]
  }

  /**
   * Yield findFirstOrThrow
   */
  export type YieldFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Filter, which Yield to fetch.
     */
    where?: YieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yields to fetch.
     */
    orderBy?: YieldOrderByWithRelationInput | YieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Yields.
     */
    cursor?: YieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Yields.
     */
    distinct?: YieldScalarFieldEnum | YieldScalarFieldEnum[]
  }

  /**
   * Yield findMany
   */
  export type YieldFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Filter, which Yields to fetch.
     */
    where?: YieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yields to fetch.
     */
    orderBy?: YieldOrderByWithRelationInput | YieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Yields.
     */
    cursor?: YieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yields.
     */
    skip?: number
    distinct?: YieldScalarFieldEnum | YieldScalarFieldEnum[]
  }

  /**
   * Yield create
   */
  export type YieldCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * The data needed to create a Yield.
     */
    data: XOR<YieldCreateInput, YieldUncheckedCreateInput>
  }

  /**
   * Yield createMany
   */
  export type YieldCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Yields.
     */
    data: YieldCreateManyInput | YieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Yield createManyAndReturn
   */
  export type YieldCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * The data used to create many Yields.
     */
    data: YieldCreateManyInput | YieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Yield update
   */
  export type YieldUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * The data needed to update a Yield.
     */
    data: XOR<YieldUpdateInput, YieldUncheckedUpdateInput>
    /**
     * Choose, which Yield to update.
     */
    where: YieldWhereUniqueInput
  }

  /**
   * Yield updateMany
   */
  export type YieldUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Yields.
     */
    data: XOR<YieldUpdateManyMutationInput, YieldUncheckedUpdateManyInput>
    /**
     * Filter which Yields to update
     */
    where?: YieldWhereInput
    /**
     * Limit how many Yields to update.
     */
    limit?: number
  }

  /**
   * Yield updateManyAndReturn
   */
  export type YieldUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * The data used to update Yields.
     */
    data: XOR<YieldUpdateManyMutationInput, YieldUncheckedUpdateManyInput>
    /**
     * Filter which Yields to update
     */
    where?: YieldWhereInput
    /**
     * Limit how many Yields to update.
     */
    limit?: number
  }

  /**
   * Yield upsert
   */
  export type YieldUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * The filter to search for the Yield to update in case it exists.
     */
    where: YieldWhereUniqueInput
    /**
     * In case the Yield found by the `where` argument doesn't exist, create a new Yield with this data.
     */
    create: XOR<YieldCreateInput, YieldUncheckedCreateInput>
    /**
     * In case the Yield was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YieldUpdateInput, YieldUncheckedUpdateInput>
  }

  /**
   * Yield delete
   */
  export type YieldDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
    /**
     * Filter which Yield to delete.
     */
    where: YieldWhereUniqueInput
  }

  /**
   * Yield deleteMany
   */
  export type YieldDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Yields to delete
     */
    where?: YieldWhereInput
    /**
     * Limit how many Yields to delete.
     */
    limit?: number
  }

  /**
   * Yield without action
   */
  export type YieldDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yield
     */
    select?: YieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yield
     */
    omit?: YieldOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  } as const)

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CropScalarFieldEnum = {
    id: 'id',
    name: 'name',
    growth: 'growth',
    createdAt: 'createdAt'
  } as const

  export type CropScalarFieldEnum = (typeof CropScalarFieldEnum)[keyof typeof CropScalarFieldEnum]


  export const YieldScalarFieldEnum = {
    id: 'id',
    amount: 'amount',
    createdAt: 'createdAt'
  } as const

  export type YieldScalarFieldEnum = (typeof YieldScalarFieldEnum)[keyof typeof YieldScalarFieldEnum]


  export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
  } as const

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
  } as const

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


  export type CropWhereInput = {
    AND?: CropWhereInput | CropWhereInput[]
    OR?: CropWhereInput[]
    NOT?: CropWhereInput | CropWhereInput[]
    id?: IntFilter<"Crop"> | number
    name?: StringFilter<"Crop"> | string
    growth?: StringFilter<"Crop"> | string
    createdAt?: DateTimeFilter<"Crop"> | Date | string
  }

  export type CropOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    growth?: SortOrder
    createdAt?: SortOrder
  }

  export type CropWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CropWhereInput | CropWhereInput[]
    OR?: CropWhereInput[]
    NOT?: CropWhereInput | CropWhereInput[]
    name?: StringFilter<"Crop"> | string
    growth?: StringFilter<"Crop"> | string
    createdAt?: DateTimeFilter<"Crop"> | Date | string
  }, "id">

  export type CropOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    growth?: SortOrder
    createdAt?: SortOrder
    _count?: CropCountOrderByAggregateInput
    _avg?: CropAvgOrderByAggregateInput
    _max?: CropMaxOrderByAggregateInput
    _min?: CropMinOrderByAggregateInput
    _sum?: CropSumOrderByAggregateInput
  }

  export type CropScalarWhereWithAggregatesInput = {
    AND?: CropScalarWhereWithAggregatesInput | CropScalarWhereWithAggregatesInput[]
    OR?: CropScalarWhereWithAggregatesInput[]
    NOT?: CropScalarWhereWithAggregatesInput | CropScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Crop"> | number
    name?: StringWithAggregatesFilter<"Crop"> | string
    growth?: StringWithAggregatesFilter<"Crop"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Crop"> | Date | string
  }

  export type YieldWhereInput = {
    AND?: YieldWhereInput | YieldWhereInput[]
    OR?: YieldWhereInput[]
    NOT?: YieldWhereInput | YieldWhereInput[]
    id?: IntFilter<"Yield"> | number
    amount?: FloatFilter<"Yield"> | number
    createdAt?: DateTimeFilter<"Yield"> | Date | string
  }

  export type YieldOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type YieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: YieldWhereInput | YieldWhereInput[]
    OR?: YieldWhereInput[]
    NOT?: YieldWhereInput | YieldWhereInput[]
    amount?: FloatFilter<"Yield"> | number
    createdAt?: DateTimeFilter<"Yield"> | Date | string
  }, "id">

  export type YieldOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: YieldCountOrderByAggregateInput
    _avg?: YieldAvgOrderByAggregateInput
    _max?: YieldMaxOrderByAggregateInput
    _min?: YieldMinOrderByAggregateInput
    _sum?: YieldSumOrderByAggregateInput
  }

  export type YieldScalarWhereWithAggregatesInput = {
    AND?: YieldScalarWhereWithAggregatesInput | YieldScalarWhereWithAggregatesInput[]
    OR?: YieldScalarWhereWithAggregatesInput[]
    NOT?: YieldScalarWhereWithAggregatesInput | YieldScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Yield"> | number
    amount?: FloatWithAggregatesFilter<"Yield"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Yield"> | Date | string
  }

  export type CropCreateInput = {
    name: string
    growth: string
    createdAt?: Date | string
  }

  export type CropUncheckedCreateInput = {
    id?: number
    name: string
    growth: string
    createdAt?: Date | string
  }

  export type CropUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    growth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    growth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropCreateManyInput = {
    id?: number
    name: string
    growth: string
    createdAt?: Date | string
  }

  export type CropUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    growth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    growth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldCreateInput = {
    amount: number
    createdAt?: Date | string
  }

  export type YieldUncheckedCreateInput = {
    id?: number
    amount: number
    createdAt?: Date | string
  }

  export type YieldUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldCreateManyInput = {
    id?: number
    amount: number
    createdAt?: Date | string
  }

  export type YieldUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CropCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    growth?: SortOrder
    createdAt?: SortOrder
  }

  export type CropAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CropMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    growth?: SortOrder
    createdAt?: SortOrder
  }

  export type CropMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    growth?: SortOrder
    createdAt?: SortOrder
  }

  export type CropSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type YieldCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type YieldAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type YieldMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type YieldMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type YieldSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type FloatFieldUpdateOperationsInput = {
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }
}