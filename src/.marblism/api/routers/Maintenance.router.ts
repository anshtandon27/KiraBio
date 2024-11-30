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

        createMany: procedure.input($Schema.MaintenanceInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).maintenance.createMany(input as any))),

        create: procedure.input($Schema.MaintenanceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).maintenance.create(input as any))),

        deleteMany: procedure.input($Schema.MaintenanceInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).maintenance.deleteMany(input as any))),

        delete: procedure.input($Schema.MaintenanceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).maintenance.delete(input as any))),

        findFirst: procedure.input($Schema.MaintenanceInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).maintenance.findFirst(input as any))),

        findMany: procedure.input($Schema.MaintenanceInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).maintenance.findMany(input as any))),

        findUnique: procedure.input($Schema.MaintenanceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).maintenance.findUnique(input as any))),

        updateMany: procedure.input($Schema.MaintenanceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).maintenance.updateMany(input as any))),

        update: procedure.input($Schema.MaintenanceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).maintenance.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MaintenanceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaintenanceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaintenanceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaintenanceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MaintenanceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaintenanceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MaintenanceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MaintenanceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaintenanceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaintenanceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MaintenanceGetPayload<T>, Context>) => Promise<Prisma.MaintenanceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MaintenanceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaintenanceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaintenanceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaintenanceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MaintenanceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaintenanceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MaintenanceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MaintenanceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaintenanceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaintenanceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MaintenanceGetPayload<T>, Context>) => Promise<Prisma.MaintenanceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MaintenanceFindFirstArgs, TData = Prisma.MaintenanceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MaintenanceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MaintenanceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MaintenanceFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MaintenanceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MaintenanceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MaintenanceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MaintenanceFindManyArgs, TData = Array<Prisma.MaintenanceGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.MaintenanceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MaintenanceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MaintenanceFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MaintenanceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MaintenanceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MaintenanceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MaintenanceFindUniqueArgs, TData = Prisma.MaintenanceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MaintenanceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MaintenanceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MaintenanceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MaintenanceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MaintenanceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MaintenanceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MaintenanceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaintenanceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaintenanceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaintenanceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MaintenanceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaintenanceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MaintenanceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MaintenanceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaintenanceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaintenanceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MaintenanceGetPayload<T>, Context>) => Promise<Prisma.MaintenanceGetPayload<T>>
            };

    };
}
