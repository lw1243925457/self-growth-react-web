import React from "react";
import {Button, Input, message, Space} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {AddTaskDialog} from "./AddTaskDialog";
import {deleteTaskGroupByName, modifyGroupById} from "../../api/taskRequest";

export class TaskGroupListView extends React.Component {
    state = {
        size: 'small',
        group: this.props.value,
        id: this.props.value.id,
    };

    render() {
        const { size } = this.state;
        let cycleMap = {
            0 : "日",
            1 : "周",
            2 : "月",
            3 : "年",
            4 : "无",
        };
        let labelMap = {
            "learn" : "学习",
            "running" : "运动",
            "work" : "工作",
            "sleep" : "睡觉",
            "daily" : "日常",
            "other" : "其他",
        };
        let learnTypeMap = {
            0 : "输入",
            1 : "输出",
        };

        let group = this.props.value;
        let id = this.props.value["id"];
        let name = this.props.value["name"];
        let cycle = cycleMap[this.props.value["cycleType"]];
        let description = this.props.value["description"];
        let label = labelMap[this.props.value["label"]]
        let learnType = learnTypeMap[this.props.value["learnType"]];

        function deleteGroup() {
            deleteTaskGroupByName(name).then(res => {
                console.log(res);
            })
        }

        function modifyGroup(e) {
            console.log(e.target.value)
            let modifyGroup = {"modifyId": id, "name": e.target.value}
            modifyGroupById(modifyGroup).then(res => {
                message.info('任务组修改成功').then(r => "任务组修改失败");
                name = e.target.value;
            })
        }

        return (
            <div align="left">
                <Space>
                    <Input defaultValue={name} bordered={false} onPressEnter={modifyGroup}/>
                    <label>详情：{description}</label>
                    <label>周期：{cycle}</label>
                    <label>标签：{label}</label>
                    <label>学习类型：{learnType}</label>
                    <AddTaskDialog value={name}/>
                    <Button type="primary" icon={<DeleteOutlined />} size={size} onClick={deleteGroup}>
                        删除分组
                    </Button>
                </Space>
            </div>
        );
    }
}

export default TaskGroupListView;
