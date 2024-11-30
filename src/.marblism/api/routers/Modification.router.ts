/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ModificationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).modification.createMany(input as any))),

        create: procedure.input($Schema.ModificationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).modification.create(input as any))),

        deleteMany: procedure.input($Schema.ModificationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).modification.deleteMany(input as any))),

        delete: procedure.input($Schema.ModificationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).modification.delete(input as any))),

        findFirst: procedure.input($Schema.ModificationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).modification.findFirst(input as any))),

        findMany: procedure.input($Schema.ModificationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).modification.findMany(input as any))),

        findUnique: procedure.input($Schema.ModificationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).modification.findUnique(input as any))),

        updateMany: procedure.input($Schema.ModificationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).modification.updateMany(input as any))),

        update: procedure.input($Schema.ModificationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).modification.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ModificationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModificationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModificationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModificationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ModificationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModificationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ModificationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ModificationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModificationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModificationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ModificationGetPayload<T>, Context>) => Promise<Prisma.ModificationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ModificationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModificationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModificationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModificationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ModificationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModificationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ModificationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ModificationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModificationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModificationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ModificationGetPayload<T>, Context>) => Promise<Prisma.ModificationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ModificationFindFirstArgs, TData = Prisma.ModificationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ModificationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ModificationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ModificationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ModificationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ModificationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ModificationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ModificationFindManyArgs, TData = Array<Prisma.ModificationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ModificationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ModificationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ModificationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ModificationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ModificationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ModificationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ModificationFindUniqueArgs, TData = Prisma.ModificationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ModificationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ModificationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ModificationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ModificationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ModificationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ModificationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ModificationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModificationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModificationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModificationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ModificationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModificationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ModificationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ModificationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModificationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModificationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ModificationGetPayload<T>, Context>) => Promise<Prisma.ModificationGetPayload<T>>
            };

    };
}
