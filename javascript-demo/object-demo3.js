const method = (
    ({
        userAndregister,
        loading,
    }) => {
        const s = {
            userAndregister,
            submitting: loading
        }
        return s;
    }
)

const s = method({
    userAndregister: '1',
    loading: 2
})
console.log(s);
