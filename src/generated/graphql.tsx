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
  findOrphanage: Array<Orphanages>;
};


export type QueryFindOrphanageArgs = {
  name: Scalars['String'];
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

export type OrphanagesQueryVariables = Exact<{ [key: string]: never; }>;


export type OrphanagesQuery = (
  { __typename?: 'Query' }
  & { orphanages: Array<(
    { __typename?: 'Orphanages' }
    & Pick<Orphanages, 'id' | 'name' | 'latitude' | 'longitude' | 'about' | 'instructions' | 'openingHours' | 'openOnWeekends'>
  )> }
);

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