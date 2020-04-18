const treeData = {
    "id": 2200,
    "roleCode": "manger",
    "roleName": "管理用户",
    "sort": 2,
    "roleType": 2,
    "path": null,
    "level": null,
    "leaf": null,
    "description": "角色说明。。。。。",
    "activeFlg": null,
    "parent": null,
    "children": [
        {
            "id": 4551,
            "roleCode": "ge",
            "roleName": "一般用户",
            "sort": 2,
            "roleType": 1,
            "path": null,
            "level": null,
            "leaf": null,
            "description": "角色说明。。。。。",
            "activeFlg": null,
            "parent": null,
            "children": []
        },
        {
            "id": 2201,
            "roleCode": "pt",
            "roleName": "普通用户",
            "sort": 2,
            "roleType": 4,
            "path": null,
            "level": null,
            "leaf": null,
            "description": "角色说明。。。。。",
            "activeFlg": null,
            "parent": null,
            "children": []
        },
        {
            "id": 2202,
            "roleCode": "admin",
            "roleName": "超级管理员",
            "sort": 3,
            "roleType": 4,
            "path": null,
            "level": null,
            "leaf": null,
            "description": "角色说明。。。。。",
            "activeFlg": null,
            "parent": null,
            "children": [
                {
                    "id": 4554,
                    "roleCode": "admin1",
                    "roleName": "角色1",
                    "sort": 3,
                    "roleType": 1,
                    "path": null,
                    "level": null,
                    "leaf": null,
                    "description": "角色说明。。。。。",
                    "activeFlg": null,
                    "parent": null,
                    "children": []
                },
                {
                    "id": 4556,
                    "roleCode": "admin3",
                    "roleName": "角色3",
                    "sort": 3,
                    "roleType": 3,
                    "path": null,
                    "level": null,
                    "leaf": null,
                    "description": "角色说明。。。。。",
                    "activeFlg": null,
                    "parent": null,
                    "children": [
                        {
                            "id": 4557,
                            "roleCode": "admin4",
                            "roleName": "角色4",
                            "sort": 3,
                            "roleType": 3,
                            "path": null,
                            "level": null,
                            "leaf": null,
                            "description": "角色说明。。。。。",
                            "activeFlg": null,
                            "parent": null,
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 4555,
            "roleCode": "admin2",
            "roleName": "角色2",
            "sort": 3,
            "roleType": 1,
            "path": null,
            "level": null,
            "leaf": null,
            "description": "角色说明。。。。。",
            "activeFlg": null,
            "parent": null,
            "children": []
        }
    ]
}
const traversal = (tree, id) => {
    console.log(tree.id);
    for (let i = 0; i < tree.children.length; i++) {
        if (tree.children[i].id === id) {
            tree.children[i].disabled = true;
        }
        traversal(tree.children[i], id)
    }
}
// const result = renderTreeNode(treeData)


const deleteNode = (changeNode, id) => {
    let sonList = changeNode.children

    if (sonList == null || sonList.length === 0) {
        return;
    } else {

        for (let i = 0; i < sonList.length; i++) {

            if (id === sonList[i].id) {
                sonList.splice(i, 1, sonList[i].children);
                deleteNode({}, id);
                break;
            } else {
                deleteNode(sonList[i], id);
            }

        }
    }

}
renderTreeNode(treeData, 4556)

console.log(treeData);
