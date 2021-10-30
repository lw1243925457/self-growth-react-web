import request from "./request";

export function getTaskListByGroup() {
    return request({
        url: "http://127.0.0.1:8080/v1/task/listByGroup",
        method: "get"
    });
}

export function addTaskGroup(groupName) {
    return request({
        url: "http://127.0.0.1:8080/v1/task/addTaskGroup",
        method: "post",
        data: groupName,
    })
}

export function addNewTask(newTask) {
    return request({
        url: "http://127.0.0.1:8080/v1/task/add",
        method: "post",
        data: newTask,
    })
}
