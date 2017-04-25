import { Person } from "person-library";
import { Plan } from "plan-library";
import { Vehicle } from "vehicle-library";
export interface PlanOrderItem {
    id: string;
    pid: string;
    plan: Plan;
    price: number;
    amount: number;
}
export interface PlanOrder {
    id: string;
    no: string;
    uid: string;
    pgid?: string;
    qid: string;
    vid: string;
    vehicle: Vehicle;
    state: number;
    state_description: string;
    summary: number;
    payment: number;
    payment_method: number;
    commission_ratio: number;
    owner_id: string;
    insured_id: string;
    owner: Person;
    insured: Person;
    promotion?: number;
    service_ratio: number;
    real_value: number;
    recommend?: string;
    inviter?: string;
    drivers?: Person[];
    items: PlanOrderItem[];
    expect_at: Date;
    start_at?: Date;
    stop_at?: Date;
    paid_at: Date;
    created_at: Date;
    updated_at: Date;
    evtid: string;
    driving_frontal_view?: string;
    driving_rear_view?: string;
}
export declare enum OrderEventType {
    CANCEL = 0,
    CREATE = 1,
    PAY = 2,
    UNDERWRITE = 3,
    TAKE_EFFECT = 4,
    EXPIRED = 5,
    UPDATE = 10,
    ADD_DRIVER = 11,
    DELETE_DRIVER = 12,
    SET_DRIVING_VIEW = 13,
}
export interface OrderEvent {
    id: string;
    type: number;
    opid: string;
    oid: string;
    order_type: OrderEventType;
    occurred_at: Date;
    summary?: number;
    payment?: number;
    qid?: string;
    vid?: string;
    expect_at?: Date;
    start_at?: Date;
    stop_at?: Date;
    real_value?: number;
    recommend?: string;
    inviter?: string;
    oss_pdf?: string;
    no?: string;
    insured?: string;
    owner?: string;
    promotion?: number;
    service?: number;
    driving_frontal_view?: string;
    driving_rear_view?: string;
    driving?: string;
    drivers?: string[];
    commission_ratio?: number;
    payment_method?: number;
    items?: Map<string, number>;
}
