/*
 * @Author: st004362
 * @Date: 2025-04-08 10:10:57
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-04-09 10:51:44
 * @Description: 类型检查
 */

export interface TaskType {
    id: number;
    text: string;
    done: boolean;
}

export interface ActionType {
    type: string;
    id?: number;
    task?: TaskType;
    text?: string;
}