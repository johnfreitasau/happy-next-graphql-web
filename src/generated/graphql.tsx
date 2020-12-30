import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  orphanages: Array<Orphanages>;
  findOrphanageByName?: Maybe<Orphanages>;
  findOrphanageById?: Maybe<Orphanages>;
};


export type QueryFindOrphanageByNameArgs = {
  name: Scalars['String'];
};


export type QueryFindOrphanageByIdArgs = {
  id: Scalars['String'];
};

export type Orphanages = {
  __typename?: 'Orphanages';
  id: Scalars['String'];
  name: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  about: Scalars['String'];
  instructions: Scalars['String'];
  openingHours: Scalars['String'];
  openOnWeekends: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type Mutation = {
  __typename?: 'Mutation';
  createOrphanage: Orphanages;
  updateOrphanage: Scalars['Boolean'];
  deleteOrphanage: Scalars['Boolean'];
};


export type MutationCreateOrphanageArgs = {
  options: OrphanageInsertInput;
};


export type MutationUpdateOrphanageArgs = {
  options: OrphanageUpdateInput;
  id: Scalars['String'];
};


export type MutationDeleteOrphanageArgs = {
  id: Scalars['String'];
};

export type OrphanageInsertInput = {
  name: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  about: Scalars['String'];
  instructions: Scalars['String'];
  openingHours: Scalars['String'];
  openOnWeekends: Scalars['Boolean'];
};

export type OrphanageUpdateInput = {
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  about?: Maybe<Scalars['String']>;
  instructions?: Maybe<Scalars['String']>;
  openingHours?: Maybe<Scalars['String']>;
  openOnWeekends?: Maybe<Scalars['Boolean']>;
};

export type CreateOrphanageMutationVariables = Exact<{
  options: OrphanageInsertInput;
}>;


export type CreateOrphanageMutation = (
  { __typename?: 'Mutation' }
  & { createOrphanage: (
    { __typename?: 'Orphanages' }
    & Pick<Orphanages, 'id' | 'name' | 'latitude' | 'longitude' | 'about' | 'instructions' | 'openingHours' | 'openOnWeekends'>
  ) }
);

export type OrphanagesQueryVariables = Exact<{ [key: string]: never; }>;


export type OrphanagesQuery = (
  { __typename?: 'Query' }
  & { orphanages: Array<(
    { __typename?: 'Orphanages' }
    & Pick<Orphanages, 'id' | 'name' | 'latitude' | 'longitude' | 'about' | 'instructions' | 'openingHours' | 'openOnWeekends'>
  )> }
);

export type FindOrphanageByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindOrphanageByIdQuery = (
  { __typename?: 'Query' }
  & { findOrphanageById?: Maybe<(
    { __typename?: 'Orphanages' }
    & Pick<Orphanages, 'name'>
  )> }
);

export type FindOrphanageByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type FindOrphanageByNameQuery = (
  { __typename?: 'Query' }
  & { findOrphanageByName?: Maybe<(
    { __typename?: 'Orphanages' }
    & Pick<Orphanages, 'name'>
  )> }
);


export const CreateOrphanageDocument = gql`
    mutation CreateOrphanage($options: OrphanageInsertInput!) {
  createOrphanage(options: $options) {
    id
    name
    latitude
    longitude
    about
    instructions
    openingHours
    openOnWeekends
  }
}
    `;

export function useCreateOrphanageMutation() {
  return Urql.useMutation<CreateOrphanageMutation, CreateOrphanageMutationVariables>(CreateOrphanageDocument);
};
export const OrphanagesDocument = gql`
    query orphanages {
  orphanages {
    id
    name
    latitude
    longitude
    about
    instructions
    openingHours
    openOnWeekends
  }
}
    `;

export function useOrphanagesQuery(options: Omit<Urql.UseQueryArgs<OrphanagesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OrphanagesQuery>({ query: OrphanagesDocument, ...options });
};
export const FindOrphanageByIdDocument = gql`
    query findOrphanageById($id: String!) {
  findOrphanageById(id: $id) {
    name
  }
}
    `;

export function useFindOrphanageByIdQuery(options: Omit<Urql.UseQueryArgs<FindOrphanageByIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindOrphanageByIdQuery>({ query: FindOrphanageByIdDocument, ...options });
};
export const FindOrphanageByNameDocument = gql`
    query findOrphanageByName($name: String!) {
  findOrphanageByName(name: $name) {
    name
  }
}
    `;

export function useFindOrphanageByNameQuery(options: Omit<Urql.UseQueryArgs<FindOrphanageByNameQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindOrphanageByNameQuery>({ query: FindOrphanageByNameDocument, ...options });
};