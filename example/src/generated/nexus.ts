/**
 * This file is automatically generated by GraphQLiteral
 * Do not make changes to this file directly
 *
 * For better typings, you should provide configuration for how to lookup
 * the types. See the documentation for "typegenAutoConfig"
 */
import * as types from '../types'
import * as prisma from './prisma-client/index'

declare global {
  interface GraphQLiteralGen extends GraphQLiteralGenTypes {}
}

// Maybe Promise
type MaybePromise<T> = T | PromiseLike<T>

// Maybe Promise List
type MaybePromiseList<T> = Array<MaybePromise<T>>

// Maybe Thunk
type MaybeThunk<T> = T | (() => T)

// Maybe Thunk, with args
type MaybeThunkArgs<T, A> = T | ((args?: A) => T)

export type QueryFeedReturnType = MaybePromiseList<PostReturnType>

export type QueryFilterPostsReturnType = MaybePromiseList<PostReturnType>

export interface QueryFilterPostsArgs {
  searchString: string
}

export type QueryPostReturnType = null | PostReturnType

export interface QueryPostArgs {
  where: PostWhereUniqueInput
}

export type QueryRootType = {}

export type QueryReturnType = {}

export type PostAuthorReturnType = UserReturnType

export type PostContentReturnType = null | string

export type PostCreatedAtReturnType = unknown

export type PostIdReturnType = string

export type PostPublishedReturnType = boolean

export type PostTitleReturnType = string

export type PostUpdatedAtReturnType = unknown

export type PostRootType = prisma.Post

export type PostReturnType = prisma.Post

export type UserEmailReturnType = string

export type UserIdReturnType = string

export type UserNameReturnType = null | string

export type UserPostsReturnType = MaybePromiseList<PostReturnType>

export interface UserPostsArgs {
  after?: string
  before?: string
  first?: number
  last?: number
  orderBy?: PostOrderByInput
  skip?: number
  where?: PostWhereInput
}

export type UserRootType = prisma.User

export type UserReturnType = prisma.User

export type PostOrderByInput =
  | 'content_ASC'
  | 'content_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'published_ASC'
  | 'published_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

interface PostWhereInput {
  AND: PostWhereInput[]
  author?: UserWhereInput
  content?: string
  content_contains?: string
  content_ends_with?: string
  content_gt?: string
  content_gte?: string
  content_in: string[]
  content_lt?: string
  content_lte?: string
  content_not?: string
  content_not_contains?: string
  content_not_ends_with?: string
  content_not_in: string[]
  content_not_starts_with?: string
  content_starts_with?: string
  createdAt?: unknown
  createdAt_gt?: unknown
  createdAt_gte?: unknown
  createdAt_in: unknown[]
  createdAt_lt?: unknown
  createdAt_lte?: unknown
  createdAt_not?: unknown
  createdAt_not_in: unknown[]
  id?: string
  id_contains?: string
  id_ends_with?: string
  id_gt?: string
  id_gte?: string
  id_in: string[]
  id_lt?: string
  id_lte?: string
  id_not?: string
  id_not_contains?: string
  id_not_ends_with?: string
  id_not_in: string[]
  id_not_starts_with?: string
  id_starts_with?: string
  NOT: PostWhereInput[]
  OR: PostWhereInput[]
  published?: boolean
  published_not?: boolean
  title?: string
  title_contains?: string
  title_ends_with?: string
  title_gt?: string
  title_gte?: string
  title_in: string[]
  title_lt?: string
  title_lte?: string
  title_not?: string
  title_not_contains?: string
  title_not_ends_with?: string
  title_not_in: string[]
  title_not_starts_with?: string
  title_starts_with?: string
  updatedAt?: unknown
  updatedAt_gt?: unknown
  updatedAt_gte?: unknown
  updatedAt_in: unknown[]
  updatedAt_lt?: unknown
  updatedAt_lte?: unknown
  updatedAt_not?: unknown
  updatedAt_not_in: unknown[]
}

interface UserWhereInput {
  AND: UserWhereInput[]
  email?: string
  email_contains?: string
  email_ends_with?: string
  email_gt?: string
  email_gte?: string
  email_in: string[]
  email_lt?: string
  email_lte?: string
  email_not?: string
  email_not_contains?: string
  email_not_ends_with?: string
  email_not_in: string[]
  email_not_starts_with?: string
  email_starts_with?: string
  id?: string
  id_contains?: string
  id_ends_with?: string
  id_gt?: string
  id_gte?: string
  id_in: string[]
  id_lt?: string
  id_lte?: string
  id_not?: string
  id_not_contains?: string
  id_not_ends_with?: string
  id_not_in: string[]
  id_not_starts_with?: string
  id_starts_with?: string
  name?: string
  name_contains?: string
  name_ends_with?: string
  name_gt?: string
  name_gte?: string
  name_in: string[]
  name_lt?: string
  name_lte?: string
  name_not?: string
  name_not_contains?: string
  name_not_ends_with?: string
  name_not_in: string[]
  name_not_starts_with?: string
  name_starts_with?: string
  NOT: UserWhereInput[]
  OR: UserWhereInput[]
  posts_every?: PostWhereInput
  posts_none?: PostWhereInput
  posts_some?: PostWhereInput
}

interface PostWhereUniqueInput {
  id?: string
}

export type MutationCreateDraftReturnType = PostReturnType

export interface MutationCreateDraftArgs {
  authorEmail: string
  content: string
  title: string
}

export type MutationDeletePostReturnType = null | PostReturnType

export interface MutationDeletePostArgs {
  id: string
}

export type MutationPublishReturnType = PostReturnType

export interface MutationPublishArgs {
  id: string
}

export type MutationSignupUserReturnType = UserReturnType

export interface MutationSignupUserArgs {
  email: string
  name: string
}

export type MutationRootType = {}

export type MutationReturnType = {}

export interface GraphQLiteralGenArgTypes {
  Query: {
    filterPosts: QueryFilterPostsArgs
    post: QueryPostArgs
  }
  User: {
    posts: UserPostsArgs
  }
  Mutation: {
    createDraft: MutationCreateDraftArgs
    deletePost: MutationDeletePostArgs
    publish: MutationPublishArgs
    signupUser: MutationSignupUserArgs
  }
}

export interface GraphQLiteralGenRootTypes {
  Query: QueryRootType
  Post: PostRootType
  User: UserRootType
  Mutation: MutationRootType
}

export interface GraphQLiteralGenReturnTypes {
  Query: {
    feed: QueryFeedReturnType
    filterPosts: QueryFilterPostsReturnType
    post: QueryPostReturnType
  }
  Post: {
    author: PostAuthorReturnType
    content: PostContentReturnType
    createdAt: PostCreatedAtReturnType
    id: PostIdReturnType
    published: PostPublishedReturnType
    title: PostTitleReturnType
    updatedAt: PostUpdatedAtReturnType
  }
  User: {
    email: UserEmailReturnType
    id: UserIdReturnType
    name: UserNameReturnType
    posts: UserPostsReturnType
  }
  Mutation: {
    createDraft: MutationCreateDraftReturnType
    deletePost: MutationDeletePostReturnType
    publish: MutationPublishReturnType
    signupUser: MutationSignupUserReturnType
  }
}

export interface GraphQLiteralGenTypes {
  argTypes: GraphQLiteralGenArgTypes
  backingTypes: GraphQLiteralGenRootTypes
  returnTypes: GraphQLiteralGenReturnTypes
  context: types.Context
  enums: {
    PostOrderByInput: PostOrderByInput
  }
  objects: {
    Query: QueryRootType
    Post: PostRootType
    User: UserRootType
    Mutation: MutationRootType
  }
  interfaces: {}
  unions: {}
  scalars: {
    String: any
    ID: any
    Int: any
    DateTime: any
    Boolean: any
  }
  inputObjects: {
    PostWhereInput: any
    UserWhereInput: any
    PostWhereUniqueInput: any
  }
  allInputTypes:
    | Extract<keyof GraphQLiteralGenTypes['inputObjects'], string>
    | Extract<keyof GraphQLiteralGenTypes['enums'], string>
    | Extract<keyof GraphQLiteralGenTypes['scalars'], string>
  allOutputTypes:
    | Extract<keyof GraphQLiteralGenTypes['objects'], string>
    | Extract<keyof GraphQLiteralGenTypes['enums'], string>
    | Extract<keyof GraphQLiteralGenTypes['unions'], string>
    | Extract<keyof GraphQLiteralGenTypes['interfaces'], string>
    | Extract<keyof GraphQLiteralGenTypes['scalars'], string>
}

export type Gen = GraphQLiteralGenTypes
