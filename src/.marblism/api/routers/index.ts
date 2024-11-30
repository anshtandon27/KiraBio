/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createDeviceRouter from "./Device.router";
import createTransactionRouter from "./Transaction.router";
import createCustomRequestRouter from "./CustomRequest.router";
import createModificationRouter from "./Modification.router";
import createRecallRouter from "./Recall.router";
import createMaintenanceRouter from "./Maintenance.router";
import createUserRouter from "./User.router";
import createPushNotificationRouter from "./PushNotification.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as DeviceClientType } from "./Device.router";
import { ClientType as TransactionClientType } from "./Transaction.router";
import { ClientType as CustomRequestClientType } from "./CustomRequest.router";
import { ClientType as ModificationClientType } from "./Modification.router";
import { ClientType as RecallClientType } from "./Recall.router";
import { ClientType as MaintenanceClientType } from "./Maintenance.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PushNotificationClientType } from "./PushNotification.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        device: createDeviceRouter(router, procedure),
        transaction: createTransactionRouter(router, procedure),
        customRequest: createCustomRequestRouter(router, procedure),
        modification: createModificationRouter(router, procedure),
        recall: createRecallRouter(router, procedure),
        maintenance: createMaintenanceRouter(router, procedure),
        user: createUserRouter(router, procedure),
        pushNotification: createPushNotificationRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    device: DeviceClientType<AppRouter>;
    transaction: TransactionClientType<AppRouter>;
    customRequest: CustomRequestClientType<AppRouter>;
    modification: ModificationClientType<AppRouter>;
    recall: RecallClientType<AppRouter>;
    maintenance: MaintenanceClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    pushNotification: PushNotificationClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
