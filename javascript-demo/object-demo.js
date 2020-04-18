/**
 * 解构赋值
 */
const props = {
    onSubmit: () => {
        console.log('onSubmit');
    },
    onCancel: () => {
        console.log('onCancel');
    },
    updateModalVisible: () => {
        console.log('updateModalVisible');
    }
}
const {
    onSubmit: onUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
} = props;

console.log(props);
// onSubmit()
onUpdate()
console.log(handleUpdateModalVisible);
console.log(updateModalVisible);




