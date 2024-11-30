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

        createMany: procedure.input($Schema.DeviceInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).device.createMany(input as any))),

        create: procedure.input($Schema.DeviceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).device.create(input as any))),

        deleteMany: procedure.input($Schema.DeviceInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).device.deleteMany(input as any))),

        delete: procedure.input($Schema.DeviceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).device.delete(input as any))),

        findFirst: procedure.input($Schema.DeviceInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).device.findFirst(input as any))),

        findMany: procedure.input($Schema.DeviceInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).device.findMany(input as any))),

        findUnique: procedure.input($Schema.DeviceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).device.findUnique(input as any))),

        updateMany: procedure.input($Schema.DeviceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).device.updateMany(input as any))),

        update: procedure.input($Schema.DeviceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).device.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.DeviceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DeviceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DeviceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DeviceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.DeviceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DeviceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DeviceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DeviceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DeviceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DeviceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DeviceGetPayload<T>, Context>) => Promise<Prisma.DeviceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.DeviceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DeviceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DeviceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DeviceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.DeviceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DeviceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DeviceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DeviceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DeviceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DeviceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DeviceGetPayload<T>, Context>) => Promise<Prisma.DeviceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.DeviceFindFirstArgs, TData = Prisma.DeviceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DeviceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DeviceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DeviceFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DeviceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DeviceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DeviceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.DeviceFindManyArgs, TData = Array<Prisma.DeviceGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.DeviceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.DeviceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DeviceFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DeviceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.DeviceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.DeviceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.DeviceFindUniqueArgs, TData = Prisma.DeviceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DeviceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DeviceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DeviceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DeviceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DeviceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DeviceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.DeviceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DeviceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DeviceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DeviceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.DeviceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DeviceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DeviceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DeviceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DeviceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DeviceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DeviceGetPayload<T>, Context>) => Promise<Prisma.DeviceGetPayload<T>>
            };

    };
}
