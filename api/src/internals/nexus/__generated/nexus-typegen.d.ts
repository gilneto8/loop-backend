/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../../prisma/prisma.context"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AccountCreateInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    details?: string | null; // String
    email: string; // String!
    name: string; // String!
    password: string; // String!
    trips?: NexusGenInputs['TripCreateNestedManyWithoutOwnerInput'] | null; // TripCreateNestedManyWithoutOwnerInput
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  AccountCreateNestedOneWithoutTripsInput: { // input type
    connect?: NexusGenInputs['AccountWhereUniqueInput'] | null; // AccountWhereUniqueInput
    connectOrCreate?: NexusGenInputs['AccountCreateOrConnectWithouttripsInput'] | null; // AccountCreateOrConnectWithouttripsInput
    create?: NexusGenInputs['AccountCreateWithoutTripsInput'] | null; // AccountCreateWithoutTripsInput
  }
  AccountCreateOrConnectWithouttripsInput: { // input type
    create: NexusGenInputs['AccountCreateWithoutTripsInput']; // AccountCreateWithoutTripsInput!
    where: NexusGenInputs['AccountWhereUniqueInput']; // AccountWhereUniqueInput!
  }
  AccountCreateWithoutTripsInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    details?: string | null; // String
    email: string; // String!
    name: string; // String!
    password: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  AccountOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    details?: NexusGenEnums['SortOrder'] | null; // SortOrder
    email?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    password?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  AccountTripsWhereInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  AccountUpdateInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    details?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    password?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    trips?: NexusGenInputs['TripUpdateManyWithoutOwnerInput'] | null; // TripUpdateManyWithoutOwnerInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  AccountUpdateOneWithoutTripsInput: { // input type
    connect?: NexusGenInputs['AccountWhereUniqueInput'] | null; // AccountWhereUniqueInput
    connectOrCreate?: NexusGenInputs['AccountCreateOrConnectWithouttripsInput'] | null; // AccountCreateOrConnectWithouttripsInput
    create?: NexusGenInputs['AccountCreateWithoutTripsInput'] | null; // AccountCreateWithoutTripsInput
    delete?: boolean | null; // Boolean
    disconnect?: boolean | null; // Boolean
    update?: NexusGenInputs['AccountUpdateWithoutTripsInput'] | null; // AccountUpdateWithoutTripsInput
    upsert?: NexusGenInputs['AccountUpsertWithoutTripsInput'] | null; // AccountUpsertWithoutTripsInput
  }
  AccountUpdateWithoutTripsInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    details?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    password?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  AccountUpsertWithoutTripsInput: { // input type
    create: NexusGenInputs['AccountCreateWithoutTripsInput']; // AccountCreateWithoutTripsInput!
    update: NexusGenInputs['AccountUpdateWithoutTripsInput']; // AccountUpdateWithoutTripsInput!
  }
  AccountWhereInput: { // input type
    AND?: NexusGenInputs['AccountWhereInput'][] | null; // [AccountWhereInput!]
    NOT?: NexusGenInputs['AccountWhereInput'][] | null; // [AccountWhereInput!]
    OR?: NexusGenInputs['AccountWhereInput'][] | null; // [AccountWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    details?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    password?: NexusGenInputs['StringFilter'] | null; // StringFilter
    trips?: NexusGenInputs['TripListRelationFilter'] | null; // TripListRelationFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  AccountWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
  DateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  DateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  IntNullableFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null; // NestedIntNullableFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedDateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedIntNullableFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null; // NestedIntNullableFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NestedStringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NullableDateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  NullableStringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  QueryTripsWhereInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    ownerId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  TripCreateInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    deletedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    name: string; // String!
    owner?: NexusGenInputs['AccountCreateNestedOneWithoutTripsInput'] | null; // AccountCreateNestedOneWithoutTripsInput
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  TripCreateNestedManyWithoutOwnerInput: { // input type
    connect?: NexusGenInputs['TripWhereUniqueInput'][] | null; // [TripWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['TripCreateOrConnectWithoutownerInput'][] | null; // [TripCreateOrConnectWithoutownerInput!]
    create?: NexusGenInputs['TripCreateWithoutOwnerInput'][] | null; // [TripCreateWithoutOwnerInput!]
  }
  TripCreateOrConnectWithoutownerInput: { // input type
    create: NexusGenInputs['TripCreateWithoutOwnerInput']; // TripCreateWithoutOwnerInput!
    where: NexusGenInputs['TripWhereUniqueInput']; // TripWhereUniqueInput!
  }
  TripCreateWithoutOwnerInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    deletedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    name: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  TripListRelationFilter: { // input type
    every?: NexusGenInputs['TripWhereInput'] | null; // TripWhereInput
    none?: NexusGenInputs['TripWhereInput'] | null; // TripWhereInput
    some?: NexusGenInputs['TripWhereInput'] | null; // TripWhereInput
  }
  TripOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    deletedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    description?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    owner?: NexusGenInputs['AccountOrderByInput'] | null; // AccountOrderByInput
    ownerId?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  TripScalarWhereInput: { // input type
    AND?: NexusGenInputs['TripScalarWhereInput'][] | null; // [TripScalarWhereInput!]
    NOT?: NexusGenInputs['TripScalarWhereInput'][] | null; // [TripScalarWhereInput!]
    OR?: NexusGenInputs['TripScalarWhereInput'][] | null; // [TripScalarWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    deletedAt?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    description?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    ownerId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  TripUpdateInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    deletedAt?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
    description?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    owner?: NexusGenInputs['AccountUpdateOneWithoutTripsInput'] | null; // AccountUpdateOneWithoutTripsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  TripUpdateManyMutationInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    deletedAt?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
    description?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  TripUpdateManyWithWhereWithoutOwnerInput: { // input type
    data: NexusGenInputs['TripUpdateManyMutationInput']; // TripUpdateManyMutationInput!
    where: NexusGenInputs['TripScalarWhereInput']; // TripScalarWhereInput!
  }
  TripUpdateManyWithoutOwnerInput: { // input type
    connect?: NexusGenInputs['TripWhereUniqueInput'][] | null; // [TripWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['TripCreateOrConnectWithoutownerInput'][] | null; // [TripCreateOrConnectWithoutownerInput!]
    create?: NexusGenInputs['TripCreateWithoutOwnerInput'][] | null; // [TripCreateWithoutOwnerInput!]
    delete?: NexusGenInputs['TripWhereUniqueInput'][] | null; // [TripWhereUniqueInput!]
    deleteMany?: NexusGenInputs['TripScalarWhereInput'][] | null; // [TripScalarWhereInput!]
    disconnect?: NexusGenInputs['TripWhereUniqueInput'][] | null; // [TripWhereUniqueInput!]
    set?: NexusGenInputs['TripWhereUniqueInput'][] | null; // [TripWhereUniqueInput!]
    update?: NexusGenInputs['TripUpdateWithWhereUniqueWithoutOwnerInput'][] | null; // [TripUpdateWithWhereUniqueWithoutOwnerInput!]
    updateMany?: NexusGenInputs['TripUpdateManyWithWhereWithoutOwnerInput'][] | null; // [TripUpdateManyWithWhereWithoutOwnerInput!]
    upsert?: NexusGenInputs['TripUpsertWithWhereUniqueWithoutOwnerInput'][] | null; // [TripUpsertWithWhereUniqueWithoutOwnerInput!]
  }
  TripUpdateWithWhereUniqueWithoutOwnerInput: { // input type
    data: NexusGenInputs['TripUpdateWithoutOwnerInput']; // TripUpdateWithoutOwnerInput!
    where: NexusGenInputs['TripWhereUniqueInput']; // TripWhereUniqueInput!
  }
  TripUpdateWithoutOwnerInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    deletedAt?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
    description?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  TripUpsertWithWhereUniqueWithoutOwnerInput: { // input type
    create: NexusGenInputs['TripCreateWithoutOwnerInput']; // TripCreateWithoutOwnerInput!
    update: NexusGenInputs['TripUpdateWithoutOwnerInput']; // TripUpdateWithoutOwnerInput!
    where: NexusGenInputs['TripWhereUniqueInput']; // TripWhereUniqueInput!
  }
  TripWhereInput: { // input type
    AND?: NexusGenInputs['TripWhereInput'][] | null; // [TripWhereInput!]
    NOT?: NexusGenInputs['TripWhereInput'][] | null; // [TripWhereInput!]
    OR?: NexusGenInputs['TripWhereInput'][] | null; // [TripWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    deletedAt?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    description?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    owner?: NexusGenInputs['AccountWhereInput'] | null; // AccountWhereInput
    ownerId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  TripWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
  QueryMode: "default" | "insensitive"
  SortOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Account: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    details?: string | null; // String
    email?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
    password?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Mutation: {};
  Query: {};
  Trip: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    deletedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
    ownerId?: number | null; // Int
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Account: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    details: string | null; // String
    email: string | null; // String
    id: number | null; // Int
    name: string | null; // String
    password: string | null; // String
    trips: NexusGenRootTypes['Trip'][]; // [Trip!]!
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Mutation: { // field return type
    createOneAccount: NexusGenRootTypes['Account'] | null; // Account
    createOneTrip: NexusGenRootTypes['Trip'] | null; // Trip
    deleteOneAccount: NexusGenRootTypes['Account'] | null; // Account
    deleteOneTrip: NexusGenRootTypes['Trip'] | null; // Trip
    updateOneAccount: NexusGenRootTypes['Account'] | null; // Account
    updateOneTrip: NexusGenRootTypes['Trip'] | null; // Trip
  }
  Query: { // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    accounts: NexusGenRootTypes['Account'][]; // [Account!]!
    trip: NexusGenRootTypes['Trip'] | null; // Trip
    trips: NexusGenRootTypes['Trip'][]; // [Trip!]!
  }
  Trip: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    deletedAt: NexusGenScalars['DateTime'] | null; // DateTime
    description: string | null; // String
    id: number | null; // Int
    name: string | null; // String
    owner: NexusGenRootTypes['Account'] | null; // Account
    ownerId: number | null; // Int
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
}

export interface NexusGenFieldTypeNames {
  Account: { // field return type name
    createdAt: 'DateTime'
    details: 'String'
    email: 'String'
    id: 'Int'
    name: 'String'
    password: 'String'
    trips: 'Trip'
    updatedAt: 'DateTime'
  }
  Mutation: { // field return type name
    createOneAccount: 'Account'
    createOneTrip: 'Trip'
    deleteOneAccount: 'Account'
    deleteOneTrip: 'Trip'
    updateOneAccount: 'Account'
    updateOneTrip: 'Trip'
  }
  Query: { // field return type name
    account: 'Account'
    accounts: 'Account'
    trip: 'Trip'
    trips: 'Trip'
  }
  Trip: { // field return type name
    createdAt: 'DateTime'
    deletedAt: 'DateTime'
    description: 'String'
    id: 'Int'
    name: 'String'
    owner: 'Account'
    ownerId: 'Int'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Account: {
    trips: { // args
      after?: NexusGenInputs['TripWhereUniqueInput'] | null; // TripWhereUniqueInput
      before?: NexusGenInputs['TripWhereUniqueInput'] | null; // TripWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['AccountTripsWhereInput'] | null; // AccountTripsWhereInput
    }
  }
  Mutation: {
    createOneAccount: { // args
      data: NexusGenInputs['AccountCreateInput']; // AccountCreateInput!
    }
    createOneTrip: { // args
      data: NexusGenInputs['TripCreateInput']; // TripCreateInput!
    }
    deleteOneAccount: { // args
      where: NexusGenInputs['AccountWhereUniqueInput']; // AccountWhereUniqueInput!
    }
    deleteOneTrip: { // args
      where: NexusGenInputs['TripWhereUniqueInput']; // TripWhereUniqueInput!
    }
    updateOneAccount: { // args
      data: NexusGenInputs['AccountUpdateInput']; // AccountUpdateInput!
      where: NexusGenInputs['AccountWhereUniqueInput']; // AccountWhereUniqueInput!
    }
    updateOneTrip: { // args
      data: NexusGenInputs['TripUpdateInput']; // TripUpdateInput!
      where: NexusGenInputs['TripWhereUniqueInput']; // TripWhereUniqueInput!
    }
  }
  Query: {
    account: { // args
      where: NexusGenInputs['AccountWhereUniqueInput']; // AccountWhereUniqueInput!
    }
    accounts: { // args
      after?: NexusGenInputs['AccountWhereUniqueInput'] | null; // AccountWhereUniqueInput
      before?: NexusGenInputs['AccountWhereUniqueInput'] | null; // AccountWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['AccountOrderByInput'][] | null; // [AccountOrderByInput!]
      where?: NexusGenInputs['AccountWhereInput'] | null; // AccountWhereInput
    }
    trip: { // args
      where: NexusGenInputs['TripWhereUniqueInput']; // TripWhereUniqueInput!
    }
    trips: { // args
      after?: NexusGenInputs['TripWhereUniqueInput'] | null; // TripWhereUniqueInput
      before?: NexusGenInputs['TripWhereUniqueInput'] | null; // TripWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['TripOrderByInput'][] | null; // [TripOrderByInput!]
      where?: NexusGenInputs['QueryTripsWhereInput'] | null; // QueryTripsWhereInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}