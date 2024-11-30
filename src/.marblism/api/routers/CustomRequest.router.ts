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

        createMany: procedure.input($Schema.CustomRequestInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customRequest.createMany(input as any))),

        create: procedure.input($Schema.CustomRequestInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customRequest.create(input as any))),

        deleteMany: procedure.input($Schema.CustomRequestInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customRequest.deleteMany(input as any))),

        delete: procedure.input($Schema.CustomRequestInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customRequest.delete(input as any))),

        findFirst: procedure.input($Schema.CustomRequestInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).customRequest.findFirst(input as any))),

        findMany: procedure.input($Schema.CustomRequestInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).customRequest.findMany(input as any))),

        findUnique: procedure.input($Schema.CustomRequestInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).customRequest.findUnique(input as any))),

        updateMany: procedure.input($Schema.CustomRequestInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customRequest.updateMany(input as any))),

        update: procedure.input($Schema.CustomRequestInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customRequest.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CustomRequestCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomRequestCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomRequestCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomRequestCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CustomRequestCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomRequestCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CustomRequestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CustomRequestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomRequestCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomRequestCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CustomRequestGetPayload<T>, Context>) => Promise<Prisma.CustomRequestGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CustomRequestDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomRequestDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomRequestDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomRequestDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CustomRequestDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomRequestDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CustomRequestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CustomRequestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomRequestDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomRequestDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CustomRequestGetPayload<T>, Context>) => Promise<Prisma.CustomRequestGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CustomRequestFindFirstArgs, TData = Prisma.CustomRequestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CustomRequestFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CustomRequestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CustomRequestFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CustomRequestFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CustomRequestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CustomRequestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CustomRequestFindManyArgs, TData = Array<Prisma.CustomRequestGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.CustomRequestFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CustomRequestGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CustomRequestFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CustomRequestFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CustomRequestGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CustomRequestGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CustomRequestFindUniqueArgs, TData = Prisma.CustomRequestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CustomRequestFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CustomRequestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CustomRequestFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CustomRequestFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CustomRequestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CustomRequestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CustomRequestUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomRequestUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomRequestUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomRequestUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CustomRequestUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomRequestUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CustomRequestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CustomRequestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomRequestUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomRequestUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CustomRequestGetPayload<T>, Context>) => Promise<Prisma.CustomRequestGetPayload<T>>
            };

    };
}
