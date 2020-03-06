module.exports = (mongoose) => {
    const User = mongoose.model
        ('User',
            {
                id: Number,
                username: String,
                password: String,
                email: String,
                createDate: Date,
                modifyDate: Date,
                createUser: Number,
                modifyUser: Number
            }
        );
    return User
}
