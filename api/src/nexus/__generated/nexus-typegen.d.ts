/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../context"


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
    details?: string | null; // String
    email: string; // String!
    name: string; // String!
  }
  AccountOrderByInput: { // input type
    details?: NexusGenEnums['SortOrder'] | null; // SortOrder
    email?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  AccountUpdateInput: { // input type
    details?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  AccountWhereInput: { // input type
    AND?: NexusGenInputs['AccountWhereInput'][] | null; // [AccountWhereInput!]
    NOT?: NexusGenInputs['AccountWhereInput'][] | null; // [AccountWhereInput!]
    OR?: NexusGenInputs['AccountWhereInput'][] | null; // [AccountWhereInput!]
    details?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  AccountWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
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
  NullableStringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
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
}

export interface NexusGenObjects {
  Account: { // root type
    details?: string | null; // String
    email?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Account: { // field return type
    details: string | null; // String
    email: string | null; // String
    id: number | null; // Int
    name: string | null; // String
  }
  Mutation: { // field return type
    createOneAccount: NexusGenRootTypes['Account'] | null; // Account
    deleteOneAccount: NexusGenRootTypes['Account'] | null; // Account
    updateOneAccount: NexusGenRootTypes['Account'] | null; // Account
  }
  Query: { // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    accounts: NexusGenRootTypes['Account'][]; // [Account!]!
    goodbye: string | null; // String
    hello: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Account: { // field return type name
    details: 'String'
    email: 'String'
    id: 'Int'
    name: 'String'
  }
  Mutation: { // field return type name
    createOneAccount: 'Account'
    deleteOneAccount: 'Account'
    updateOneAccount: 'Account'
  }
  Query: { // field return type name
    account: 'Account'
    accounts: 'Account'
    goodbye: 'String'
    hello: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneAccount: { // args
      data: NexusGenInputs['AccountCreateInput']; // AccountCreateInput!
    }
    deleteOneAccount: { // args
      where: NexusGenInputs['AccountWhereUniqueInput']; // AccountWhereUniqueInput!
    }
    updateOneAccount: { // args
      data: NexusGenInputs['AccountUpdateInput']; // AccountUpdateInput!
      where: NexusGenInputs['AccountWhereUniqueInput']; // AccountWhereUniqueInput!
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