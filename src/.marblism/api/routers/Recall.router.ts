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

        createMany: procedure.input($Schema.RecallInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recall.createMany(input as any))),

        create: procedure.input($Schema.RecallInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recall.create(input as any))),

        deleteMany: procedure.input($Schema.RecallInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recall.deleteMany(input as any))),

        delete: procedure.input($Schema.RecallInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recall.delete(input as any))),

        findFirst: procedure.input($Schema.RecallInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).recall.findFirst(input as any))),

        findMany: procedure.input($Schema.RecallInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).recall.findMany(input as any))),

        findUnique: procedure.input($Schema.RecallInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).recall.findUnique(input as any))),

        updateMany: procedure.input($Schema.RecallInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recall.updateMany(input as any))),

        update: procedure.input($Schema.RecallInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).recall.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.RecallCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecallCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecallCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecallCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.RecallCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecallCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RecallGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RecallGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecallCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecallCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecallGetPayload<T>, Context>) => Promise<Prisma.RecallGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.RecallDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecallDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecallDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecallDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RecallDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecallDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RecallGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RecallGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecallDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecallDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecallGetPayload<T>, Context>) => Promise<Prisma.RecallGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RecallFindFirstArgs, TData = Prisma.RecallGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RecallFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RecallGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RecallFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecallFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecallGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RecallGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RecallFindManyArgs, TData = Array<Prisma.RecallGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.RecallFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RecallGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RecallFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecallFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RecallGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RecallGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RecallFindUniqueArgs, TData = Prisma.RecallGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RecallFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RecallGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RecallFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecallFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecallGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RecallGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.RecallUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecallUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecallUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecallUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.RecallUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RecallUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RecallGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RecallGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RecallUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RecallUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecallGetPayload<T>, Context>) => Promise<Prisma.RecallGetPayload<T>>
            };

    };
}
